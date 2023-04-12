let h1 = document.querySelector("h1")
h1.textContent = "HELLO BROTHER"

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
button1.addEventListener("click", () =>{
    h1.style.display = 'none'
})
button2.addEventListener("click", () =>{
    h1.style.display = 'block'
})