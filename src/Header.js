import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://qvcc.edu/wp-content/uploads/2021/01/linkedin.jpg"
          alt="linkedin image"
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="chats" />
        <HeaderOption Icon={NotificationsIcon} title="notifications" />
        <HeaderOption title="me" onClick={logOutOfApp} avatar={true} />
      </div>
    </div>
  );
}

export default Header;
