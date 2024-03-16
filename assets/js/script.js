const propietario = document.querySelector("#propietario");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const nombreMascota = document.querySelector("#nombreMascota");
const tipo = document.querySelector("#tipo");
const enfermedad = document.querySelector("#enfermedad");
const btnAgregar = document.querySelector("#btnAgregar");
const resultado = document.querySelector("#resultado");

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
    console.log(inputPropietario);
    console.log(inputTelefono);
    console.log(inputDireccion);
    console.log(inputNombreMascota);
    console.log(inputTipo);
    console.log(inputEnfermedad);

    const perro1 = new Mascota(
        inputPropietario,
        inputDireccion,
        inputTelefono,
        inputTipo,
        inputNombreMascota,
        inputEnfermedad
    );
    // console.log(perro1);

    resultado.innerHTML += `${perro1.datosPropietario()}; ${perro1.tipoAnimal()},su nombre es ${
        perro1.getNombreMascota
    } y la enfermedad es ${perro1.getMotivoConsulta}`;

    const gato1 = new Mascota(
        inputPropietario,
        inputDireccion,
        inputTelefono,
        inputTipo,
        inputNombreMascota,
        inputEnfermedad
    );

    resultado.innerHTML += `${gato1.datosPropietario()}; ${gato1.tipoAnimal()},su nombre es ${
        gato1.getNombreMascota
    } y la enfermedad es ${gato1.getMotivoConsulta}`;

    const conejo1 = new Mascota(
        inputPropietario,
        inputDireccion,
        inputTelefono,
        inputTipo,
        inputNombreMascota,
        inputEnfermedad
    );

    resultado.innerHTML += `${conejo1.datosPropietario()}; ${conejo1.tipoAnimal()},su nombre es ${
        conejo1.getNombreMascota
    } y la enfermedad es ${conejo1.getMotivoConsulta}`;
});
