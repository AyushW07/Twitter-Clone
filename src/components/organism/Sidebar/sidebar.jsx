import React from "react";
import styles from "./sidebar.module.css";
import SidebarOption from "../sidebarOption/sidebarOPtion";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <TwitterIcon />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button
        variant="outlined"
        className="sidebar-tweet-btn"
        fullWidth
        style={{
          backgroundColor: "var(--twitter-color)",
          border: "none",
          color: "white",
          fontWeight: "900",
          textTransform:"inherit",
          borderRadius:"30px",
          height:"50px",
          marginTop:"20px",
        }}
      >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
