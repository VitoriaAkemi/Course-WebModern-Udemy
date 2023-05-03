// Componente inicial
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nome do componente
  templateUrl: 'app.component.html' //componente html a ser usado
})
export class AppComponent {
  // variaveis que podem ser importadas para o html
  title = 'frontend'
  nome = 'Maria'
}
