const express = require('express')
const {Server} = require('socket.io')
const app = express()
const http = require('http')
const ACTIONS = require('./src/Actions');

const server = http.createServer(app)
const io = new Server(server)

const userSocketMap = {}

app.get('/',(req,res)=>{
    res.send("Hello")
})

function getALLConnectedClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId)|| []).map((socketId)=>{
        return {
            socketId,
            username:userSocketMap[socketId]
        }

    })
}

io.on('connection',(socket)=>{
    console.log('socket connected',socket.id)

    socket.on(ACTIONS.JOIN,({roomId,username})=>{
        userSocketMap[socket.id] = username
        socket.join(roomId)
        const clients = getALLConnectedClients(roomId)
        console.log(clients)
        clients.forEach(({socketId})=>{
            io.to(socketId).emit(ACTIONS.JOINED,{
                clients,
                username:username,
                socketId:socket.id,
            })
        })
    });

    socket.on('disconnecting',()=>{
        const rooms= [...socket.rooms];
        rooms.forEach((roomId)=>{
            socket.in(roomId).emit(ACTIONS.DISCONNECTED,{
                socketId: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
        socket.leave();
    });
})

const PORT = process.env.PORT||5000  
server.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})
