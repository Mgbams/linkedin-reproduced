import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.pinimg.com/originals/0c/6c/9c/0c6c9c314fab1e6327001fb843ca6ce3.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Sony Sanga</h2>
        <h4>sony.sanga@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,440</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("Programming")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Design")}
        {recentItem("Developper")}
      </div>
    </div>
  );
}

export default Sidebar;
