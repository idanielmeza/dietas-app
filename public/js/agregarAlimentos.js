const btn = document.querySelector('#agregar');

document.addEventListener('DOMContentLoaded',()=>{


    btn.addEventListener('click', agregarAlimento)

})

const agregarAlimento = async()=>{

    const nombre = document.querySelector('#nombre').value;
    const proteina = document.querySelector('#proteina').value;
    const carbohidrato = document.querySelector('#carbos').value;
    const grasa = document.querySelector('#grasa').value;
    const gramo = document.querySelector('#gramo').value;
    const ml = Boolean(document.querySelector('#ml').value);

    if(nombre == '' || proteina == '' || gramo == '' || carbohidrato == '' || grasa == '' || ml == '' || gramo == ''){
        alert('Todos los campos son obligatorios');
        return;
    }

    const resp = await axios({
        method: 'post',
        url: '/api/alimentos',
        data:{
            nombre,proteina,carbohidrato,grasa,gramo,ml
        }
    });

    const {alimento, msg} = resp.data;

    if(msg){

        alert('El alimento ya existe');
        return;

    }



    location.reload();
}