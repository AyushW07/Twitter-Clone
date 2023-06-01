import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SignUpButton({ handleSignup }) {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          handleSignup();
        }}
        sx={{
          backgroundColor: "white",
          width: "25rem",
          borderRadius: "15px",
          textTransform: "none",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
