import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  facts = [
    { icon: '🌍', value: '20%', label: 'da superfície terrestre coberta por savanas' },
    { icon: '🦁', value: '45%+', label: 'dos mamíferos africanos vivem na savana' },
    { icon: '🌧️', value: '500–1500mm', label: 'chuva anual concentrada em 1 estação' },
    { icon: '🌡️', value: '20–30°C', label: 'temperatura média anual' },
  ];

  sections = [
    { icon: '🗺️', title: 'Caracterização', desc: 'Clima sazonal, solo, temperatura e aspectos geográficos da savana.', path: '/caracterizacao', color: '#8b5e2a' },
    { icon: '🦒', title: 'Biodiversidade', desc: 'Flora, fauna, adaptações únicas e espécies em destaque do bioma.', path: '/biodiversidade', color: '#5c3a1e' },
    { icon: '🏭', title: 'Impactos Humanos', desc: 'Uso econômico, queimadas, consequências e estratégias de conservação.', path: '/impactos', color: '#2c1a00' },
    { icon: '🎮', title: 'Quiz Interativo', desc: 'Teste seus conhecimentos com 10 questões sobre o bioma!', path: '/quiz', color: '#c9922a' },
  ];
}
