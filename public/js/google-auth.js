const formulario = document.querySelector('form');

formulario.addEventListener('submit',(e)=>{

    e.preventDefault();

    const formData = {};

    for(let el of formulario.elements){
        if( el.name.length > 0 ){
            formData[el.name] = el.value;
        }
    }

    fetch(window.location.origin + '/api/auth/login',{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then((datos)=>{
        if(datos.mgs){
            return console.error(datos.mgs);
        }
        localStorage.setItem('user-token',datos.token);
        window.location = '/';
    })
    .catch(console.log)

} )

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();

    const id_token = googleUser.getAuthResponse().id_token;
    const data = {id_token}

    fetch(window.location.origin + '/api/auth/google',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp=> resp.json())
    .then(data => signOut(data))
    .catch(console.log);
    
}

function signOut({usuario,token}) {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    localStorage.setItem('user-token', token);
    window.location= '/';
}
