import { Component, Input } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { TextOverflowComponent } from "../text-overflow/text-overflow.component";
import { BiscoitoImgComponent } from "../biscoito-img/biscoito-img.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-biscoito',
  imports: [BotaoComponent, TextOverflowComponent, BiscoitoImgComponent, FrasesComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
 ehQuebrado : boolean = false;

 quebrar(){
  this.ehQuebrado = true;

 }

 reiniciar(){
  this.ehQuebrado = false;
 }

}
