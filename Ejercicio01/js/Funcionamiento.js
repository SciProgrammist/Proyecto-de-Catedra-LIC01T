// Objeto de usuario
let claseUsuario = function (user, password) {
    
    this.usuario = user;
    this.contrasena = password;

}

// Se hace visible la reservación de mesas
let habilitarReservas = () => {

    document.querySelector("form").reset();
    let div = document.getElementById("sub_Mesas");
    div.style.display = "block";

}

// Inicio de sesión
let inicioSesion = (inputUsuario, inputContra) => {

    
    // El usuario no se ha registrado
    if (localStorage.getItem(inputUsuario) == null) {
        // Se crea un objeto de la claseUsuario y su correspondiente json
        let nuevoUsuario = new claseUsuario(inputUsuario, inputContra);
        let jsonUsuario = JSON.stringify(nuevoUsuario);

        // Se guarda como una variable localStorage
        localStorage.setItem(inputUsuario, jsonUsuario);

        habilitarReservas();
        alert('Usuario registrado con éxito');

    }
    else {
        let jsonAlmacenado = JSON.parse(localStorage.getItem(inputUsuario));

        if (inputContra == jsonAlmacenado.contrasena) {
            habilitarReservas();
            alert('Inicio de sesión exitoso');
        } else
            alert('Contraseña incorrecta. Intente nuevamente');

    }
}

// Botón de registro
let btnR = document.getElementById("btnRegistro");
btnR.addEventListener("click", () => {

    let inputUsuario = document.getElementById("idUsuario").value.trim();
    let inputContra = document.getElementById("idContra").value.trim();

    if (inputUsuario != "" && inputContra != "") 
        inicioSesion(inputUsuario, inputContra);
    else 
        alert('Faltan campos por completar');
    
});


