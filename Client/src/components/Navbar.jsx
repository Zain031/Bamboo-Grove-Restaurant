import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  async function handdleLogout() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }
  return (
    <div className=" md:flex w-screen h-80  md:h-28 bg-orange-200  md:justify-between z-50 fixed ">
      <div className="ml-1 md:ml-10 mt-2">
       
          <div className=" bg-orange-400 p-2 rounded-full shadow-2xl  hover:bg-orange-500">
            <img className="w-20 rounded-full shadow-2xl" src={logo} alt="" />
          </div>
    
      </div>
      <div className="flex mt-8  ml-2  text-xl font-light ">
        <p>
          <Link
            className="flex gap-2 px-2 py-1 pt-2  rounded-md hover:shadow-xl hover:bg-orange-500 focus:bg-orange-500 hover:text-white "
            to={"/home"}
          >
            {" "}
            <div>
              <ion-icon size="large" name="restaurant-outline"></ion-icon>
            </div>{" "}
            <div className="font-light uppercase tracking-wide">Menus</div>
          </Link>
        </p>
        <p className="ml-20">
          {" "}
          <Link
            className="flex gap-2   px-2 py-1 pt-2 rounded-md hover:shadow-xl hover:bg-orange-500 focus:bg-orange-500 hover:text-white "
            to={"/cart"}
          >
            <div>
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </div>
            <div className="font-light uppercase tracking-wide">Cart</div>
          </Link>
        </p>
        <p className="ml-20">
          {" "}
          <Link
            className="flex gap-2  px-2 py-1 pt-2 rounded-md hover:shadow-xl hover:bg-orange-500 focus:bg-orange-500 hover:text-white "
            to={"/order"}
          >
            <div>
              <ion-icon size="large" name="checkbox-outline"></ion-icon>
            </div>
            <div className="font-light uppercase tracking-wide">Orders</div>
          </Link>
        </p>   
        <p className="ml-20">
          {" "}
          <Link
            className="flex gap-2  px-2 py-1 pt-2 rounded-md hover:shadow-xl hover:bg-orange-500 focus:bg-orange-500 hover:text-white "
            to={"https://api.whatsapp.com/send/?phone=6285726261225&text&type=phone_number&app_absent=0"}
          >
            <div>
            <ion-icon size="large" name="logo-whatsapp"></ion-icon>
            </div>
            <div className="font-light uppercase tracking-wide">whatsappp</div>
          </Link>
        </p>  
    
      </div>
      <div
        onClick={handdleLogout}
        className="mr-96 md:mr-16 mt-8 text-xl font-light"
      >
        <Link className="flex gap-2  px-2 py-1 pt-2 rounded-md hover:shadow-xl hover:bg-orange-500 focus:bg-orange-500 hover:text-white">
          <div>
            <ion-icon name="log-out-outline" size="large"></ion-icon>
          </div>
          <div className="font-light uppercase tracking-wide">Logout</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
