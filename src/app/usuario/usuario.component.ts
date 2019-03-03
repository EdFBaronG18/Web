import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';


@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  titulo = "Informacion personal";

  miUsuario : Usuario;
  
  constructor() {

    this.miUsuario = new Usuario;
    this.miUsuario = {
        nombre: 'Edward',
        apellido: 'Baron',
        pais: 'Colombia',
        ciudad: 'El Rosal',
        direccion: 'Calle 12 # 2 - 40 - 42',
        empresa: 'Politecnico Grancolombiano',
        cargo: 'Estudiante',
        correo: 'edbarongutierre@poligran.edu.co',
        celular: '3202049072',
        telefono: '888-888-888'
    };
   }

  ngOnInit() {
  }

}
