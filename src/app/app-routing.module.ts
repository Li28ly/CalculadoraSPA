import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const rutas:Routes=[
  //{path: 'calculadora', loadChildren: ()=> import ('./app-view.module').then(m=> m.AppViewModule)}
  //{path: 'tarjeta', loadChildren: ()=> import ('./app-view.module').then(m=> m.AppViewModule)}
  {path: 'calculadora', loadChildren: ()=> import ('./app-view.module').then(m=> m.AppViewModule)}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ]
})
export class AppRoutingModule { }
