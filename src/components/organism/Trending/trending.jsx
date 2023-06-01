import React from "react";
import styles from "./trending.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const[deletes,setdeletes]=useState(Trend)



  function handledelete(i){
    const updatedlist=[...deletes];
    updatedlist.splice(i)
    setdeletes(updatedlist)

   

  }
  
  return (

    <div className={styles.container}>
      <p className={styles.happening}>What's Happening</p>
      {deletes.map((el,i) => (  
        <div className={styles.inner_container} key={i}>
          <div>
            <p className={styles.p}>{el.topic}</p>
            <h4 className={styles.h4}>{el.hashtag}</h4>
            <p className={styles.p}>{el.tweets}</p>
          </div>
          <button  className={ styles.remove}  onClick={handleClick}><MoreHorizIcon className={styles.trending_icon} /></button>
          <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
        <Typography  style={{ backgroundColor: "white"}} sx={{ p: 2 }}><button className={styles.trendingbtn} onClick={()=>handledelete(i)}> Not interested in this</button><br/><button className={styles.trendingbtn}  onClick={()=>handledelete(i)}>This trend is harmful or spammy</button></Typography>
        </Popover>
        </div>
        
      ))}
      <button className={styles.btn}>Show More</button>
    </div>
  );
}

export default TrendingPage;
