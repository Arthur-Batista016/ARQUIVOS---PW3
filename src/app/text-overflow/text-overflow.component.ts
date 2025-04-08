import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = "O titulo";
  @Input() texto = "O texto longo que sera cortado pela folha de estilo"
  @Input() clip : boolean = true
}
