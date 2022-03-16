let nota1=document.getElementById('nota1');
let nota2=document.getElementById('nota2');
let nota3=document.getElementById('nota3');

const mensnota1=document.getElementById('mensnota1')
const mensnota2=document.getElementById('mensnota2')
const mensnota3=document.getElementById('mensnota3')

let definitiva=document.getElementById('definitiva')
let observacion=document.getElementById('observacion')

let btnCalcular = document.getElementById('btnCalcular')




// eventos del DOM
//al recibir foco - función anonima (también se puede con función flecha)
nota1.onfocus=function() {
mensnota1.innerHTML="* la nota 1 es obligatoria"
}
//al quitar foco - función flecha (también se puede con función anonima)
nota1.onblur=()=>{
    mensnota1.innerHTML=""
}

//ADDlistener

nota2.addEventListener('focus', function(){
    mensnota2.innerHTML="* la nota 2 es obligatoria"
})

nota2.addEventListener('blur', function(){
    mensnota2.innerHTML=""
})


nota3.addEventListener('focus', function(){
    mensnota3.innerHTML="* la nota 3 es obligatoria"
})

nota3.addEventListener('blur', function(){
    mensnota3.innerHTML=""
})


// //funcion calcular 
// function calcularDefinitiva(){
//     let def=(parseFloat(nota1.value)+
//     parseFloat(nota2.value)+parseFloat(nota3.value))/3;
//     definitiva.innerHTML=def;

//     if (def>=3){
//         observacion.innerHTML="Competente"
//     } else {
//         if(def<2){
//             observacion.innerHTML="No es competente"
//         }else{
//             observacion.innerHTML="Aún no es competente"
//         }
//     }
// }

// //eventos del boton calcular notas

// btnCalcular.addEventListener('click',calcularDefinitiva)



//funcion calcular la misma de arriba pero con parametros

function calcularDefinitiva(nota1,nota2,nota3){
    let def=(parseFloat(nota1)+
    parseFloat(nota2)+parseFloat(nota3))/3;
    definitiva.innerHTML=def;

    if (def>=3){
        observacion.innerHTML="Competente"
    } else {
        if(def<2){
            observacion.innerHTML="No es competente"
        }else{
            observacion.innerHTML="Aún no es competente"
        }
    }
}

btnCalcular.addEventListener('click',()=>calcularDefinitiva(nota1.value,nota2.value,nota3.value))