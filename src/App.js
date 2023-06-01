import "./App.css";
import { Route, Routes } from "react-router-dom";
import Protected from "./protected";
import Home from "./components/pages/Homepage/home";
import SignIn from "./components/pages/LoginPage/login";
import SignUp from "./components/pages/RegisterPage/register";
import Details from "./components/pages/Details/Details";
import Password from "./components/pages/LoginPage/Password";
import ForgotPassword from "./components/pages/LoginPage/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected Components={Home} />}></Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/details" element={<Details />} />
      <Route path="/password" element={<Password />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
