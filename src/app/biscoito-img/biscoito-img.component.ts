import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito-img',
  imports: [],
  templateUrl: './biscoito-img.component.html',
  styleUrl: './biscoito-img.component.css'
})
export class BiscoitoImgComponent {

  @Input() quebrado:boolean = false

  imgBiscoito: string = 'biscoito.png';
  imgBiscoitoQuebrado : string = 'biscoito-aberto.png';

}
