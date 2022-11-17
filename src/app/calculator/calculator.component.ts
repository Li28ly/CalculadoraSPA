import { Component, OnInit } from '@angular/core';
import { CardExampleComponent } from '../card-example/card-example.component';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})



export class CalculatorComponent implements OnInit {

  titulo = 'Calculadora';
  screen:string="";

  a:any;
  b:any; //operaciones
  c:any;
  d:any;
  e:" ";
  

  constructor() {  
  }

  onNumberPress(number:string):void{
      let temp = parseFloat(this.screen + number);
      this.screen = temp.toString();
    }


  ngOnInit(): void {
   
  }

  calcular(value:string){
    if((this.b=="+") || (this.b=="-") || (this.b=="*" || (this.b=="/"))){
      this.d = this.d=== undefined ? value : this.d + value;
      this.screen = this.screen+value;
      this.c =this.d;

      
    }else{
      this.screen = this.screen + value;
      this.a = this.screen;

      console.log(this.a)
    }
  }

  operacion(value:string){
    this.screen = this.screen + value;
    this.b= value;

  }

  limpiar(){
    this.screen ="";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
  }

  resultado(){
    if(this.b=='+'){
      
      this.screen = (parseInt(this.screen) + parseInt(this.c)).toString();

      console.log(this.a, this.b, this.c,'=', this.screen)
    }
    if(this.b=='-'){
      
      this.screen = (parseInt(this.screen) - parseInt(this.c)).toString();

      console.log(this.a, this.b, this.c,'=', this.screen)
    }
    if(this.b=='*'){
      
      this.screen = (parseInt(this.screen) * parseInt(this.c)).toString();

      console.log(this.a, this.b, this.c,'=', this.screen)
    }
    if(this.b=='/'){
      
      this.screen = (parseInt(this.screen) / parseInt(this.c)).toString();

      console.log(this.a, this.b, this.c,'=', this.screen)
    }

  }
}