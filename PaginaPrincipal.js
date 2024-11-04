var i = 1;


function cargarInfoSelect(valor){
var valorSeleccionado = valor.value;
}

function agregarNombre(){
    
    if(document.getElementById("nombre").value == ""){
        alert("Nombre no es valido");
    }else{
        var nuevoNombre = document.createElement("option");
        nuevoNombre.value = i;
        nuevoNombre.text = document.getElementById("nombre").value;
        document.getElementById("select").add(nuevoNombre);
        document.getElementById("nombre").value = ""
        i++;
    }
    
}

function guardarInformacion(){

}