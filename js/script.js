// Vacunación
comprobacionTabla();


function comprobacionTabla() {

    //Declaración variables
    let tablaVacunas = new Map([["Prenatal" , "Difteria, Tétanos y Tosferina"],["2 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo, Conjugada"],["4 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Meningococo B, Neumococo, Conjugada"],["11 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo, Conjugada"],["12 meses" , "Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B"],["15 meses" , "Varicela"],["4 años" , "Sarampión, Rubeola, Parotiditis, Varicela"],["6 años" , "Difteria, Tétanos, Tosferina, Poliomielitis"],["12 años" , "Varicela, Meningococo ACWY, Papilomavirus"],["14 años" , "Difteria, Tétanos"],["65 años" , "Difteria, Tétanos, Herpes Zóster, Neumococo, Conjugada"],["80 años" , "Herpes Zóster"]]);
    let contenedorOpciones = document.querySelector("select")


    //Creación de options
    for (let[edad,contenidoOption] of tablaVacunas) {
        
        let productOption=document.createElement("option");
        productOption.innerHTML = edad;
        productOption.setAttribute("id",edad);
        contenedorOpciones.appendChild(productOption);
        
    }

    //Comprobación de cambio
    contenedorOpciones.addEventListener("change",function() {
        
        let respuesta = document.querySelector("#respuesta");

        //Recorrer la tabla
        for (let [edad,contenidoOption] of tablaVacunas) {
            
            if (contenedorOpciones.value == edad ) {
                
                //Si contiene valor
                respuesta.innerHTML = contenidoOption ;
                
            } else if (contenedorOpciones.value == "") {
                
                //Si no contiene valor
                respuesta.innerHTML = "";
            }
        }
    });
}



//Accesibilidad
document.querySelector("#aumentarFuente").addEventListener("click", ()=>{  
    ajustarFuente(1);
});
document.querySelector("#reducirFuente").addEventListener("click", ()=>{   
    ajustarFuente(-1);  
});
document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);
document.querySelector("#altoContraste").addEventListener("click", altoContraste);
document.querySelector("#reset").addEventListener("click", restablecerTodo);


function ajustarFuente(cambio) {

    let elementos = document.querySelectorAll("body *:not(#accesibilidad *)");

    elementos.forEach(function(elem){

        let estilo = window.getComputedStyle(elem) //getComputedStyle() pilla el estilo del elemento
        let fontSize = parseFloat(estilo.fontSize) //se pasa a float para que no sea String
        console.log(fontSize);
        elem.style.fontSize = fontSize + cambio + 'px';
    })
}
function escalaGrises(){    

    document.body.classList.add("grayscale");
}
function altoContraste(){

    document.body.classList.add("dark-theme");
}
function restablecerTodo(){

    let elementos = document.querySelectorAll("body *");

    elementos.forEach(function(elem){

        elem.style.fontSize = "";
    })

    document.body.classList.remove("dark-theme");
    document.body.classList.remove("grayscale");

}

