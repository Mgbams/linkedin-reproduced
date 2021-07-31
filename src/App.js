import React from "react";
import "./App.css";
import { logout, selectUser, login } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

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
