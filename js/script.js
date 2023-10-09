/* Cursor diferenciado */
const position = {
    x: 0,
    y: 0
}
const cursor = document.querySelector(".circulo")
addEventListener("mousemove",(evt)=>{
    position.x = evt.clientX
    position.y = evt.clientY
    cursor.style.left = position.x + "px"
    cursor.style.top = position.y + "px"
})
addEventListener("mousedown",()=>{
    cursor.style.background = "lightblue"
})
addEventListener("mouseup",()=>{
    cursor.style.background = ""
})
/* Jogo de adivinhar número */
const numero_sort = Math.floor(Math.random() * 101)
const numero_tent = document.querySelector("input[type=number]")
const titulo_numeroSort = document.querySelector(".titulo_numeroSort")
function tentarSorte(){
    if(numero_tent.value == numero_sort){
        titulo_numeroSort.textContent = "PARABÉNS VOCÊ ACERTOU!!!!"
    } else if (numero_tent.value < numero_sort){
        titulo_numeroSort.textContent = "Seu número é menor que o sorteado"
    } else if (numero_tent.value > numero_sort){
        titulo_numeroSort.textContent = "Seu número é maior que o sorteado"
    }
}
addEventListener("keydown",(evt)=>{
    if(evt.key === "Enter"){
        tentarSorte()
    }
})