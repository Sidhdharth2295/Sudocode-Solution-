// import "./App.css";
import Login from "./Component/Login/Login";
import Signin from "./Component/Signin/Signin";
import ForgottPassword from './Component/ForgottPassword/ForgottPassword';
import Error from './Component/Error/Error';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgottPassword />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
