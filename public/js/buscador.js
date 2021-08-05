
class Buscador{
    
    constructor(){
        this.numero;
        this.divBuscador;
    }

    init(id, div){

        const existe = document.querySelector('.buscador');
        
        if(existe){
            existe.remove();
            return;
        }

        this.numero = id;

        this.divBuscador = document.createElement('div');
        this.divBuscador.classList.add('buscador');

        div.insertBefore(this.divBuscador, div.firstChild.nextSibling);

        this.divBuscador.innerHTML = `
        <div class='mt-2'>
            <nav class="bg-light d-flex align-items-center container">
                <div class="container-fluid">
                    <div class="d-flex">
                    <input for='buscarBtn' id='buscarInput' class="form-control me-2" type="search" placeholder="Alimentos..." aria-label="Buscar">
                    <button id='buscarBtn' name='buscarBtn' onclick="buscador.buscarAlimentos()" class="btn btn-outline-primary" type="button">Buscar</button>
                    </div>
                </div>
            </nav>
            <div id="divAlimento"></div>
        </div>`;
    }

    async buscarAlimentos(){

        const busqueda = document.querySelector('#buscarInput').value;

        if(busqueda === ''){
            return alert('Los alimentos se buscan por nombre');
        }

        const divAlimento = document.querySelector('#divAlimento');

        divAlimento.appendChild(spinner);
        
        const {data:alimentos, ..._} = await axios.post('/api/search', {busqueda})

        this.agregarALista(alimentos.resultados[0]);

        

    }

    agregarALista(alimentos) {

        document.querySelector('#buscarInput').value = '';

        const divAlimento = document.querySelector('#divAlimento');

        while(divAlimento.firstChild){
            divAlimento.removeChild(divAlimento.firstChild);
        }


        divAlimento.classList.add('card','mt-2');
        divAlimento.innerHTML = `
            <div class="card-header">
                Alimentos
            </div>
        `;

    
        const lista = document.createElement('ul');
        lista.classList.add('list-group', 'list-group-flush','my-2');
    
        alimentos.forEach(alimento =>{
            const {_id,nombre,proteina,carbohidrato,grasa, gramo, ml} = alimento;
            const elemento = document.createElement('li');
            elemento.classList.add('list-group-item');
    
            elemento.innerHTML= `
                <div class="d-flex bd-highlight">
                    <div class="p-2 w-100 bd-highlight"><h4 class='text-dark'>${nombre} <span class='text-muted'>(${gramo} ${ ml ? 'ml' : 'gr'} )</span></h4></div>
                    <div class="p-2 flex-shrink-1 bd-highlight"><button id='${_id}' type="button" class="btn btn-dark" onclick='tablaComidas.agregarAlimento(${this.numero},this.id)'>+</button></div>
                </div>
                <div class="card-footer">
                    Proteina: ${proteina} gr - Carbohidratos: ${carbohidrato} gr - Grasas: ${grasa} gr
                </div>
            `
    
            lista.appendChild(elemento);
    
        })

        divAlimento.appendChild(lista);
        this.divBuscador.appendChild(divAlimento);
    
    }

}

