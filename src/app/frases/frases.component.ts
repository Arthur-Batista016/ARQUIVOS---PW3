import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  frases_aleatorias = ['O homem é a medidade de todas as coisas',
    'A beleza das coisas existe no espirito de quem contempla',
    'Grandes atos são feitos de pequenas altitudes',
    'Não importa o quão devagar você vá, desde que não pare',
    'Não se pode pisar duas vezes no mesmo rio',
    'A qualidade de sua vida depende da qualidade de seus pensamentos',
    'Não basta conquistar a sabedoria, é preciso usa-la',
    'Aquilo que se faz por amor, esta sempre acima do bem e do mal',
    'Sabio é aquele que conhece os limites de sua propria ignorancia',
    'Onde há uma vontade forte, não pode haver grandes dificuldades'];

    @Input() visible:boolean = false

    randomizar(){
      let aleatoria = Math.floor(Math.random() * 10);
      return this.frases_aleatorias[aleatoria]
    }
}
