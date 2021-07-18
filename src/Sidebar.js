import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
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

      <div className="sibebar_bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
