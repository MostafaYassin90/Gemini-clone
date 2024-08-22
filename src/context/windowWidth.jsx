import { createContext, useEffect, useState } from "react";

export let WindowWidth = createContext();

function WindowWidthProvider({ children }) {
  let [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function getWindowWidth() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", getWindowWidth);
    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);

  return (
    <WindowWidth.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowWidth.Provider>
  );
}
export default WindowWidthProvider;
