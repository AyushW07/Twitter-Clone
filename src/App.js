import './App.css';
import Sidebar from './components/organism/Sidebar/sidebar';
import Home from './components/pages/Homepage/home';
import SignUp from './components/pages/RegisterPage/signup';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <SignUp/> */}
      <Sidebar/>
    </div>
  );
}

export default App;
