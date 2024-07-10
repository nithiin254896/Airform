import React from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import mainbody_workspace from "../assets/mainbody_workspace.png";
import "./Mainbody.css";

function Mainbody() {
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div
          className="mainbody_top__left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      {/* <div className='mainbody_docs'>
                <div className='doc_card'></div>
            </div> */}
      <div className="mainbody_workspace">
        <div className="workspace">
          <img src={mainbody_workspace} className="workspace_image" />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginLeft: "40px",
              marginTop: "15px",
            }}
          >
            Come on in Workspace
          </div>
          <div style={{ fontSize: "14px", lineHeight: "10px" }}>
            <p>Grab a hot cuppa (or cold brew) and get comfortable.</p>
              <div style={{marginLeft: "30px"}}>
                <p>It’s time to create something special.</p>
              </div>
          </div>
          <button className="create_form"> + Create airform</button>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
