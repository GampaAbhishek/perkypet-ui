import "./Video.css";
import { useState } from "react";
import Youtube from "../../../assets/youtube.png";

export default function Video() {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div className="video-section">
      <div className="tab-buttons">
        <button
          className={activeTab === "video" ? "active" : ""}
          onClick={() => setActiveTab("video")}
        >
          Video
        </button>
        <button
          className={activeTab === "photo" ? "active" : ""}
          onClick={() => setActiveTab("photo")}
        >
          Photo
        </button>
      </div>
      {activeTab === "video" && (
        <div className="video-container">
        <img src={Youtube}/>
        </div>
      )}
      {activeTab === "photo" && (
        <div className="photo-container">
          <p>Photo content goes here.</p>
        </div>
      )}
    </div>
  );
}