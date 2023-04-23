const chats = document.getElementById("chatbox");

const msgInput = document.getElementById("msgIinputnput");
const sendButton = document.getElementById("send");

const roomInput = document.getElementById("roomInput");
const joinButton = document.getElementById("join");


const url = "http://localhost:3000"

var socket = io('http://localhost:3001');

console.log(socket.id);

socket.on("connect" , () => {
    console.log(socket.id);
})

sendButton.addEventListener("click", ()=>{

});


joinButton.addEventListener("click" , () => {

});


function addChat(message) {
    const p = document.createElement("p");
    p.innerText = message
    chats.append(p);
}

