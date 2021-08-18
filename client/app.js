const socket =io(`http://localhost:3000`)

const form =document.getElementById("form")
const messageInput =document.getElementById("message")


socket.on("message",msg => {
   document.querySelector("#msg-display").textContent =msg
})

form.addEventListener("submit",function(e){
    e.preventDefault()
    socket.emit("message",messageInput.value) 
})



