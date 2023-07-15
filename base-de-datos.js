//Creo el constructor para los objetos agencia
class agencia {
    constructor(logo, nombre, localidad, calle, numero, celular, mail ) {
        this.logo = logo;
        this.nombre = nombre;
        this.localidad = localidad.toUpperCase(); //Convierto a mayusculas para que coincida con cualquier forma de escribir del usuario
        this.calle = calle;
        this.numero = Number(numero);
        this.celular = celular;
        this.mail = mail;
    }
}

//Creo la base de datos de las agencias
const agencia1 = new agencia (true, "agencia1", "caballito", "Av Rivadavia", 5300, 1145547678, "agencia1@gmail.com");
const agencia2 = new agencia (true, "agencia2", "palermo", "Av Santa fe", 3598, 1187786545, "agencia2@gmail.com");
const agencia3 = new agencia (true, "agencia3", "caballito", "Av Rivadavia", 670, 1153546789, "agencia1@gmail.com");
const agencia4 = new agencia (true, "agencia4", "almagro", "Av jujuy", 2400, 1109899087, "agencia1@gmail.com");
const agencia5 = new agencia (true, "agencia5", "recoleta", "Av Santa fe", 500, 1167765434, "agencia1@gmail.com");
const agencia6 = new agencia (true, "agencia6", "balbanera", "9 de julio", 532, 1148847933, "agencia1@gmail.com");

//Defino una constante para el array de las agencias
const AGENCIAS = [agencia1, agencia2, agencia3, agencia4, agencia5];