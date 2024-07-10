import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import "./Templates.css";
import blank from "../assets/blank.png"
import createform from "../assets/create-form.png"
import contactform from "../assets/contactform.png"
import registerform from "../assets/registerform.png"
import partyform from "../assets/partyform.png"




function Templates() {
  return (
    <div className="templates_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            {" "}
            Create your new Airform
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_buttons">
            Template Gallery
            <UnfoldMore fontSize="small"/>
            </div>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card">
          <img src={createform} alt="no image" className="card_image"/>
          <p className="card_title">blank form</p>
        </div>
        <div className="card">
          <img src={contactform} alt="no image" className="card_image"/>
          <p className="card_title">Contact Information</p>
        </div>
        <div className="card">
          <img src={registerform} alt="no image" className="card_image"/>
          <p className="card_title">Registeration</p>
        </div>
        <div className="card">
          <img src={partyform} alt="no image" className="card_image"/>
          <p className="card_title">Party Invitation</p>
        </div>
      </div>
    </div>
  );
}

export default Templates;
