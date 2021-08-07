//Comidas
let comida1=[];
let comida2=[];
let comida3=[];
let comida4=[];
let comida5=[];

class TablaComidas{

    init(){
        
        this.limpiarHTML();

        for(let i=1; i<=5; i++){
            this.comida(i);
        }
        
        this.footer()
    }

    comida(numero){
        const divTabla = document.createElement('div');
        divTabla.classList.add('card','mt-2');
    
        const header = document.createElement('div');
        header.classList.add('card-header');
        header.innerHTML = `
        <div class="d-flex bd-highlight">
            <div class="p-2 w-100 bd-highlight">Comida #${numero}</div>
            <div class="d-flex bd-highlight">
                <button id='tb-comida-${numero}' type="button" class="btn" onclick="tablaComidas.ocultarComida(this.id)">+</button>
                <button type="button" class="btn btn-primary mx-2" onclick="buscador.init(${numero}, this.parentElement.parentElement.parentElement.parentElement)">Buscador</button>
            </div>
        </div>
        `;
        const divBody = document.createElement('div');
        divBody.classList.add('card-body', 'd-none', 'table-responsive');
        document.body.appendChild(divTabla);

        const tabla = document.createElement('table');
        tabla.classList.add('table');

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Porcion</th>
                <th scope="col">Kcal</th>
                <th scope="col">    </th>
            </tr>
        `;
        const tbody = document.createElement('tbody');
        tbody.id = `comida${numero}`;

        const tfoot = document.createElement('tfoot');
        tfoot.innerHTML= `
            <th scope="col">Total</th>
            <th scope="col"></th>
            <th scope="col">0 Kcal</th>
        `

        divComidas.appendChild(divTabla);

        divTabla.appendChild(header);
        divTabla.appendChild(divBody);
        divBody.appendChild(tabla);
        tabla.appendChild(thead);
        tabla.appendChild(tbody);
        tabla.appendChild(tfoot);

    }
    
    limpiarHTML(){


        while(divComidas.firstChild){
            divComidas.removeChild(divComidas.firstChild);
        }
        
    }

    actualizarTabla(numero,arreglo){

        const tabla = document.querySelector(`#comida${numero}`);

        while(tabla.firstChild){
            tabla.removeChild(tabla.firstChild);
        }

        let proteina = 0;
        let carbos = 0;
        let grasas = 0;
        let kcal = 0;

        arreglo.forEach(alimento =>{
            const alkcal = Number((alimento.porcion * (((Number(alimento.proteina) + Number(alimento.carbohidrato)) * 4) + (alimento.grasa * 9))).toFixed(2))
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${alimento.nombre}<span class='text-muted'> (${Number(alimento.porcion * alimento.gramo).toFixed(2)} ${alimento.ml ? 'ml' : 'gr'}) </span></td>
            <td>
                <div class="input-group input-group-sm mb-3">
                    <input id="p-${numero}-${alimento._id}" type="number" class="form-control" min='0' step='1' style='max-width: 4rem' value="${alimento.porcion}" onchange="tablaComidas.actualizarComida(this.id,this.value)">
                    <span class="input-group-text">${alimento.gramo} ${alimento.ml ? 'ml' : 'gr'}</span>
                </div>
                <div class='d-flex'>
                    <p >
                        <p class='flex-sm-column mx-2'>P: <span class='text-primary'>${Number(alimento.proteina * alimento.porcion).toFixed(2)}</span> gr </p>
                        <p class='flex-sm-column'>C: <span class='text-primary'>${Number(alimento.carbohidrato * alimento.porcion).toFixed(2)}</span> gr</p>
                        <p class='flex-sm-column mx-2'>G: <span class='text-primary'>${Number(alimento.grasa * alimento.porcion).toFixed(2)}</span> gr</p>
                    </p>
                </div>
            </td>
            <th>${alkcal}</th>
            <td>
                <button id='${numero}-${alimento._id}' type="button" class='btn btn-outline-danger mx-2' onclick="tablaComidas.eliminarAlimento(this.id)">x</button>
            </td>
            
            `;
            
            
            tabla.appendChild(tr)

            proteina += alimento.porcion * alimento.proteina;
            carbos += alimento.porcion * alimento.carbohidrato;
            grasas += alimento.porcion * alimento.grasa;
            kcal += alkcal;

            guardarlocalStorage();
            actualizarKcalRestantes();

        });

        const footer = tabla.nextSibling;

        footer.innerHTML = `
        <th scope="col">Total</th>
        <th scope="col">
            <div class='d-flex'>
                <p class='flex-sm-column mx-2'>P: <span class='text-primary'>${Number(proteina.toFixed(2))}</span> gr</p>
                <p class='flex-sm-column'>C: <span class='text-primary'>${Number(carbos.toFixed(2))}</span> gr</p>
                <p class='flex-sm-column mx-2'>G: <span class='text-primary'>${Number(grasas.toFixed(2))}</span> gr</p>   
            </div>
        </th>
        <th scope="col">${Number(kcal.toFixed(2))} Kcal</th>`;

    }

    async agregarAlimento (numero,id){

        const tabla = document.querySelector(`#comida${numero}`);

        tabla.insertBefore(spinner,tabla.firstChild);
        
        const {data:alimento, ..._} = await axios.get(`/api/alimentos/${id}`);

        alimento.porcion = 1;

        let existe= false;

        if(numero == 1){
            comida1.forEach(comida=>{
                if(comida._id == alimento._id){
                    comida.porcion += 1;
                    existe = true;
                }
            })
            if(!existe){
                comida1.push(alimento)
            }
            this.actualizarTabla(numero,comida1);
        }else if(numero == 2){
            comida2.forEach(comida=>{
                if(comida._id == alimento._id){
                    comida.porcion += 1;
                    existe = true;
                }
            })
            if(!existe){
                comida2.push(alimento)
            }
            this.actualizarTabla(numero,comida2);
        }else if(numero == 3){
            comida3.forEach(comida=>{
                if(comida._id == alimento._id){
                    comida.porcion += 1;
                    existe = true;
                }
            })
            if(!existe){
                comida3.push(alimento)
            }
            this.actualizarTabla(numero,comida3);
        }
        else if(numero == 4){
            comida4.forEach(comida=>{
                if(comida._id == alimento._id){
                    comida.porcion += 1;
                    existe = true;
                }
            })
            if(!existe){
                comida4.push(alimento)
            }
            this.actualizarTabla(numero,comida4);
        }
        else if(numero == 5){
            comida5.forEach(comida=>{
                if(comida._id == alimento._id){
                    comida.porcion += 1;
                    existe = true;
                }
            })
            if(!existe){
                comida5.push(alimento)
            }
            this.actualizarTabla(numero,comida5);
        }
    }

    eliminarAlimento(id){

        const[numero,_id] = id.split('-');

        if(numero == 1){
            comida1 = comida1.filter( comida=> comida._id !== _id);
            guardarlocalStorage();
            this.actualizarTabla(numero,comida1);
        }else if(numero == 2){
            comida2 = comida2.filter( comida=> comida._id !== _id);
            guardarlocalStorage();
            this.actualizarTabla(numero,comida2);
        }else if(numero == 3){
            comida3 = comida3.filter( comida=> comida._id !== _id);
            guardarlocalStorage();
            this.actualizarTabla(numero,comida3);
        }
        else if(numero == 4){
            comida4 = comida4.filter( comida=> comida._id !== _id);
            guardarlocalStorage();
            this.actualizarTabla(numero,comida4);
        }
        else if(numero == 5){
            comida5 = comida5.filter( comida=> comida._id !== _id);
            guardarlocalStorage();
            this.actualizarTabla(numero,comida5);
        }

    }

    ocultarComida(id){
        
        const [t,c,numero] = id.split('-');

        const tabla = document.querySelector(`#comida${numero}`).parentElement.parentElement;


        if(tabla.classList.contains('buscador')){
            tabla.nextSibling.classList.toggle('d-none');
        }

        tabla.classList.toggle('d-none')

    }

    actualizarComida(comida, porcion){
        
        const [p,numero,id] = comida.split('-');
        
        if(numero == 1){
            comida1.forEach(alimento=>{
                if(alimento._id == id){alimento.porcion = Number(porcion)}
            })
            this.actualizarTabla(1,comida1);
        }else if(numero == 2){
            comida2.forEach(alimento=>{
                if(alimento._id == id){alimento.porcion = Number(porcion)}
            })
            this.actualizarTabla(2,comida2);
        }else if(numero == 3){
            comida3.forEach(alimento=>{
                if(alimento._id == id){alimento.porcion = Number(porcion)}
            })
            this.actualizarTabla(3,comida3);
        }else if(numero == 4){
            comida4.forEach(alimento=>{
                if(alimento._id == id){alimento.porcion = Number(porcion)}
            })
            this.actualizarTabla(4,comida4);
        }else if(numero == 5){
            comida5.forEach(alimento=>{
                if(alimento._id == id){alimento.porcion = Number(porcion)}
            })
            this.actualizarTabla(5,comida5);
        }
    }
    
    footer(){

        if(document.querySelector('#btnDescargar')){
            return;
        }

        const div = document.createElement('div');
        div.id= 'btnDescargar';
        div.classList.add('card', 'bd-highlight' ,'p-0', 'my-2');

        div.innerHTML = `

        <div class="card-body table-responsive align-items-center"><table class="table"><thead>
        <tr clas='w-100'>
            <th scope="col">Total</th>
            <th scope="col">Proteina</th>
            <th scope="col">Carbos</th>
            <th scope="col">Grasas</th>
            <th scope="col">0 Kcal</th>
            <th scope="col"><button type="button" class="btn btn-primary">Descargar</button></th>
        </tr>

        <tr>
            <th scope="col">%</th>
            <th scope="col">Proteina</th>
            <th scope="col">Carbos</th>
            <th scope="col">Grasas</th>
        </tr>

        <tr>
            <th scope="col">Gr</th>
            <th scope="col">Proteina</th>
            <th scope="col">Carbos</th>
            <th scope="col">Grasas</th>
        </tr>
    </div>
        `;

        divComidas.appendChild(div);

    }

}
