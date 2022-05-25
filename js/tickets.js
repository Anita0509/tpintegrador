const valorticket = 200;

let descuento80 = 80;
let descuento50 = 50;
let descuento15 = 15;

let nombre      = document.getElementById("Nombre")
let apellido    = document.getElementById("Apellido")
let correo      = document.getElementById("Correo")
let canttickets = document.getElementById("CantTickets")
let categoria   = document.getElementById("Categoria")

//validaciones campos

function quitarError() {

    let x = document.querySelectorAll(".form-control, .form-select");
    let i

        for (i=0; i < x.length; i++){
            x[i].classList.remove('is-invalid');
        }
}

//calculo valor tickets

function total_a_pagar () {

    quitarError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value === "") {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    const validarEmail = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
        
    if (!validarEmail(correo.value)){
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if ((canttickets.value == 0 ) || ( isNaN(canttickets.value)) ) {
        canttickets.classList.add("is-invalid");
        canttickets.focus();
        return;
    }

    if (categoria.value === "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }


    let totalValorTickets = (canttickets.value) * valorticket;

    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets - (descuento80/ 100 * totalValorTickets);
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuento50/ 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuento15/ 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets;
    }

    TotalPago.innerHTML= totalValorTickets;
    
}


btnResumen.addEventListener('click', total_a_pagar);

function reset_total_a_pagar() {
    quitarError();
    TotalPago.innerHTML= "";
    
}

btnBorrar.addEventListener('click', reset_total_a_pagar);
