import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Components } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Components />
    </div>
  );
}

export default Protected;
