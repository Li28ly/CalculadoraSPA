import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CardExampleComponent } from "./card-example/card-example.component";

const rutas:Routes = [
    
    //{ path: 'calculadora', component: CalculatorComponent}

   //{ path: '', component: CardExampleComponent},
   { path: '', component: CalculatorComponent}
  ]
  
@NgModule({
    declarations: [
        CardExampleComponent,
        CalculatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }