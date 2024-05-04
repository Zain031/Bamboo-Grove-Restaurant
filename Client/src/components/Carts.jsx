import axios from "axios";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Swal from "sweetalert2";

function Carts() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [order,setOrder] = useState([])

  async function getCart() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get("http://localhost:3000/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let price = 0;
      data.forEach((item) => {
        price += item.Product.price * item.amount;
      });
      console.log(data);
      setCart(data);
      setTotalPrice(price);
    } catch (error) {
      console.log(error);
    }
  }

  async function changeAmount(id, amount) {
    try {
      const token = localStorage.getItem("access_token");
      const requestBody = { amount };
      const { data } = await axios({
        method: "patch",
        url: "http://localhost:3000/carts/" + id,
        data: requestBody,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      getCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function handdleDelete(id) {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.delete("http://localhost:3000/carts/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      getCart();
    } catch (error) {
      console.log(error);
    }
  }
  function handdleDeleteAll() {
    try {
      const data = cart;
      data.forEach((item) => {
        handdleDelete(item.Product.id);
      });
    } catch (error) {}
  }

  async function handdleCheckOut() {
    //data ini berisi orderId,transacrtion dan message .mendapatkan Transaction token
    
    const token = localStorage.getItem("access_token");
    const reqBody = {totalPrice}
    const { data } = await axios.post("http://localhost:3000/payment-midtrans", reqBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(totalPrice);

   
    // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
    window.snap.pay(data.transactionToken, {
      onSuccess: async function (result) {
        /* You may add your own implementation here */
        Swal.fire({
          icon: "success",
          title: `Payment Succes`,
        });

        console.log(result);

        const token = localStorage.getItem("access_token");
        await axios.patch(
          "http://localhost:3000/update-payment",
          {
            orderId: data.orderId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        handdleDeleteAll();
      },    
    });
  }

  async function getOrder(){
    try {
        const token = localStorage.getItem("access_token")
        const {data} = await axios.get( "http://localhost:3000/orders",{
            headers :{
                Authorization : `Bearer ${token}`
            }
        }) 
        console.log(data);
        setOrder(data)
    } catch (error) {
        console.log(error);            
    }
}


  useEffect(() => {
    getCart();
    getOrder()
    Aos.init();
  }, []);

  return (
    <>

      <div className="w-full  flex justify-end pt-36 ">
        <button className="ml-10 ">
          <div
            onClick={handdleDeleteAll}
            className=" bg-red-500 hover:bg-red-600 hover:text-white w-44 px-2 py-1 flex rounded-sm gap-2 mr-10"
          >
            <div>
              {" "}
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="font-semibold  tracking-wide">
              Clear All Product
            </div>
          </div>
        </button>
      </div>
      <div
        className="px-10  shadow-xl mx-10 pt-10  rounded-xl"
        data-aos="zoom-in"
      >
        <table className="w-full table-auto  border-b-2 border-gray-800 ">
          <thead className="text-xs font-semibold uppercase text-gray-600  ">
            <tr>
              <th className="p-2">
                <div className="text-left font-semibold">No</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold"></div>
              </th>

              <th className="p-2">
                <div className="text-left font-semibold">Product Name</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Price</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Quantity</div>
              </th>              
              <th className="p-2">
                <div className="text-center font-semibold">Total</div>
              </th>
              <th className="p-2">
                <div className="text-center font-semibold">Delete</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm border-t-2 border-gray-400">
            {cart.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="p-2">
                    <div className="font-medium text-gray-800 ml-2">
                      {++index}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      <img className="w-36" src={item.Product.imgUrl} alt="" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      {item.Product.title}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-left">
                      Rp.{" "}
                      {new Intl.NumberFormat("id-IN").format(
                        item.Product.price
                      )}
                    </div>
                  </td>
                  <td className="p-2 pt-1 flex gap-4 mt-10">
                    <button
                      className="bg-orange-300 w-10 h-8 font-bold rounded-sm"
                      onClick={() => {
                        changeAmount(item.Product.id, item.amount - 1 > 0 ?item.amount - 1 : item.amount);
                      }}
                    >
                      -
                    </button>
                    <div className="text-left text-lg font-bold text-green-500">
                      {item.amount}
                    </div>
                    <button
                      onClick={() => {
                        changeAmount(item.Product.id, item.amount + 1);
                      }}
                      className="bg-orange-300 w-10 rounded-sm font-bold h-8"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <div className=" font-bold  w-28 px-2 py-1 rounded-sm text-center ml-44 text-gray-700">
                      Rp.{" "}
                      {new Intl.NumberFormat("id-IN").format(
                        item.Product.price * item.amount
                      )}                      
                    </div>
                  </td>
                  <td className="p-2">
                    <div
                      className="flex justify-center"
                      onClick={() => {handdleDelete(item.Product.id)}}>
                      <button >                
                                   
                      <ion-icon size="large" name="trash"></ion-icon>                     
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr className="" />
        <div className="flex justify-end pb-20 mr-2 pt-10 text-md">
          <div className="mr-64 font-bold">Total Price </div>{" "}
          <div className="font-bold px-3 py-1 rounded-sm bg-yellow-300 ">
            {" "}
            Rp. {new Intl.NumberFormat("id-IN").format(totalPrice)}
          </div>
          <div>
            <button
              onClick={handdleCheckOut}
              className=" bg-green-400 ml-36 px-2 py-1 rounded-sm hover:bg-green-500 hover:text-white font-semibold uppercase tracking-wide"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div className="pb-36"></div>
    </>
  );
}

export default Carts;

