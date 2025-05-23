import { TextOverflowComponent } from './text-overflow/text-overflow.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiscoitoComponent } from "./biscoito/biscoito.component";
import { FrasesComponent } from "./frases/frases.component";
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, BiscoitoComponent, FrasesComponent, AleatorioComponent, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-input-output';

  resultado: string = "";

  processar(valor:string) {
    this.resultado = valor;
  }


}
