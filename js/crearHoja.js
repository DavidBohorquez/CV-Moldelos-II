$(document).ready(crear);

function crear(){
    document.getElementById("Nombre").innerHTML = window.localStorage.getItem("name");
    document.getElementById("Telefono").innerHTML = window.localStorage.getItem("phone");
    document.getElementById("Correo").innerHTML = window.localStorage.getItem("email");
    document.getElementById("Direccion").innerHTML = window.localStorage.getItem("add");
    document.getElementById("Cedula").innerHTML = window.localStorage.getItem("document");
    document.getElementById("Edad").innerHTML = window.localStorage.getItem("edad");
    //document.getElementById("Descripcion").innerHTML = window.localStorage.getItem("descripcion");
    document.getElementById("institucion").innerHTML = window.localStorage.getItem("institucion");
    document.getElementById("secD").innerHTML = window.localStorage.getItem("secD");
    document.getElementById("secH").innerHTML = window.localStorage.getItem("secH");
    document.getElementById("universidad").innerHTML = window.localStorage.getItem("universidad");
    document.getElementById("uniD").innerHTML = window.localStorage.getItem("uniD");
    document.getElementById("uniH").innerHTML = window.localStorage.getItem("uniH");
    document.getElementById("empresa").innerHTML = window.localStorage.getItem("empresa");
    document.getElementById("cargo").innerHTML = window.localStorage.getItem("cargo");
    document.getElementById("carD").innerHTML = window.localStorage.getItem("carD");
    document.getElementById("carH").innerHTML = window.localStorage.getItem("carH");
}