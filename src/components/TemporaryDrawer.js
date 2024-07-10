import React from "react";
import "./drawer.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Help, Feedback, ContactSupport } from "@material-ui/icons";

import DriveImg from "../assets/drive.png";
import FormImg from "../assets/forms.png";
import SheetImg from "../assets/sheets.png";
import SlideImg from "../assets/slides.png";
import DocsImg from "../assets/docs.png";

const userStyles = makeStyles({
  ListItem: {
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
  },
  slideImages: {
    height: "32px",
    width: "32px",
  },
});

function TemporaryDrawer() {
  const classes = userStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span
              style={{
                color: "#5E6EE9",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              My Workspace
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list-item">
          <img src={DocsImg} className={classes.slideImages} />
          <div className={classes.ListItem}> Docs</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={SheetImg} className={classes.slideImages} />
          <div className={classes.ListItem}> Sheets</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={SlideImg} className={classes.slideImages} />
          <div className={classes.ListItem}> Slides</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={FormImg} style={{ height: "35px", width: "35px" }} />
          <div className={classes.ListItem}> Forms</div>
        </ListItem>
      </List>
      <Divider />
      <ListItem className="list-item">
      <ContactSupport style={{ height: "30px", width: "30px", marginLeft: "12px", color: "#5F6368"}}/>
      <div className={classes.ListItem}>Help & Support</div>
      </ListItem>
      <ListItem className="list-item">
      <Feedback style={{ height: "30px", width: "30px", marginLeft: "12px" , color: "#5F6368"}}/>
      <div className={classes.ListItem}>Feedback</div>
      </ListItem>
      <Divider />
      <ListItem className="list-item">
          <img src={DriveImg} style={{ height: "32px", width: "32px", marginLeft: "12px"}}/>
          <div className={classes.ListItem}> Drive</div>
      </ListItem>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
export default TemporaryDrawer;
