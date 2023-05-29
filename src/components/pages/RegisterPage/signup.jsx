import React, { useState } from "react";
import styles from "./signup.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};
    if (!name.trim()) {
      validateErrors.name = "Name is required";
    }
    if (useEmail) {
      if (!email.trim()) {
        validateErrors.email = "Email is required";
      }
    } else {
      const validatePhone = /^[0-9]{10}$/;
      if (!phone.trim()) {
        validateErrors.phone = "Phone is required";
      } else if (!validatePhone.test(phone)) {
        validateErrors.phone = "Phone number is not valid";
      }
    }
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      console.log("Form is valid");
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
    setErrors({});
  };

  return (
    <div>
      <h1>Create your Account</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="input">
          <div className="name-input">
            <OutlinedInput
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          {useEmail ? (
            <div className="email-input">
              <OutlinedInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          ) : (
            <div className="phone-input">
              <OutlinedInput
                placeholder="Phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
          )}
          <br />
          <a href="/" onClick={handleToggle}>
            {useEmail ? "Use phone instead" : "Use email instead"}
          </a>
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "black" }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
