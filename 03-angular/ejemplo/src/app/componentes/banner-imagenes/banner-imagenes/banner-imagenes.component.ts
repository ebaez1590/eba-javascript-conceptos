import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {

  nombre = 'Esteban';
  apellido = 'Baez';
  mascotas = {
    akamaru : {
      edad: 3
    }
  }
  fecha = new Date();
  sueldo = 1500;
  @Input()
  url = 'https://www.google.com';

  @Input()
  urlImagen = 'https://gcm14.webnode.es/_files/system_preview_detail_200000001-c041dc233b-public/WarCry%20-%20WarCry.jpg';

  @Input()
  color = 'yellow';

  constructor() { }

  ngOnInit(): void {
  }

  ejecutarEventoClick(){
    console.log({mensaje:'click'});
  }

  ejecutarEventoBlur(){
    console.log({mensaje:'blur'});
  }

}
