import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Pedro",
    apellido: "Rodriguez",
    correo: "",
  }

  constructor() { }


  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor forma", forma.value);
    console.log("Usuario", this.usuario);
  }

}
