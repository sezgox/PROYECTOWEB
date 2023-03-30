function mostrarMensaje(){
    alert("MENSAJE xd");
}

function cambiarColor(){
    if (document.body.style.backgroundColor === "yellow"){
        document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "yellow";
    }

}

function increaseCount(){
    document.getElementById("contador").innerHTML++;
    
}


function decreaseCount(){
   document.getElementById("contador").innerHTML > 0 ? document.getElementById("contador").innerHTML-- : null;

}


function mostrarSaludo(){
    console.log(document.getElementById("nombre").value); 
    document.getElementById("saludo").innerHTML = "Hola que tal " + document.getElementById("nombre").value;
    
}