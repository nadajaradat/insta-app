import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import  Drawer  from "./components/Drawer";
function App() {
  return (
    <div className='App' style={{backgroundColor:'black'}}>
      <BrowserRouter>
        <Routes element={<Drawer/>}>
          <Route element={<SignIn />} path="/" />
          <Route element={<SignUp />} path="/signup" />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
