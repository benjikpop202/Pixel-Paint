let buttonColor = document.getElementById("selector")
let tablero = document.getElementById("tablero")
let borrador = document.getElementById("borrador")
let borrarTodo = document.getElementById("borrar-todo")
let changeColor = document.getElementById("change-color")
let neonMode = document.getElementById("btn-neon")
let mousePresionado = false
let borrando = false
let darkMode = false
let neonActive = false




document.addEventListener("DOMContentLoaded",()=>{
        for(let i = 1; i <= 65; i++){
            for(let j = 1; j <= 35; j++){
             let cell = document.createElement("div")
              cell.classList.add("cell")
              tablero.appendChild(cell)
              
            }
        }
})


    if(changeColor){
    function changeBackground(){
        console.log("boton presionado")
        darkMode = !darkMode
        let Nodos = document.querySelectorAll(".cell")
        if(darkMode){
            neonMode.style.display = "block"
            Nodos.forEach((nodo)=>{
             if(nodo.value !== true){
               nodo.style.background = "#011"
             }
        })
        changeColor.style.background = "#001"
        changeColor.style.color = "#fff"
        changeColor.innerHTML = "FONDO OSCURO 🌙"
        }else{
            Nodos.forEach((nodo)=>{
             if(nodo.value !== true){
             nodo.style.background = "#f4f4f4"
             }
             nodo.style.boxShadow = "none"})
    
        changeColor.style.background = "#f4f4f4"
        changeColor.style.color = "black"
        changeColor.innerHTML = "FONDO CLARO ☀️"
        neonMode.style.display = "none"
        neonActive = false
        neonMode.style.textShadow = "none"
        neonMode.style.boxShadow = "none"
        neonMode.innerHTML = "NEON"
    } 
    }
}else{
    console.error("error de boton")
}



    
    


neonMode.addEventListener("click", () =>{
    neonActive = !neonActive
    if(neonActive ){
        neonMode.style.textShadow = "0 0 10px red"
        neonMode.style.boxShadow = "0 0  20px red"
        neonMode.innerHTML = "NEON - ACTIVE"
    }else{
        neonMode.style.textShadow = "none"
        neonMode.style.boxShadow = "none"
        neonMode.innerHTML = "NEON"
    }
}) 
    



let Pintar = (celda)=>{
   let color = buttonColor.value
   celda.value = true
    if(neonActive && darkMode){
        celda.style.background = color
        celda.style.boxShadow = `0 0 50px ${color}`
    }
    else{
        celda.style.background = color
    }

}
    
tablero.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('cell')) {
        mousePresionado = true;
        Pintar(e.target);
    }
});


tablero.addEventListener('mouseup', function () {
    mousePresionado = false;
});


tablero.addEventListener('mouseover', function (e) {
    if (mousePresionado && e.target.classList.contains('cell')) {
        Pintar(e.target);
    }
});

//borrador

let borrar = (celda)=>{
    celda.value = false
    if(darkMode){
        celda.style.background = "#011"
    }else{
        celda.style.background = "#f4f4f4"
    }
    celda.style.boxShadow = "none"
}

borrador.addEventListener("click", () => {
    borrando = !borrando;  

    if (borrando) {
        borrador.innerHTML = "Dejar de Borrar";
    } else {
        borrador.innerHTML = "BORRADOR";
    }
});


tablero.addEventListener('mousedown', function (e) {
    if (borrando && e.target.classList.contains('cell')) {
        mousePresionado = true;
        borrar(e.target);
    }
});

tablero.addEventListener('mouseup', function () {
    mousePresionado = false;
});

tablero.addEventListener('mouseover', function (e) {
    if (borrando && mousePresionado && e.target.classList.contains('cell')) {
        borrar(e.target);
    }
});


//borrar todo


borrarTodo.addEventListener("click", ()=>{
    let celdas = document.querySelectorAll(".cell")
    celdas.forEach((celda)=>{
        celda.value = false
        if(darkMode){
            celda.style.background = "#011"
            celda.style.boxShadow = "none"
        }else{
            celda.style.background = "#f4f4f4"
        }
    })
    
})
