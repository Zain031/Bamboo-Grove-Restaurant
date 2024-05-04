Sosial media login
setup - credential



instal soket.io di server

npm install socket.io

=====================================
import express from "express";

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();


routingan...........



const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors :{
        origin : "*
    }
});




io.on("connection", (socket) => {
  // ...
  socket.emit("halloooo")
});





httpServer.listen(3000); 
//////port diganti

====================================================



buat connection di client

npm install socket.io-client




============================================= masukin forlder utils

import { io } from "socket.io-client";

const socket = io("http://localhost:3000")

export default socket

================================================buat folder utils masukin doket io.js nya yang dia atas


di server
socket.emit("hello)





di client

useEffect(()=>{
    socket.on('hello',() =>{
        console.log("hallo from sever")
    })
},[])



menggunakan 


socket.brodcest.emit("increment", data)




buat romm menggunakan to


dan membuat cinst user = []








