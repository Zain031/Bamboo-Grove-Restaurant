import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [fullName,setFullName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("")
  const [address,setAddres] = useState("")

  const navigate = useNavigate();

  async function handdleRegister(e) {
    e.preventDefault();
    try {
      const requestBody = { fullName,email, password,phoneNumber,address };
      const { data } = await axios.post(
        "http://localhost:3000/register",
        requestBody
      );
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Succes register',
      })

      console.log(data);
      navigate("/login");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div className="bg-white flex justify-center items-center ">
    

      <div className=" px-28  h-screen sm:20 p-8 lg:w-1/2 ">
       
        <form onSubmit={handdleRegister} className="pt-10 shadow-2xl mt-16 p-6 rounded-md" >
          <div className="mb-4">
          <label htmlFor="username" className="block text-black">
              Full Name
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="w-full border mb-3 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
            />
            <label htmlFor="username" className="block text-black">
              email
            </label>
            <input
              type="text"
              id="email"
              name="name"
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
            <div className="mb-4 mt-6">
              <label htmlFor="password" className="block text-black">
                Phone Number
              </label>
              <input
                type="password"
                id="phoneNumber"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                value={phoneNumber}
              />
            </div>
            <div className="mb-4 mt-6">
              <label htmlFor="password" className="block text-black">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="addres"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => {
                  setAddres(e.target.value);
                }}
                value={address}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-400 mt-6 hover:bg-orange-600 text-black font-semibold rounded-md py-2 px-4 w-full"
          >
            Register
          </button>
        </form>
        {/* Sign up  Link */}
      </div>
    </div>
  );
}

export default Register;
