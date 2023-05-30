import React from 'react'
import GoogleButton from '../../atoms/button/google';
import AppleButton from '../../atoms/button/apple';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTwitter } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import styles from './login.module.css'
import { Link } from 'react-router-dom';
import Alert from "@mui/material/Alert";
import { useState } from "react"

const SignIn = () => {
  const [usererr, setusererr] = useState(false)
  const [data, setdata] = useState([])
  function userHandle(e) {
    setdata(e.target.value)
  }
  function onclick() {
    if (data.length < 3) {
      setusererr(true)
    }
    else {
      setusererr(false)
    }
  }
  return (
    <div className={styles.body}>
      <div className={styles.Icon}>
        <RxCross2 />
        <FaTwitter
          color='skyblue'
        />
      </div>
      <div className={styles.page}>
        <h1>Sign in to Twitter</h1>
        <br />
        <br />
        <GoogleButton />
        <br />
        <br />
        <AppleButton />
        <br />
        <br />
        <div className={styles.content3}>
          <span>or</span>
        </div>

        <br />
        <TextField onChange={userHandle}
          style={{ width: "50%" }}
          id="outlined-basic"
          label="Phone , Email or Username"
          variant="outlined"
        />
        <br />
        <br />
        <Button onClick={onclick}
          className={styles.btn}
          style={{ textTransform: "none", background: "black", width: "50%", borderRadius: "5%" }}
          variant="contained"
        >Next
        </Button>
        <br />
        <br />
        <Button className={styles.btn} variant="outlined"
          sx={{
            width: "50%", borderRadius: "5%", textTransform: "none", color: "black"
          }}><b>
            Forgot Password?</b>
        </Button>
        <div style={{ marginTop: "4rem", opacity: 0.8 }}><b>
          Don't have an account? </b><Link to="">Sign up</Link>
        </div>
        {usererr ? <Alert severity="info">
          <strong>Sorry, we could not find your account</strong>
        </Alert> : " "
        }
      </div>
    </div>

  )
}

export default SignIn
