//Inicializar clases
const buscador = new Buscador();
const tablaComidas = new TablaComidas();
//Documento cargado
document.addEventListener('DOMContentLoaded', async()=>{

    calcular.addEventListener('click',calcularKcal )

    const resp = await axios({
        method: 'get',
        url: '/api/usuario',
        headers: {'user-token': localStorage.getItem('user-token')}
    });

    usuario=resp.data;

    if(usuario.edad){
        estaturaInput.value = usuario.estatura;
        pesoInput.value = usuario.peso;
        edadInput.value = usuario.edad;
        sexoInput.value = usuario.sexo;
        actividadInput.value = usuario.actividad;
        objetivoInput.value = usuario.objetivo;
        calcular.click();
        toggleFormualrio();
        comidasLocal();
    }

})


