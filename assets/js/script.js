const propietario = document.querySelector("#propietario");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const nombreMascota = document.querySelector("#nombreMascota");
const tipo = document.querySelector("#tipo");
const enfermedad = document.querySelector("#enfermedad");
const btnAgregar = document.querySelector("#btnAgregar");
const resultado = document.querySelector("#resultado");
const usuarioInput = document.querySelector(".usuarioInput");
const telefonoInput = document.querySelector(".telefonoInput");
const direccionInput = document.querySelector(".direccionInput");
const mascotaInput = document.querySelector(".mascotaInput");
const consultaInput = document.querySelector(".consultaInput");

class Propietario {
    #nombrePropietario;
    #direccion;
    #telefono;
    constructor(nombrePropietario, direccion, telefono) {
        this.#nombrePropietario = nombrePropietario;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }

    get getNombrePropietario() {
        return this.#nombrePropietario;
    }
    get getDireccion() {
        return this.#direccion;
    }
    get getTelefono() {
        return this.#telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.getNombrePropietario}, su domicilio es ${this.getDireccion} y su número de contacto es ${this.getTelefono}`;
    }
}

class Animal extends Propietario {
    #tipo;
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this.#tipo = tipo;
    }

    get getTipo() {
        return this.#tipo;
    }

    tipoAnimal() {
        return `Tipo de animal: ${this.getTipo}`;
    }
}

class Mascota extends Animal {
    #nombreMascota;
    #motivoConsulta;
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, motivoConsulta) {
        super(nombrePropietario, direccion, telefono, tipo);
        this.#nombreMascota = nombreMascota;
        this.#motivoConsulta = motivoConsulta;
    }

    get getNombreMascota() {
        return this.#nombreMascota;
    }

    set setNombreMascota(nombre) {
        this.#nombreMascota = nombre;
    }
    get getMotivoConsulta() {
        return this.#motivoConsulta;
    }

    set setMotivoConsulta(motivos) {
        this.#motivoConsulta = motivos;
    }
}

btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();

    const inputPropietario = propietario.value;
    const inputTelefono = telefono.value;
    const inputDireccion = direccion.value;
    const inputNombreMascota = nombreMascota.value;
    const inputTipo = tipo.value;
    const inputEnfermedad = enfermedad.value;
    const regexLetras = /[a-zA-Z]/gim;
    const regexNumeros = /\d/gim;

    if (!regexLetras.test(inputPropietario)) {
        usuarioInput.innerText = "Debe ingresar un nombre válido";
        return;
    }
    if (!regexNumeros.test(inputTelefono)) {
        telefonoInput.innerText = "Debe ingresar un número válido";
        return;
    }
    if (!inputDireccion.trim()) {
        direccionInput.innerText = "Debe ingresar una dirección";
        return;
    }
    if (!inputNombreMascota.trim()) {
        mascotaInput.innerText = "Debe ingresar un nombre de mascota";
        return;
    }
    if (!inputEnfermedad.trim()) {
        consultaInput.innerText = "Debe ingresar motivo de consulta";
        return;
    }

    const mascota = new Mascota(
        inputPropietario,
        inputDireccion,
        inputTelefono,
        inputTipo,
        inputNombreMascota,
        inputEnfermedad
    );

    resultado.innerHTML += `<li>${mascota.datosPropietario()}; 
    ${mascota.tipoAnimal()}, su nombre es ${mascota.getNombreMascota} 
    y la enfermedad es ${mascota.getMotivoConsulta}</li>`;
});
