import React from "react";
import styles from "./WhoToFollow.module.css";

const Follow = [
  {
    id: 1,
    name: "Upasana Chakraborty",
    userName: "@upasana.chakraborty",
    image:
      "https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph",
  },
  {
    id: 2,
    name: "Aditya Verma",
    userName: "@aditya.verma",
    image:
      "https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph",
  },
  {
    id: 3,
    name: "Rishikesh Kumar Singh",
    userName: "@rishikesh.singh",
    image:
      "https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph",
  },
  {
    id: 4,
    name: "Rajeev Singh",
    userName: "@rajeev.singh",
    image:
      "https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph",
  },
];

function WhoToFollow() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Who to Follow</p>
      <div>
        {Follow.map((ele) => (
          <div key={ele.id} className={styles.inner_container}>
            <img src={ele.image} className={styles.image} />
            <div className={styles.name}>
              <span className={styles.inner_name}>
                <b>{ele.name}</b>
                <p>{ele.userName}</p>
              </span>
              <button className={styles.btn}>Follow</button>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button}>Show More</button>
    </div>
  );
}

export default WhoToFollow;
