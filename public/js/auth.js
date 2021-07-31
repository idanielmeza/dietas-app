let user;

//validar tokend en localstorage
const validarJWT = async()=>{

    const token = localStorage.getItem('user-token') || '';

    if(token.length <=10){
        try {
            localStorage.removeItem('user-token');
        } catch (error) {
            console.log(error);
        }
        
        window.location = '/login';
        throw new Error('No hay token en el servidor')
    }

    const resp = await axios({
        method: 'get',
        url: '/api/auth',
        headers: {'user-token':token}
    })

    const {data, ..._} = resp;

    localStorage.setItem('user-token', data.token);
    user = data.usuario;
}

const main = async()=>{
    //Validar JWT
    await validarJWT();
    const labelUsuario = document.getElementById('nombreUsuario');
    labelUsuario.textContent = `Bienvenido: ${user.nombre}`;
    
}

main();
