const propietario = document.querySelector("#propietario");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const nombreMascota = document.querySelector("#nombreMascota");
const tipo = document.querySelector("#tipo");
const enfermedad = document.querySelector("#enfermedad");
const btnAgregar = document.querySelector("#btnAgregar");
const resultado = document.querySelector("#resultado");

class Propietario {
    #nombre;
    #direccion;
    #telefono;
    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }
}
