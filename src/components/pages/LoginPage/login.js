import React from "react";
import GoogleButton from "../../atoms/button/google";
import AppleButton from "../../atoms/button/apple";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { emailShowHome } from "../../localStorage/localStorage";

const SignIn = () => {
  const navigate = useNavigate();
  const allUsersFromLocal = JSON.parse(localStorage.getItem("user"));
  const emailShownOnHome = useSetRecoilState(emailShowHome);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usererr, setusererr] = useState(false);
  const [data, setdata] = useState([]);
  const [alert, setalert] = useState(false);

  // function handleLogin() {
  //   if (
  //     allUsersFromLocal.find(
  //       (ele) => ele.email === email && ele.password === password
  //     )
  //   ) {
  //     localStorage.setItem("isUserLoggedIn", "true");
  //     emailShownOnHome(email);
  //     localStorage.setItem("currentUser", email);
  //     navigate("/");
  //   }
  // }

  function forgothandle() {
    navigate("/forgot");
  }

  function userHandle(e) {
    setdata(e.target.value);
    setEmail(e.target.value);
  }

  function handlenavigate() {
    navigate("/password");
  }

  return (
    <div>
      <div className={styles.page}>
        <div className={styles.Icon}>
          <RxCross2 />

          <FaTwitter color="#50b7f5" />
        </div>

        <div className={styles.body}>
          <h1>Sign in to Twitter</h1>
          <GoogleButton />
          <AppleButton />
          <div className={styles.content3}>
            <span>or</span>
          </div>

          <TextField
            onChange={userHandle}
            style={{ width: "19rem", marginBottom: "30px" }}
            id="outlined-basic"
            label={
              /^\w+([\.-]?\w+)*@(?:\w+\.)+(?:com|in)$/.test(email) ? (
                <p style={{ color: "#00acee" }}>Email</p>
              ) : (
                <p style={{ color: "black" }}>Email</p>
              )
            }
            variant="outlined"
            value={email}
          />
          {/^\w+([\.-]?\w+)*@(?:\w+\.)+(?:com|in)$/.test(email) ? (
            ""
          ) : (
            <h5 style={{ margin: "-12px 0 -12px 0", color: "red" }}>
              Enter a valid Email
            </h5>
          )}

          <Button
            // onClick={handleLogin}
            className={styles.btn}
            style={{
              textTransform: "none",
              background: "black",
              width: "19rem",
              marginBottom: "30px",
              borderRadius: "15px",
            }}
            variant="contained"
          >
            Next
          </Button>

          <Button
            onClick={forgothandle}
            className={styles.btn}
            variant="outlined"
            sx={{
              width: "19rem",
              borderRadius: "15px",
              textTransform: "none",
              color: "black",
            }}
          >
            <b>Forgot Password?</b>
          </Button>

          <div style={{ marginTop: "2rem", opacity: 0.8 }}>
            <b>Don't have an account? </b>
            <Link to="/register">Sign up</Link>
          </div>
          <div className={styles.Alert}>
            {usererr ? handlenavigate() : " "}
            {alert ? (
              <Alert severity="info">
                <strong>Sorry, we could not find your account.</strong>
              </Alert>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
