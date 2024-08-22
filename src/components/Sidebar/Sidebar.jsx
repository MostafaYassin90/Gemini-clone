import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { WindowWidth } from "../../context/windowWidth";
import { Context } from "../../context/geminiContext";

function Sidebar() {
  let [openSidebar, setOpenSidebar] = useState(false);
  let windowWidth = useContext(WindowWidth).windowSize;
  let { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  let loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`sidebar ${openSidebar ? "open" : "close"} ${
        windowWidth > 992 ? "external" : "internal"
      }`}
    >
      <div
        className="toggle-menu"
        onClick={() => {
          setOpenSidebar((prev) => !prev);
        }}
      >
        <img src={assets.menu_icon} alt="menu-icon" className="menu-icon" />
      </div>
      <div className="new-chat" title="New Chat">
        <a
          href="#"
          className="chat"
          onClick={() => {
            newChat();
          }}
        >
          <img src={assets.plus_icon} alt="plus-icon" />
          <p>New Chat</p>
        </a>
      </div>
      <div className="recent">
        <h3 className="recent-title">Recent</h3>
        {prevPrompt.map((item, index) => {
          return (
            <div
              className="recent-entry"
              key={index}
              onClick={() => {
                loadPrompt(item);
              }}
            >
              <img src={assets.message_icon} alt="message-icon" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="links">
        <a href="#" className="link" title="Help">
          <img src={assets.question_icon} alt="question-icon" />
          <p>Help</p>
        </a>
        <a href="#" className="link" title="Activity">
          <img src={assets.compass_icon} alt="compass-icon" />
          <p>Activity</p>
        </a>
        <a href="#" className="link" title="Settings">
          <img src={assets.setting_icon} alt="setting-icon" />
          <p>Settings</p>
        </a>
      </div>
      <div className="location">
        <span className="bullet"></span>
        <div className="location-info">
          <p>Egypt</p>
          <div>
            <span>From your Ip Address</span>
            <a>Update Location</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
