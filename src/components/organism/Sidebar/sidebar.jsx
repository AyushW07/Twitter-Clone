import React from 'react';
import styles from"./sidebar.module.css"
import SidebarOption from '../sidebarOption/sidebarOPtion';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <TwitterIcon/>
        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
       
    </div>
  )
}

export default Sidebar;