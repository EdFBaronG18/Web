import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  tituloForm = "Informacion personal";

  miUsuario : Usuario;
  
  constructor() {

    this.miUsuario = new Usuario;
    
   }

  ngOnInit() {
  }

}
