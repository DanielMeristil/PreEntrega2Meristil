// OBJETO
// APLICANDO OBJETO EN  ESPACIOS GLAMOURE, BELLEZA & ESTETICA.

   const nombre = "Plasma Pen, Rejuvenecimiento y Reparación Facial y Corporal";
   const Precio = 150000;
    const Disponible = true;

    const producto2 = {
   nombre: "Plasma Pen, Rejuvenecimiento y Reparación Facial y Corporal",
   Precio:15000,
   Disponible:true,
       Carracteristicas:{
              duración: '3años a 4 años',
               ModoDeUso:' Edad entre 50 años y más',
             Efecto: 'Rejuveneze',
       }
    }

   const producto3 = {
         Nombre: "Plasma Pen, Rejuvenecimiento y Reparación Facial y Corporal",
          Precio: 15000,
          Disponible: true
   }

     console.log(producto);
      console.log(producto1.Nombre);
      console.log(producto2.Precio);
      console.log(producto3.Disponible);



     console.log(producto3);
      console.log(producto4.Carracteristicas);
      console.log(producto5.Carracteristicas.duración);
      console.log(producto6.Carracteristicas.ModoDeUso);
      console.log(producto7.Carracteristicas.Efecto);




//ARRAYS
//Aplicando ARRAYS EN ESPACIOS GLAMOURE, BELLEZA & ESTETICA.
const estilismo = ['Microblading', 'Labios', 'Delineado Permanente',
'Sejas', 'Pestañas', 'Lifting', 'Microneedling', 'Plasma pen', 'Trata Arrugas', 'Manchas Lunares',];

console.table(estilismo);

for(let i = 0; i < estilismo.length; i++) {
    console.log(estilismo[i]);


}

const carrito = [ ];
const estilismo1 = {
    nombre: "Microblading, Labios, Delineado Permanente",
    Precio: 15000,
    AñosDeDuración: 3,
    DirigidoAEdad: 50
}

const carrito2 = [ ];
const estilismo2 = {
    nombre: "Lifting, Microneedling, Pastaña, Sejas",
    Precio: 15000,
    AñosDeDuración: 3,
    DirigidoAEdad:40
}

const carrito3 = [ ];
const estilismo3 = {
    nombre: "Plasma Pen, Tratas Arrugas, Manchas Lunares",
    Precio: 15000,
    AñosDeDuración: 3,
    DirigidoAEdad: 60
}

carrito.push(estilismo);
carrito.push(estilismo1);
carrito.push(estilismo2);
carrito.push(estilismo3);

const carrito4 = [ ];
const estilismo4 = {
    nombre: "PlasmaPen, tratar Flacidez Abdominar Estrias, Eliminar bolsas",
    Precio: 15000,
    AñosDeDuración: 3,
    DirigidoAEdad: 60
}

carrito.unshift(estilismo4);
console.table(carrito);


//FUNCTIONES DE ORDEN SUPERIOR, APLICANDO FUNCIONES DE ORDEN SUPERIOR EN; ESPACIOS GLAMOURE, BELLEZA & ESTETICA.
function mayorQue(n) {
    return (m) => m > n;
    let prueba = mayorQue(10)(10);
    console.log(prueba);

}
function calculadora(op) {
    let resultado;
    if (op === "suma") {
        resultado = (a, b) => a + b;  
    }else if (op === "resta") {
        resultado = (a, b) => a - b;
    }else if (op === "multiplicacion") {
        resultado = (a, b) => a * b;
    }else if (op === "division") {
        resultado = (a, b) => a / b;
    }else{
        return "operacion no valida";
    }
    return resultado;
}

let suma = calculadora("suma");
console.log(suma(5, 9));
console.log(calculadora("resta")(5, 17));
console.log(calculadora("multiplicacion")(5, 9));
console.log(calculadora("division")(5, 2));



// DOM : AÑADIR ENLACES DE NAVIGACIONES CON DOM.
//APLICANDO DOM EN; ESPACIOS GLAMOURE, BELLEZA & ESTETICA.
const enlace = document.createElement('NAVEGACION');

enlace.textContent = ('Iniciar Secion, Contacto, Marcas, Maniciure, Cuidado Facial-Cosmetica');

enlace.href = ('/Facebook, Instagram, Trwiter, WhatsApp ');

enlace.target = ("Maquillaje, Pestañas y Cejas, Estetica Corporal,");

console.log(enlace);


const navegacion = document.querySelector('.Navegacion');

//AGREGANDO PARRAFO EN CON DOM EN,ESPACIOS GLAMOURE, BELLEZA & ESTETICA.

const Paragrafo1 =document.createElement('PARRAFO');
Paragrafo1.textContent = 'ESTILISMO ESTETICA & MICROPIMENTACION';
Paragrafo1.classList.add('CARRATERISTA','Delineado', 'Permanente', 'Cejas');

const Paragrafo2 = document.createElement('PARRAFO');
Paragrafo2.textContent = 'PLASMA PEN','Eliminar Arrugas finas y profundas', 'Rejuvencimiento y Reparacion facial y Corporal' ;
Paragrafo2.classList.add('Titulo');

const Paragrafo3 = document.createElement('PARRAFA');
Paragrafo3.textContent = '$150000 servicio';
Paragrafo3.classList.add('Precio');

const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(Paragrafo1)
info.appendChild(Paragrafo2)
info.appendChild(Paragrafo3)


console.log(info);
