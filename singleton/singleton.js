console.log("Aprendiendo sobre patrones de diseño");

class Singleton {

  constructor() {
    this.randomNumber = Math.random();
    // si no existe la instancia, la crea
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    // si existe la instancia, retorna la instancia
    return Singleton.instance;
  }

}

//creamos instancias para analizar comportamientos
const instancia1 = new Singleton();
const instancia2 = new Singleton();


//comparamos las instancias
console.log("¿Instancia 1 es igual a instancia 2?", instancia1 === instancia2);


console.log(instancia1.randomNumber);
console.log(instancia2.randomNumber);
console.log(instancia1.randomNumber === instancia2.randomNumber);

console.log(Singleton)



class WeekDays {
    daysES = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    daysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    constructor(lang) {
        this.lang = lang;
    }

    //methodos
    getDays(){
        return this.lang === "es" ? this.daysES : this.daysEN;
    };
}



const instanciasDiasES = new WeekDays('es');
const instanciasDiasEN = new WeekDays('en');

console.log(instanciasDiasEN.getDays());
console.log(instanciasDiasES.getDays());
