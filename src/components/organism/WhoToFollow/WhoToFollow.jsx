import React from "react";
import styles from "./WhoToFollow.module.css";
import { useState } from "react";
function WhoToFollow() {
  const [toggle1, settoggle1] = useState(true)
  const [toggle2, settoggle2] = useState(true)
  const [toggle3, settoggle3] = useState(true)
  const [toggle4, settoggle4] = useState(true)
  function handlechange1() {
    settoggle1(!toggle1)
  }
  function handlechange2() {
    settoggle2(!toggle2)
  }
  function handlechange3() {
    settoggle3(!toggle3)
  }
  function handlechange4() {
    settoggle4(!toggle4)
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Who to Follow</p>
      <div>

        <div className={styles.inner_container}>
          <img src="https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph" className={styles.image} />
          <div className={styles.name}>
            <span className={styles.inner_name}>
              <b>"upasana chakraborty"</b>
              <p>"@upasana"</p>
            </span>
            <button onClick={handlechange1} className={styles.btn}>{toggle1 ? "Follow" : "Following"}</button>
          </div>
        </div>



        <div className={styles.inner_container}>
          <img src="https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph" className={styles.image} />
          <div className={styles.name}>
            <span className={styles.inner_name}>
              <b>"Aditya verma"</b>
              <p>"@adiverma"</p>
            </span>
            <button onClick={handlechange2} className={styles.btn}>{toggle2 ? "Follow" : "Following"}</button>
          </div>
        </div>




        <div className={styles.inner_container}>
          <img src="https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph" className={styles.image} />
          <div className={styles.name}>
            <span className={styles.inner_name}>
              <b>rishikesh</b>
              <p>@rishikesh</p>
            </span>
            <button onClick={handlechange3} className={styles.btn}>{toggle3 ? "Follow" : "Following"}</button>
          </div>
        </div>




        <div className={styles.inner_container}>
          <img src="https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=sph" className={styles.image} />
          <div className={styles.name}>
            <span className={styles.inner_name}>
              <b>"Rajeev"</b>
              <p>"@rajeev"</p>
            </span>
            <button onClick={handlechange4} className={styles.btn}>{toggle4 ? "Follow" : "Following"}</button>
          </div>
        </div>



      </div>
      <button className={styles.button}>Show More</button>
    </div>
  );
}

export default WhoToFollow;
