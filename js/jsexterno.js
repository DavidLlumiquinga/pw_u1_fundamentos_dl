function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(id_elementopadre, html) {
    document.getElementById(id_elementopadre).innerHTML = html;
}

function construirH1() {
    return "<h1 id='id_calculadora'>Calculadora</h1>";
}

function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}

function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}

function monstrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;

    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function fundamentosJS() {
    /* Tipos de variables */
    var nombre = "David"; // antigua, considerada obsoleta
    let apellido = "Llumiquinga" // variables cambiantes
    let apellido2 = 15;
    apellido2 = "tasiguano";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diasSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8;
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(apellido2)
    console.log(IVA);
    console.log(arreglo);

    //Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemana.push('Jueves'); // Agregar al final
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Dias'); // Agregar al inicio
    console.log(arreglosDiasSemana);

    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    // Sentencias de Control

    let edad = 19;
    if(edad >= 18) {
        console.log('Es mayor de Edad');
    }else{
        console.log('En menor de Edad');
    }

    let dia = 'lunes';
    switch(dia){
        case 'lunes':
            console.log('Es lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default:
            console.log('No es ninguno de esos dias');
    }

    for(let i=0; i<=5; i++){
        console.log(i);
    }

    const frutas = ['manzana', 'sandia', 'papaya', 'naranja'];
    for(let fruta of frutas) {
        console.log(fruta);
    }

    // Manejo de Objetos
    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Teran';
    console.log(profesor);

    if(profesor.ciudad === 'Quito') {
        console.log('Es Quiteño');
    }

    if(profesor.edad !== 36) {
        console.log('Es diferente de 36');
    }else{
        console.log('Es 36');
    }

    for(let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }
    /**Desestructuracion */
    /**es una forma sencilla y practica pra extraer valores de un 
     * objetos y asignar a variables individuales*/

    /**Estudainte */
    const e1 = {
        nombre: 'Edison1',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    const e2 = {
        nombre: 'Edison2',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    const arregloEstudiantes=[e1,e2,{
        nombre: 'Edison3',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito'
    }];

    console.log(arregloEstudiantes[0])
    console.log(arregloEstudiantes[2])
    /**Arreglos */

    const ar1=[1,2,3,4,5,6,7];
    const[a,b,c,d]=ar1;
    console.log(a);
    console.log(d);

    const[primero,,,,,,ultimo]=ar1;
    console.log(primero)
    console.log(ultimo)

    const [pos1,pos2]=[1,2,3,4,5,6,7];
    imprime("David"+ar1);

    //Objetos
    const e3 = {
        nombre: 'Edison3',
        apellido: 'Cayambe3',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito3'
    };

    const{nombre1, ciudad}=e3;
    console.log(nombre1)
    //console.log(ciudad)


    const{nombre :n, ciudad1 :ciu}={
        nombre: 'Edison3',
        apellido: 'Cayambe3',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito3'
    };
    console.log(n);
    console.log(ciu);

    const e4 = {
        nombre: 'Edison34',
        apellido: 'Cayambe4',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito4',
        direccion:{
            calle: "Av. America",
            barrio: "La Gasca",
            numeracion:"1231"
        }
    };

    console.log(e4.direccion.calle);

    const{edad1,direccion}=e4
    console.log(direccion)
    const{barrio}=direccion;
    console.log(barrio);

    const{direccion:{calle:c1}}=e4;
    console.log(c1);
}
function imprime([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);

}