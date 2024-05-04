import React, { useEffect } from 'react'
import Aos from "aos";


function HomePage() {


    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
    <div data-aos="fade-up" className='mt-10 '><h1 className='text-center text-6xl font-extrabold text-slate-800'>Bamboo Grove <span className='text-orange-500'>Restaurant</span> </h1></div>
    <div data-aos="fade-up"  className=' text-center mt-10 '>        
        <button className=' bg-orange-500 py-2 px-6 text-2xl rounded-md hover:bg-orange-600 hover:text-white hover:shadow-2xl font-semibold uppercase tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  '><a  href="#order">Order Now</a> </button>
    </div>   
    <div className=' flex gap-10 mx-10 mt-10'>
        <div    className='w-1/3 shadow-lg rounded-md hover:shadow-2xl '><div><iframe className='w-full h-96 pt-20' src="https://lottie.host/embed/c13c0ef1-3655-402c-a036-a0f9f8cd0fca/1XlYMQz2PT.lottie"></iframe></div><div className='mt-5 mb-5 text-center'><h1 className='font-extrabold font-sans text-slate-700 text-4xl'>fast delivery</h1></div></div>
        <div  className=' w-1/3 shadow-md rounded-md hover:shadow-2xl'><div><iframe className='w-full h-96 pt-20' src="https://lottie.host/embed/1064cf53-136a-4d1d-abb2-0b7e6055a564/0Zxf7r7Z5H.json"></iframe><div><div className='mt-5 mb-5 text-center'><h1 className='font-extrabold font-sans text-slate-700 text-4xl'>Lots of menus</h1></div></div></div></div>
        <div   className=' w-1/3 shadow-md rounded-md hover:shadow-2xl'><div><iframe className='w-full h-96 pt-20' src="https://lottie.host/embed/8256b276-439b-4a08-b552-7bb393a972f6/LnQS0I0iO0.json"></iframe></div><div className='mt-5 mb-5 text-center' ><h1 className='font-extrabold font-sans text-slate-700 text-4xl'>Fast Orders</h1></div></div>
    </div>
 
    
    </>
  )
}

export default HomePage