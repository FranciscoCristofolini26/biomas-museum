import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavanaImages } from '../../shared/images.constants';

@Component({
  selector: 'app-caracterizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracterizacao.component.html',
  styleUrls: ['./caracterizacao.component.scss']
})

export class CaracterizacaoComponent {
  readonly imgs = SavanaImages;
  
  climaItems = [
    { icon: '☀️', label: 'Tipo Climático', value: 'Tropical Sazonal (Aw/Cw)', detail: 'Duas estações bem definidas: uma chuvosa e outra seca. A sazonalidade é a principal característica do clima.' },
    { icon: '🌡️', label: 'Temperatura Média', value: '20°C – 30°C', detail: 'Temperaturas altas o ano todo, com maior variação diária do que anual. Noites podem ser frescas na estação seca.' },
    { icon: '🌧️', label: 'Precipitação Anual', value: '500 – 1500 mm', detail: 'Chuvas concentradas em 5-7 meses (estação chuvosa). Estação seca com menos de 60mm/mês pode durar 3-8 meses.' },
    { icon: '💨', label: 'Ventos', value: 'Ventos Alísios', detail: 'Ventos alísios transportam umidade oceânica. Na estação seca, ventos quentes e secos como o Harmattan africano.' },
    { icon: '🔥', label: 'Risco de Incêndios', value: 'Alto (estação seca)', detail: 'As queimadas naturais e humanas moldam a paisagem, favorecendo gramíneas resistentes ao fogo e árvores de casca grossa.' },
    { icon: '☁️', label: 'Insolação', value: 'Alta', detail: 'Alta incidência solar favorece o crescimento de gramíneas. Na estação chuvosa, formam-se nuvens de tempestade convectiva.' },
  ];

  soloItems = [
    { title: 'Latossolo e Argissolo', desc: 'Solos profundos, bem drenados e de baixa fertilidade natural. No Cerrado brasileiro, os solos são ácidos, com alto teor de alumínio — mas ricos em biodiversidade de fungos.' },
    { title: 'Adaptações ao Fogo', desc: 'O solo da savana é adaptado ao fogo. As queimadas reciclam nutrientes e impedem a colonização por espécies florestais, mantendo o caráter aberto do bioma.' },
    { title: 'Matéria Orgânica', desc: 'A grande biomassa de raízes das gramíneas enriquece o solo em profundidade. O sistema radicular pode ser 2-3x maior que a parte aérea das plantas.' },
    { title: 'Vulnerabilidade', desc: 'Após o desmatamento e cultivo intensivo, o solo da savana se compacta e acidifica rapidamente. O Cerrado perdeu 50% de sua cobertura original para a agricultura.' },
  ];

  locais = [
    { region: 'Cerrado', country: 'Brasil', area: '~2 milhões km²', flag: '🇧🇷' },
    { region: 'Savana Africana', country: 'África Subsaariana', area: '~13 milhões km²', flag: '🌍' },
    { region: 'Savana Australiana', country: 'Austrália', area: '~1,9 milhões km²', flag: '🇦🇺' },
    { region: 'Llanos', country: 'Venezuela/Colômbia', area: '~500 mil km²', flag: '🇻🇪' },
  ];

  estratos = [
    { name: 'Estrato Arbóreo', height: '5–20 m', desc: 'Árvores esparsas, tortuosas e com casca grossa. No Cerrado: pequizeiro, buriti, ipê. Na África: baobá, acácia, imbondeiro.' },
    { name: 'Estrato Arbustivo', height: '1–5 m', desc: 'Arbustos e subarbustos. Muitas espécies com órgãos subterrâneos gigantes (xilopódios) para sobreviver ao fogo e à seca.' },
    { name: 'Estrato Herbáceo', height: '0,5–2 m', desc: 'Dominado por gramíneas (capins). Biomassa contínua que sustenta grandes herbívoros. Cobre até 80% do solo.' },
    { name: 'Solo', height: '0 m', desc: 'Solo exposto durante a estação seca. Rica fauna de decompositores, formigas cortadeiras e cupins que estruturam o solo.' },
  ];
}
