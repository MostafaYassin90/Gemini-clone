import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/geminiContext";

function Main() {
  let {
    onSent,
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  let text = "aaa";
  console.log(text);
  if (text) {
    console.log("text Have Words");
  } else {
    console.log("text Does Not Have Words");
  }

  return (
    <div className="main">
      <div className="nav">
        <p className="head-title">Gemini</p>
        <div className="user-img">
          <img src={assets.user_icon2} alt="user-img" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p className="great-one">Hello, dev.</p>
              <p className="great-two">How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass-img" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="bulb-img" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message-img" />
              </div>
              <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="code-img" />
              </div>
            </div>
            {/* Cards */}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon2} alt="user-icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="geminit-icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <div className="holder-img">
              <img src={assets.gallery_icon} alt="gallery-img" />
              <img src={assets.mic_icon} alt="mic-img" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt="send-img"
                  onClick={() => onSent()}
                />
              ) : null}
            </div>
          </div>
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <a className="href">Your privacy and Gemini Apps</a>
          </p>
        </div>
        {/*main-bottom */}
      </div>
    </div>
  );
}
export default Main;
