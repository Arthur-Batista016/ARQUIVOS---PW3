import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
///ARTHUR BATISTA E GRABRIEL WHANDERSON
@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {


  @Input() label:string = "";
  @Input() primary : boolean = true;
  @Output() clicked =  new EventEmitter();
  @Input() disable = false;


  clicou(){
    this.clicked.emit();

  }




}
