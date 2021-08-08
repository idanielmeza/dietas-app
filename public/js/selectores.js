//Referencias HTML base
const calcular= document.querySelector('#calcular');
const kcalDiv = document.querySelector('#kcalDiv');
const divComidas = document.querySelector('#divComidas');
// const divBuscador = document.querySelector('#divBuscador');
const formularioKcal = document.querySelector('#formularioKcal');

//Inputs
const estaturaInput = document.querySelector('#estatura');
const pesoInput = document.querySelector('#peso');
const edadInput = document.querySelector('#edad');

//Selecciones
const sexoInput = document.querySelector('#sexo');
const actividadInput = document.querySelector('#actividad');
const objetivoInput = document.querySelector('#objetivo');

//Varibales
let kcal;
let usuario;
//Comidas
let comida1=[];
let comida2=[];
let comida3=[];
let comida4=[];
let comida5=[];

//Spinner

const spinner = document.createElement('div');
        spinner.classList.add('text-center','my-2');
        spinner.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        `;