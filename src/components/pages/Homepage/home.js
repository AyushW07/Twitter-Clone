import React from "react";
import styles from "./home.module.css";
import Sidebar from "../../organism/Sidebar/sidebar";
import Feed from "../../organism/Feed/feed";
import Widget from "../../organism/Widget/widget";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <Sidebar />
      <Feed />
      <Widget/>
    </div>
  );
};

export default Home;
