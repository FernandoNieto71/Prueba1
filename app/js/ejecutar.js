/*javaScript de la pantalla inicio*/




function avanza () {

alert("Bienvenido " + document.getElementById("usuario").value);

}

function enviomail () {


alert("Se ha enviado un mail a " + document.getElementById("mail").value + ", confirme y vuelva a ingresar.");

}

function fMostrarContrasena(){
var tipo = document.getElementById("pssw");
if(tipo.type == "password"){
tipo.type = "text";
}else{
tipo.type = "password";
}
}



