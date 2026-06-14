import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { path: '/', label: 'Início' },
    { path: '/caracterizacao', label: 'Caracterização' },
    { path: '/biodiversidade', label: 'Biodiversidade' },
    { path: '/impactos', label: 'Impactos' },
    { path: '/quiz', label: 'Quiz' },
  ];
}
