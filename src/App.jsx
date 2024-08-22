import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import WindowWidthProvider from "./context/windowWidth";

function App() {
  return (
    <div className="app">
      <WindowWidthProvider>
        <Sidebar />
        <Main />
      </WindowWidthProvider>
    </div>
  );
}
export default App;
