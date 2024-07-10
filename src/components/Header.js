import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import FormImage from "../assets/airformlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import SettingIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import AvatarImage from "../assets/avatarimage.png";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <TemporaryDrawer />
        <img
          src={FormImage}
          style={{ height: "35px", width: "35px" }}
          className="airform-image"
        />
        <div className="info">AirForms</div>
      </div>
      <div className="header-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="header-right">
        <IconButton>
          <SettingIcon />
        </IconButton>
        <IconButton>
          <Avatar src={AvatarImage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
