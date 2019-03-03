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
    this.miUsuario = {
        nombre: 'Edward',
        apellido: 'Baron',
        pais: 'Colombia',
        ciudad: 'El Rosal',
        direccion: 'Calle 12 # 2 - 40 - 42',
        universidad: 'Politecnico Grancolombiano',
        titulo: 'Estudiante',
        correo: 'edbarongutierre@poligran.edu.co',
        celular: '3202049072',
        telefono: '123456789'
    };
   }

  ngOnInit() {
  }

}
