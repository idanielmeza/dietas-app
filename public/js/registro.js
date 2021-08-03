const formulario = document.querySelector('form');

formulario.addEventListener('submit', registrarUsuario)

async function registrarUsuario(e){
    
    e.preventDefault();

    const formData = {};

    for(let el of formulario.elements){
        if( el.name.length > 0 ){
            formData[el.name] = el.value;
        }
    }

    if(formData.password !== formData.password1){
        return alert('Las contraseñas no coinciden');
    }

    await axios({
        method: 'post',
        url: '/api/usuario',
        data: formData
    })

    const resp = await axios({
        method: 'post',
        url: '/api/auth/login',
        data:{
            correo: formData.correo,
            password: formData.password
        }
    })

    const {token} = resp.data;

    localStorage.setItem('user-token',token);

    window.location= '/';
}