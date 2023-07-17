import { useState } from "react";
import axios from "axios";

const Login = ({ showLogin }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmpasswordError, setConfirmPasswordError] = useState();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [signup, setSignup] = useState(false);

  const validateEmail= (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSignup = () => {
    if (validateEmail(email) === false) {
      setEmailError(true);
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
    }
    if (name.length < 2) {
      setNameError(true);
    }
    const user = { email, password, confirmPassword, name };

  };

  const handleLogin = () => {
    if (validateEmail(email) === false) {
      setEmailError(true);
    }
    if (password.length < 8) {
      setPasswordError(true);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div
        className="w-full h-full fixed top-0 bg-black opacity-40"
        onClick={showLogin}
      ></div>
      <div className="flex flex-col text-left items-center fixed justify-evenly text-black left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-white h-4/6 w-96 customOpacity">
        <button
          className="h-3 w-3 top-0 right-0 mr-3 mt-3 absolute"
          onClick={showLogin}
        >
          <img src="/x.svg" />
        </button>
        <img src="/code.png" alt="" className="h-16 w-16" />
        <div className="flex flex-col items-center justify-center w-full">
          <input
            type="text"
            className="border-2 h-10 focus:outline-none w-3/5 m-2 px-2"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          {emailError && <p className="text-red-500 text-sm">Invalid email</p>}
          <input
            type="text"
            className="border-2 h-10 focus:outline-none w-3/5 m-2 px-2"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">Invalid password</p>
          )}

          {signup && (
            <>
              <input
                type="text"
                className="border-2 h-10 focus:outline-none w-3/5 m-2 px-2"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmpasswordError && (
                <p className="text-red-500 text-sm">Passwords must match</p>
              )}
              <input
                type="text"
                className="border-2 h-10 focus:outline-none w-3/5 m-2 px-2"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <p className="text-red-500 text-sm">Name too short</p>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-slate-200 px-12 py-2  rounded-lg m-2"
            onClick={signup ? handleSignup : handleLogin}
          >
            {signup ? "Sign Up" : "Log In"}
          </button>
          <button
            className="px-6 py-4 rounded-lg"
            onClick={() => {
              setSignup((prev) => !prev);
              setPasswordError(false);
              setEmailError(false);
              setConfirmPasswordError(false);
              setNameError(false);
            }}
          >
            {signup ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
