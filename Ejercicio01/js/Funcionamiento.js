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
    mesas_reservadas();


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

    } else {
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

//Reservacion de mesa
const mesas_array = [];

function reservarmesa(div_id) {
    var mesadiv = document.getElementById(div_id);
    if (mesadiv.style.backgroundColor !== "rgb(238, 75, 43)") {
        mesadiv.style.background = "#EE4B2B";
        window.alert("Reservaste la mesa: " + div_id + " con exito!");
        mesas_array.push(div_id);
        //window.alert(mesas_array);
        localStorage.setItem("reservas", JSON.stringify(mesas_array));
        //window.alert(localStorage.getItem("reservas"));
    } else {
        window.alert(div_id + " Ya esta reservada.");

    }

}
//Metodo de carga de mesa

function mesas_reservadas() {
    let string_array = localStorage.getItem("reservas");
    const reservado = string_array.split(",");
   // window.alert(reservado[2].replace(/[\[\]"]+/g, ''));
    for (let i = 0; i < reservado.length; i++) {
        let id_div = reservado[i].replace(/[\[\]"]+/g, '');
        var mesa_div = document.getElementById(id_div);
        mesa_div.style.background = "#EE4B2B";
    }

}
