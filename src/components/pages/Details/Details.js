import styles from "./Details.module.css";
import { RxCross2 } from "react-icons/rx";
import DetailsText from "./detailsText";
import GroupedSelect from "../../atoms/inputField/select";
import SignUpButton from "../../atoms/button/signup";
import OutlinedInput from "@mui/material/OutlinedInput";
import Alert from "@mui/material/Alert";
// import joi from "joi-browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { localDataStorage } from "../../localStorage/localStorage";

export default function Details() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [useEmail, setUseEmail] = useState("");
  const [userFromLocalnRecoil, setUserFromLocalnRecoil] =
    useRecoilState(localDataStorage);
  const [nevigate, setnevigate] = useState(false);
  const [alert, setalert] = useState(false);
  const [allError, setAllError] = useState();

  const nevigates = useNavigate();

  function navigate() {
    nevigates("/login");
  }

  const Storage = localStorage.getItem("signupData")
    ? JSON.parse(localStorage.getItem("signupData"))
    : [];

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
  };

  // const userSchema = joi.object({
  //   email: joi.string().email().required(),
  //   phone: joi.number().max(10),
  //   password: joi.string().min(8).required(),
  // });

  function handleSignup() {
    const temp = {
      name: name,
      email: email,
      phone: phone,
    };

    localStorage.setItem("signupData", JSON.stringify([...Storage, temp]));

    const email_regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      name === "" ||
      (phone.length < 10 && email_regex.test(email) === false)
    ) {
      setnevigate(false);
      setalert(true);
    } else {
      setnevigate(true);
    }
  }

  // const { error } = userSchema.validate(
  //   { email, password },
  //   { abortEarly: false }
  // );

  // if (error) {
  //   localStorage.setItem("user", JSON.stringify(userFromLocalnRecoil));

  //   setAllError(error.details[0].message);
  //   alert(error.details[0].message);
  // } else if (userFromLocalnRecoil.find((ele) => ele.email === email)) {
  //   alert("email id have already exist");
  // } else {
  //   const allUserData = [...userFromLocalnRecoil, { email, phone, password }];
  //   setUserFromLocalnRecoil(allUserData);
  // }

  return (
    <div className={styles.Details}>
      <div className={styles.Icon}>
        <RxCross2 />
      </div>
      <h1>Create your account</h1>
      <div>
        <OutlinedInput
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "25rem",
            marginBottom: "20px",
          }}
        />
      </div>
      {useEmail ? (
        <div>
          <OutlinedInput
            placeholder="Email"
            value={email}
            label={
              /^\w+([\.-]?\w+)*@(?:\w+\.)+(?:com|in)$/.test(email) ? (
                <p style={{ color: "#00acee" }}>Email</p>
              ) : (
                <p style={{ color: "red" }}>Email</p>
              )
            }
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "25rem",
              height: "2.5rem",
            }}
          />
        </div>
      ) : (
        <div>
          <OutlinedInput
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              width: "25rem",
              height: "2.5rem",
            }}
          />
        </div>
      )}
      <a href="/" onClick={handleToggle} className={styles.emailtoggle}>
        {useEmail ? "Use phone instead" : "Use email instead"}
      </a>
      <OutlinedInput
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: "25rem",
          marginBottom: "20px",
        }}
      />
      {/^(?=.*\d).{8,}$/.test(password) ? (
        ""
      ) : (
        <h5 style={{ margin: "-12px 0 -12px 0", color: "red" }}>
          Password Contain 8 character includes 1 number{" "}
        </h5>
      )}
      <div>
        <DetailsText />
      </div>
      <div>
        <GroupedSelect />
      </div>
      <div className={styles.btn}>
        <SignUpButton handleSignup={handleSignup} />
        {nevigate ? navigate() : " "}
        {alert ? (
          <Alert severity="info">
            <strong>Fill Properly.</strong>
          </Alert>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
