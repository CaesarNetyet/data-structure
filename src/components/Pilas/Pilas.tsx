export class Stack {
    expresionPostfija:any[];
    pila:any[] = [];
    j:number = 0;
    cima: string = '$';
    constructor(public max:number = 30) {
        this.expresionPostfija = new Array(this.max);
    }

    infijoAPostfijo(expresion:string){
        let letras = /[a-z]|[0-9]/i;
        let operador = /[\+\-\*\/\^]/;
        let n = expresion.length;
        for(let i = 0; i < n; i++){
            let caracter = expresion[i];
            
            if(caracter === '('){
                this.pila.push(caracter);
            }
            if (caracter === ')'){
                 this.cima = this.pila.pop();
                while(this.cima !== '('){
                    this.expresionPostfija[this.j] = this.cima;
                    this.j++;
                    this.cima = this.pila.pop();
                }
            }
            if (caracter.match(operador)){
                 this.cima = this.pila.pop();
                while (caracter <= this.cima){
                    this.expresionPostfija[this.j] = this.cima;
                    this.j++;
                    this.cima = this.pila.pop();
                }
                if( this.cima !=='$'){
                    this.pila.push(this.cima);
                }
                this.pila.push(caracter);
            }
           

            if (caracter.match(letras)){
                this.expresionPostfija[this.j] = caracter;
                this.j++;
            }
        }   
        while(this.pila.length > 0){
            this.expresionPostfija[this.j] = this.pila.pop();
            this.j++;
        }
        console.log(this.expresionPostfija);
    }
}