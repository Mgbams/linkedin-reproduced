import React from "react";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* Left Side Bar */}
          <Sidebar />

          {/* Feed*/}
          <Feed />
          {/* Widgets at the right side */}
        </div>
      )}
    </div>
  );
}

export default App;
