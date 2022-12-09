import React from "react";

import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Login from "./components/Login";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"
import Dashboard from "./components/Dashboard";
import Buttons from "./components/Button";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Colors from "./components/Colors";
import Borders from "./components/Borders";
import Animations from "./components/Animations" ;
import Other from "./components/Others";
import Register from "./components/Register";
import Forgetpassword from "./components/Forgetpassword";
import NoPage from "./components/404Page";
import Blankpage from "./components/Blankpage";
import Charts from "./components/Charts";
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/button" element={<Buttons/>}/>
  <Route path="/card" element={<Cards/>}/>
  <Route path="/table" element={<Table/>}/>
  <Route path="/colors" element={<Colors/>}/>
  <Route path="/borders" element={<Borders/>}/>
  <Route path="/animations" element={<Animations/>}/>
  <Route path="/other" element={<Other/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/forgetpassword" element={<Forgetpassword/>}/>
  <Route path="/404notfound" element={<NoPage/>}/>
  <Route path="/blankpage" element={<Blankpage/>}/>
  <Route path="/charts" element={<Charts/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
