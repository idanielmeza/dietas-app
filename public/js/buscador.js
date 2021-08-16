
class Buscador{
    

    init(id, div){

        const existe = document.querySelector(`#buscador${id}`);
        
        if(existe){
            existe.remove();
            return;
        }


        const divBuscador = document.createElement('div');
        divBuscador.id = `buscador${id}`;

        div.insertBefore(divBuscador, div.firstChild.nextSibling);

        divBuscador.innerHTML = `
        <div class='mt-2'>
            <nav class="bg-light d-flex align-items-center container">
                <div class="container-fluid">
                    <div class="d-flex">
                    <input for='buscarBtn' id='buscarInput${id}' class="form-control me-2" type="search" placeholder="Alimentos..." aria-label="Buscar">
                    <button id='buscarBtn-${id}' name='buscarBtn' onclick="buscador.buscarAlimentos(this.id)" class="btn btn-outline-primary" type="button">Buscar</button>
                    </div>
                </div>
            </nav>
            <div id="divAlimento${id}"></div>
        </div>`;
    }

    async buscarAlimentos(buscador){

        const [b,id] = buscador.split('-');

        const busqueda = document.querySelector(`#buscarInput${id}`).value;

        if(busqueda === ''){
            return alert('Los alimentos se buscan por nombre');
        }

        const divAlimento = document.querySelector(`#divAlimento${id}`);

        divAlimento.appendChild(spinner);
        
        const {data:alimentos, ..._} = await axios.post('/api/search', {busqueda})

        this.agregarALista(alimentos.resultados[0],id);

        

    }

    agregarALista(alimentos,id) {

        document.querySelector(`#buscarInput${id}`).value = '';

        const divAlimento = document.querySelector(`#divAlimento${id}`);

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
                    <div class="p-2 flex-shrink-1 bd-highlight"><button id='${_id}' type="button" class="btn btn-dark" onclick='tablaComidas.agregarAlimento(${id},this.id)'>+</button></div>
                </div>
                <div class="card-footer">
                    Proteina: ${proteina} gr - Carbohidratos: ${carbohidrato} gr - Grasas: ${grasa} gr
                </div>
            `
    
            lista.appendChild(elemento);
    
        })

        if(alimentos.length === 0){

            lista.innerHTML = `<p class='text-muted text-center'>No se encontraron alimentos</p>`;

        }

        const divBuscador = document.querySelector(`#buscador${id}`);

        divAlimento.appendChild(lista);
        divBuscador.appendChild(divAlimento);
    
    }

}

