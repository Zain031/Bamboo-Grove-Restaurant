import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Aos from "aos";
import HomePage from "./HomePage";
import FavoriteMenu from "./FavoriteMenu";





function Home() {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get("http://localhost:3000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handdleAddCart(id) {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000/carts/" + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {}
  }

  async function getCategory() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/categories",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategoryProduct(id) {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/productByCategoryId/" + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function handdleSearch(e) {
    e.preventDefault()
    try {
      const token = localStorage.getItem("access_token");
      const {data} = await axios({
        method: "get",
        url: `http://localhost:3000/search?search=${search}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data, "PPPPPPPPPPPPPPPPPPPPPPPPPPP");
      setProduct(data.data)
   
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    getCategory();
    Aos.init();
  }, []);




  
  return (
    <>
    <HomePage/>
    <FavoriteMenu/>
    
      {" "}
      <div id="order" className="flex gap-4 md:gap-20  text-2xl ml-10 mt-32 mb-20 justify-center">
        {category.map((item) => {
          return (
            <div key={item.id}>
              <button
                className="p-1 rounded-md hover:bg-orange-100 active:bg-orange-200  hover:shadow-md focus:shadow-md focus:bg-orange-100"
                onClick={() => {
                  getCategoryProduct(item.id);
                }}
              >
                {item.name}
              </button>
            </div>
          );
        })}

        <div className="p-1 rounded-md hover:bg-orange-100 active:bg-orange-200  hover:shadow-md focus:shadow-md focus:bg-orange-100">
          <button onClick={getData}>All</button>
        </div>
      </div>
      <div>
      
      </div>
      <div  className=" gap-2 w-full h-10 flex justify-center -mt-10 ml-6 ">
        <form onSubmit={handdleSearch} className="flex gap-3 ">
          <input
            className="w-96 h-10 px-4 border outline-none border-orange-500 "
            type="search"
            name="search"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <div className="py-1  px-2 border border-orange-400 rounded-md hover:shadow-xl bg-orange-500 focus:bg-orange-500 hover:text-white font-light uppercase tracking-wide ">
            <button  type="submit">search</button>
          </div>
        </form>
      </div>   
    
      <div  className="items-center justify-center grid grid-cols-2  m-10 md:grid-cols-4   ">
        {product.map((item) => {
          return (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="300"
              key={item.id}
              className="bg-white font-semibold text-center rounded-xl border shadow-md p-1 md:p-10 max-w-56  md:max-w-xs mb-8 hover:shadow-xl hover:shadow-orange-400 brightness-100 hover:brightness-105 "
            >
              <h1 className="text-sm  bg-yellow-400 text-gray-700 inline  ml-2 md:ml-48 p-1 rounded-md">
                {item.Category.name}
              </h1>
              <img
                className=" mb-3 w-52 h-52 rounded-full mx-auto hover:scale-110 hover:duration-150 "
                src={item.imgUrl}
              />
              <h1 className="text-lg text-gray-700 ">{item.title}</h1>
              <h3 className="text-xl text-gray-500 ">
                {" "}
                Rp.{new Intl.NumberFormat("id-IN").format(item.price)}
              </h3>

              <button
                onClick={() => {
                  handdleAddCart(item.id);
                }}
                className=" hover: bg-orange-500 hover:bg-orange-600 px-8 py-2 mt-8 rounded-md text-gray-100 font-semibold uppercase tracking-wide"
              >
                Add Cart
              </button>
          
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
