const socket = io();

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector(".container");

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}
//commited
// const _name = prompt("Enter your name to join");
// socket.emit('new-user-joined', _name);
// socket.on('user-joined', _name =>{
//      append("${name} joined the chat ", "right")
//     document.write(_name)

// })

const btn = document.querySelector("#send-container")
const Input = document.getElementById("messageInp")
btn.addEventListener('submit', event => {
    event.preventDefault()
    socket.emit("chat",Input.value)

    Input.value = ''    

})
socket.on('chat',message => {
    append(message, "right")
})
