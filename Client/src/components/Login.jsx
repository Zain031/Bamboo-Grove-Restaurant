import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/Bamboo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handdleLogin(e) {
    e.preventDefault();
    try {
      const requestBody = { email, password };
      const response = await axios.post(
        "http://localhost:3000/login",
        requestBody
      );
      console.log(response);
      localStorage.setItem("access_token", response.data.access_token);
      // localStorage.setItem("userId",)
      Swal.fire({
        icon: "success",
        title: "Succes Login",
      });
      navigate("/home");
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
      });
    }
  }


  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    try {
    const {data} = await axios({
        method : "post",       
        url : "http://localhost:3000/google-login",
        headers :{
          google_token : response.credential
        }
      })
      console.log(data);
      localStorage.setItem("access_token",data.access_token)
  
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  }

  function googleLogin() {
    window.google.accounts.id.initialize({
      client_id:
        "154285753869-3iqhohcfbfk2blac1vb934r210hihr86.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  }

  useEffect(() => {
    googleLogin();
  }, []);

  return (
    <div className=" flex justify-center items-center ">
      <div className="m-auto bg-white">
        <img className="hover:scale-110" src={logo} alt="" />
      </div>

      <div className="lg:p-36 md:p-52 h-screen  lg:w-1/2 ">
        <form
          onSubmit={handdleLogin}
          className=" shadow-2xl p-10 rounded-lg mt-8 -ml-32"
        >
          <div className="font-bold text-2xl text-gray-700 mb-6">Login</div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black">
              email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />

            <div className="mb-4 mt-6">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-400 mt-6 hover:bg-orange-600 text-black font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        {/* Sign up  Link */}

        <div className="mt-4 text-black text-center -ml-36">
          <a>
            Don't have an account yet?{" "}
            <Link to={"/register"}>
              <span className=" text-blue-700 hover:underline hover:cursor-pointer">
                Register
              </span>
            </Link>
          </a>
        </div>
      
        <div className="mt-3 ml-16  " id="buttonDiv"></div>
       
      </div>
    </div>
  );
}

export default Login;
