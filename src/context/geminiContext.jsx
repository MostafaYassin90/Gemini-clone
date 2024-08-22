import { createContext, useState } from "react";
import run from "../config/gemini";

export let Context = createContext();

function ContextProvider({ children }) {
  let [input, setInput] = useState("");
  let [recentPrompt, setRecentPrompt] = useState("");
  let [prevPrompt, setPrevPrompt] = useState([]);
  let [showResult, setShowresult] = useState(false);
  let [loading, setLoading] = useState(false);
  let [resultData, setResultData] = useState("");

  //  Fn Delay Paragraph
  function delayPara(index, nextWord) {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  }
  // Funtion New Chat
  function newChat() {
    setLoading(false);
    setShowresult(false);
  }

  //  Function To Get A Question
  let onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowresult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newRssponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newRssponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      let nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setResultData(newRssponse2);
    setLoading(false);
    setInput("");
  };

  let contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
export default ContextProvider;
