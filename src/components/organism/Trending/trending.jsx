import React from "react";
import styles from "./trending.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Trend = [
  {
    topic: "Sports · Trending",
    hashtag: "Chennai Super Kings",
    tweets: "226K Tweets",
  },
  {
    topic: "Entertainment · Trending",
    hashtag: "Spider-Man 4",
    tweets: "138K Tweets",
  },
  {
    topic: "Sports · Trending",
    hashtag: "Team INDIA",
    tweets: "109K Tweets",
  },
  {
    topic: "Politics · Trending",
    hashtag: "BJP",
    tweets: "168K Tweets",
  },
  {
    topic: "Entertainment · Trending",
    hashtag: "Asur 2",
    tweets: "5,593 Tweets",
  },
];

function TrendingPage() {
  return (
    <div className={styles.container}>
      <p className={styles.happening}>What's Happening</p>
      {Trend.map((el) => (
        <div className={styles.inner_container} key={el.hashtag}>
          <div>
            <p className={styles.p}>{el.topic}</p>
            <h4 className={styles.h4}>{el.hashtag}</h4>
            <p className={styles.p}>{el.tweets}</p>
          </div>
          <MoreHorizIcon className={styles.trending_icon} />
        </div>
      ))}
      <button className={styles.btn}>Show More</button>
    </div>
  );
}

export default TrendingPage;
