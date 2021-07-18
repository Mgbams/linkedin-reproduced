import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
        {/* Left Side Bar */}
        <Sidebar />

        {/* Feed*/}
        {/* Widgets at the right side */}
      </div>
    </div>
  );
}

export default App;
