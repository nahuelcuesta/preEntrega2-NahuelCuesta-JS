class agencia {
    constructor(logo, nombre, localidad, calle, numero, celular, mail ) {

        this.logo = logo;
        this.nombre = nombre;
        this.localidad = localidad;
        this.calle = calle;
        this.numero = Number(numero);
        this.celular = celular;
        this.mail = mail;

    }

}

const agencia1 = new agencia (true, "agencia1", "caballito", "Av Rivadavia", 5300, 1145547678, "agencia1@gmail.com");
const agencia2 = new agencia (true, "agencia2", "palermo", "Av Santa fe", 3598, 1187786545, "agencia2@gmail.com");


