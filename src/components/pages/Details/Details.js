import styles from "./Details.module.css";
import { RxCross2 } from "react-icons/rx";
import DetailsText from "./detailsText";
import GroupedSelect from "../../atoms/inputField/select";
import SignUpButton from "../../atoms/button/signup";
import OutlinedInput from "@mui/material/OutlinedInput";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Details() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState("");
  const [ nevigate,setnevigate]=useState(false)
  const [alert,setalert]=useState(false)

  const nevigates=useNavigate()

  const Storage = localStorage.getItem("signupData")
    ? JSON.parse(localStorage.getItem("signupData"))
    : [];


    function navigate(){
      nevigates("/login")
    }

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
  };

  function handleSignup() {
    const temp = {
      name: name,
      email: email,
      phone: phone,
    };

    localStorage.setItem("signupData", JSON.stringify([...Storage, temp]));
   
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if( name==="" || phone.length<10 && regex.test(email)===false  ) {
      setnevigate(false) 
      setalert(true)
    }
    else{
      setnevigate(true)
    }
  }

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
            width: "30rem",
            marginBottom: "20px",
          }}
        />
      </div>
      {useEmail ? (
        <div>
          <OutlinedInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "30rem",
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
              width: "30rem",
            }}
          />
        </div>
      )}
      <a href="/" onClick={handleToggle} className="emailtoggle">
        {useEmail ? "Use phone instead" : "Use email instead"}
      </a>
      <DetailsText />
      <GroupedSelect />
      <br />
      <br />
      <SignUpButton handleSignup={handleSignup} />
      { nevigate ? ( navigate()) :" "
     }
     {
      alert ?  <Alert severity="info">
      <strong>fill properly.</strong></Alert> : " "
     }
    </div>
  );
}
