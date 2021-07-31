import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.akajoule.com%2Flinkedin-logo%2F&psig=AOvVaw2PcXzv8ZSUQxN36i6uKfYK&ust=1627848719745000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjX75iPjvICFQAAAAAdAAAAABAY"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name (Required if registering)" />
        <input type="text" placeholder="Profile pic URL (Optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
