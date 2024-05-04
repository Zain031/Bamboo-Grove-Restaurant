import axios from "axios";
import React, { useEffect, useState } from "react";
import Aos from "aos";

function Orders() {
  const [order, setOrder] = useState([]);
  const [date, setDate] = useState("");

  async function getOrder() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get("http://localhost:3000/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setOrder(data);

      data.map((item) => {
        const newDate = item.createdAt;
        const date = new Date(newDate);
        const formattedDate = date.toLocaleString();
        setDate(formattedDate);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrder();
    Aos.init();
  }, []);

  return (
    <>
      <div className=" p-28">
        <div
          className="px-10  shadow-xl mx-10 pt-10  rounded-xl"
          data-aos="zoom-in"
        >
          <table className="w-full table-auto mb-10 ">
            <thead className="text-xs font-semibold uppercase text-gray-600 border-b-2 border-gray-800 ">
              <tr>
                <th className="p-2">
                  <div className="text-left font-semibold">No</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">payment date</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">OrderId</div>
                </th>

                <th className="p-2">
                  <div className="text-left font-semibold">Total Price</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Status</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm border-t-2 border-gray-400">
              {order.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="p-2">
                      <div className="font-medium text-gray-800 ml-2">
                        {++index}
                      </div>
                    </td>
                    <td className="p-2">
                     
                     
                      <div className="font-medium text-gray-800"> {item.status === "success"?date:"-"}</div>


                    </td>
                    <td className="p-2">
                      <div className="font-medium text-gray-800">
                        {item.orderId}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="font-medium text-gray-800">
                        Rp. {new Intl.NumberFormat("id-IN").format(item.amount)}
                      </div>
                    </td>
                    <td className="p-2">
                      <div
                        className={`${
                          item.status === "success"
                            ? "bg-green-400"
                            : "bg-yellow-300"
                        } font-semibold uppercase tracking-wide py-1 px-2 rounded-md inline-block`}
                      >
                        {item.status}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr className="" />
        </div>
        <div className="pb-36"></div>
      </div>
    </>
  );
}

export default Orders;
