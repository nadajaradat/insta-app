import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import  Drawer  from "./components/Drawer";
import Messages from "./pages/Messages";

function App() {
  return (
    <div className='App' style={{backgroundColor:'black'}}>
      <BrowserRouter>
        <Routes element={<Drawer/>}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
