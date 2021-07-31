function calcularKcal(e){

    e.preventDefault();

    const contenedorKcal = document.querySelector('#divKcal');

    while(contenedorKcal.firstChild){
        contenedorKcal.removeChild(contenedorKcal.firstChild);
    }

    //Inputs
    const estatura = estaturaInput.value;
    const peso = pesoInput.value;
    const edad = edadInput.value;

    //Selecciones
    const sexo = sexoInput.value;
    const actividad = actividadInput.value;
    const objetivo = objetivoInput.value;

    if(edad === '' || peso === '' || estatura === '' || sexo === '' || actividad === '' || objetivo === ''){
        return alert('Completa todos los campos');
    }

    if(sexo === 'h'){
        const tmb = 66 + (13.7 * Number(peso)) + (5 * Number(estatura)) - (6.75 * Number(edad));
        kcal = tmb * Number(actividad) + Number(objetivo);
    }else if(sexo === 'm'){
        const tmb = 655 + (9.6 * Number(peso)) + (1.8 * Number(estatura)) - (4.7 * Number(edad));
        kcal = tmb * Number(actividad) + Number(objetivo);
    }

    guardarDB(estatura,peso,edad,sexo,actividad,objetivo);

    const divInformacionKcal = document.createElement('div');
    divInformacionKcal.id = 'kcalRestantes';
    divInformacionKcal.classList.add('card-header', 'text-center', 'text-dark');
    divInformacionKcal.innerHTML =  `Calorias Restantes : <span class='text-danger'>${kcal.toFixed(2)}</span> <span class='text-muted'>kcal.</span>`;

    contenedorKcal.appendChild(divInformacionKcal);
    
    tablaComidas.init();
    toggleFormualrio();
    comidasLocal();

}

function toggleFormualrio(){
    formularioKcal.classList.toggle('d-none');
}

async function guardarDB(estatura,peso,edad,sexo,actividad,objetivo){

    const datos = {
        estatura,
        peso,
        edad,
        sexo,
        actividad,
        objetivo
    }

    const usuario =  await axios({
        method: 'put',
        url: '/api/usuario',
        headers:{
            'user-token': localStorage.getItem('user-token'),
            'Content-Type': 'application/json'
        },
        data: datos
    })

}

function cerrarSesion(){

    localStorage.removeItem('user-token');
    window.location = '/login';

}

function comidasLocal(){

    const {comida:comidastr} = usuario;

    const comida = JSON.parse(comidastr);

    if(comida){

        comida1 = comida.comida1;
        comida2 = comida.comida2;
        comida3 = comida.comida3;
        comida4 = comida.comida4;
        comida5 = comida.comida5;

        tablaComidas.actualizarTabla(1,comida1);
        tablaComidas.actualizarTabla(2,comida2);
        tablaComidas.actualizarTabla(3,comida3);
        tablaComidas.actualizarTabla(4,comida4);
        tablaComidas.actualizarTabla(5,comida5);

    }

}

function actualizarKcalRestantes(){

    const div = document.querySelector('#kcalRestantes');
    
    let total = 0;
    let prote = 0;
    let carbos = 0;
    let grasas = 0;

    comida1.forEach(alimento =>{
        total += Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
        prote += Number(alimento.porcion * alimento.proteina);
        carbos += Number(alimento.porcion * alimento.carbohidrato);
        grasas += Number(alimento.porcion * alimento.grasa);
    })
    comida2.forEach(alimento =>{
        total += Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
        prote += Number(alimento.porcion * alimento.proteina);
        carbos += Number(alimento.porcion * alimento.carbohidrato);
        grasas += Number(alimento.porcion * alimento.grasa);
    })
    comida3.forEach(alimento =>{
        total += Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
        prote += Number(alimento.porcion * alimento.proteina);
        carbos += Number(alimento.porcion * alimento.carbohidrato);
        grasas += Number(alimento.porcion * alimento.grasa);
    })
    comida4.forEach(alimento =>{
        total += Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
        prote += Number(alimento.porcion * alimento.proteina);
        carbos += Number(alimento.porcion * alimento.carbohidrato);
        grasas += Number(alimento.porcion * alimento.grasa);
    })
    comida5.forEach(alimento =>{
        total += Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
        prote += Number(alimento.porcion * alimento.proteina);
        carbos += Number(alimento.porcion * alimento.carbohidrato);
        grasas += Number(alimento.porcion * alimento.grasa);
    })


    if(total > kcal){
        div.innerHTML = `
            <span class='text-danger text-uppercase'>Te has excedido por : ${(total - kcal).toFixed(2)} kcal</span>
        `;
        return;
    }

    div.innerHTML = `
    Calorias Restantes : <span class='text-danger'>${(kcal - total).toFixed(2)}</span> <span class='text-muted'>kcal.</span>
    `;

    document.querySelector('#btnDescargar').innerHTML = `

    <div class="card-body table-responsive align-items-center"><table class="table"><thead>
        <tr>
            <th scope="col">Total</th>
            <th scope="col">Proteina</th>
            <th scope="col">Carbos</th>
            <th scope="col">Grasas</th>
            <th scope="col">${total.toFixed(2)} Kcal</th>
            
        </tr>

        <tr>
            <th scope="col">Gr</th>
            <th scope="col">${prote.toFixed(2)}</th>
            <th scope="col">${carbos.toFixed(2)}</th>
            <th scope="col">${grasas.toFixed(2)}</th>
        </tr>

        <tr>
            <th scope="col">%</th>
            
            <th scope="col">
             ${ ((prote * 400) / total).toFixed(2) }
            </th>

            <th scope="col">${ ((carbos * 400) / total).toFixed(2) }</th>
            <th scope="col">${ ((grasas * 400) / total).toFixed(2) }</th>
        </tr>
    </div>
    `;

}

async function guardarlocalStorage(){

    const comida = {
        comida1,
        comida2,
        comida3,
        comida4,
        comida5
    }

    usuario = await axios({
        method: 'put',
        url: '/api/usuario/comida',
        headers: {'user-token': localStorage.getItem('user-token')},
        data: {comida,basura:{'hola':'hola'}}
    })

    

}

// function descargarDieta(){

//     window.jsPDF = window.jspdf.jsPDF;
//     window.html2canvas = html2canvas;
    

//     const doc = new jsPDF('p', 'pt', 'a4');

//     const elementHandler = {
//         '#editor': function (element, renderer) {
//           return true;
//         }
//       };

//     const comidas = document.querySelector('#divComidas');
//     const footer = document.querySelector('#btnDescargar');

//     const div = document.createElement('div');
//     div.appendChild(comidas)
//     div.appendChild(footer);

//     // doc.html(div,
//     //     {
//     //       'width': 180,'elementHandlers': elementHandler
//     //     });
    
//     // doc.save(`Dieta.pdf`);

//     doc.html(div, {
//         callback: function(pdf) {
//           pdf.save("Dieta.pdf");
//         }
//       });
// }

