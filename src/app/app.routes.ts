import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CaracterizacaoComponent } from './pages/caracterizacao/caracterizacao.component';
import { BiodiversidadeComponent } from './pages/biodiversidade/biodiversidade.component';
import { ImpactosComponent } from './pages/impactos/impactos.component';
import { KahootComponent } from './pages/kahoot/kahoot.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'caracterizacao', component: CaracterizacaoComponent },
  { path: 'biodiversidade', component: BiodiversidadeComponent },
  { path: 'impactos', component: ImpactosComponent },
  { path: 'quiz', component: KahootComponent },
  { path: '**', redirectTo: '' }
];
