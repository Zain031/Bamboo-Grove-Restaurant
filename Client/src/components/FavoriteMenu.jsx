import React, { useEffect } from "react";
import gambar1 from "../../public/g8.png";
import gambar2 from "../../public/g1.png";
import gambar3 from "../../public/fries.png";
import Aos from "aos";

function FavoriteMenu() {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <> 
      {" "}
      <div className=" mx-10  rounded-md">
      <div className="text-3xl font-light ml-56 mt-20 text-center mb-10 mr-56 pt-10 "> Top Menus</div>
      <div className="flex gap-20 justify-center mx-14">
        <div className="shadow-md hover:shadow-2xl rounded-xl">
          <img data-aos="fade-right" className="w-56 m-2 rounded-full " src={gambar1} alt="" />
        </div>
        <div className="shadow-md hover:shadow-2xl rounded-xl">
          <img data-aos="fade-up" className="w-80 m-2 rounded-full "  src={gambar3} alt="" />
        </div>
        <div className="shadow-md hover:shadow-2xl rounded-xl">
          <img data-aos="fade-left" className="w-56 m-2 rounded-full "  src={gambar2} alt="" />
        </div>
      </div>
      </div>
    </>
  );
}

export default FavoriteMenu;
