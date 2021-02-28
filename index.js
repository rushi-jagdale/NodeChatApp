//Node server which will handhle io connections
const express = require('express')
const path = require('path')
const app = express()
const server = require("http").createServer(app)
 
const io = require("socket.io")(server)
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) =>{
    // res.status(200).send('working')
    res.render('index')
})

io.on('connection', socket =>{
    socket.on('chat', message =>{
        console.log("From client",message)
        io.emit('chat',message)
    })
})



// const users = {};
// io.sockets.on('connection', socket =>{
//     socket.on('user-joined',name =>{
//         console.log("new-user",name);
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined',name);

//     });
//     socket.on('send', message =>{
//     socket.broadcast.emit('receive', {message: message, name:users[socket.id]});

//     });
// }) 
server.listen( 8080, () => {
    console.log("server is running on port",8080)
})
