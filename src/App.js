import Sidebar from "./components/Student side/sidebar/Sidebar";
import Topbar from "./components/Student side/topbar/Topbar";
import "./app.css"
import Home from "./components/Student side/home/Home";
import React from 'react';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
