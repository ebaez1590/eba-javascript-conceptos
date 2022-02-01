import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id: 1,
      nombre: 'ebaez',
      color: '#00BCFF',
      link: 'https://www.twitch.tv/',
      linkImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_U8nUQ2OMicRmwXVdStoGFaJu4Kxua8G1g&usqp=CAU'
    },
    {
      id: 2,
      nombre: 'jguerrero',
      color: '#007AFF',
      link: 'https://twitter.com/?lang=es',
      linkImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vUO2U5HrYGSdoOQFIFk7igAPRqsHzmo2hg&usqp=CAU'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner() {
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner
  }

}
