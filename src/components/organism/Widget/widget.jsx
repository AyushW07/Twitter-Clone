import React from "react";
import styles from "./widget.module.css";
import SearchIcon from "@mui/icons-material/Search";
import TrendingPage from "../Trending/trending";
import WhoToFollow from "../WhoToFollow/WhoToFollow";

function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.widget_input}>
        <SearchIcon className={styles.widget_searchIcon} />
        <input placeholder="Search Twitter" type="text" />
        <br />
      </div>
      <TrendingPage />
      <WhoToFollow />
    </div>
  );
}

export default Widget;
