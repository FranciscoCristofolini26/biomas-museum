import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impactos.component.html',
  styleUrls: ['./impactos.component.scss']
})
export class ImpactosComponent {
  usos = [
    { icon: '🌾', title: 'Agricultura Extensiva', desc: 'O Cerrado brasileiro se tornou o maior celeiro do mundo — produz 50% da soja brasileira. No entanto, a monocultura destruiu mais de 50% da cobertura original do bioma.' },
    { icon: '🐄', title: 'Pecuária', desc: 'Criação de gado extensiva é responsável por grande parte do desmatamento. As pastagens artificiais substituem a vegetação nativa e compactam o solo.' },
    { icon: '🔥', title: 'Queimadas Ilegais', desc: 'Além das queimadas naturais (ecologicamente necessárias), queimadas ilegais para abertura de áreas destroem a fauna, contribuem para mudanças climáticas e causam crises respiratórias.' },
    { icon: '💧', title: 'Exploração Hídrica', desc: 'As nascentes do Cerrado abastecem 8 das 12 grandes bacias hidrográficas do Brasil. O desmatamento ameaça a recarga dos aquíferos e o abastecimento de água de milhões de pessoas.' },
    { icon: '⛏️', title: 'Mineração', desc: 'Extração de ouro, ferro e outros minerais em áreas de savana africana e Cerrado. Contaminação por mercúrio e destruição de vegetação ribeirinha são impactos frequentes.' },
    { icon: '🏙️', title: 'Expansão Urbana', desc: 'Cidades como Brasília e Goiânia cresceram sobre o Cerrado. Na África, o crescimento das populações pressiona a savana com agricultura de subsistência e coleta de lenha.' },
  ];

  impactos = [
    { title: 'Desmatamento do Cerrado', stat: '50%', statLabel: 'da cobertura original já destruída', desc: 'O Cerrado é o bioma mais ameaçado do Brasil. Perdeu mais de 100 milhões de hectares — mais que qualquer outro bioma nacional. Apesar disso, recebe menos atenção e proteção que a Amazônia.' },
    { title: 'Perda de Biodiversidade', stat: '10.000+', statLabel: 'espécies endêmicas em risco', desc: 'O Cerrado é considerado o savana mais biodiverso do mundo — um "hotspot" global de biodiversidade. Muitas espécies ainda não foram sequer descritas pela ciência antes de desaparecer.' },
    { title: 'Crise Hídrica', stat: '8 de 12', statLabel: 'bacias hidrográficas dependem do Cerrado', desc: 'O Cerrado é chamado de "caixa d\'água do Brasil". O desmatamento reduz a infiltração da água no solo, secando nascentes que abastecem o Rio São Francisco, o Tocantins e outros rios essenciais.' },
    { title: 'Savana Africana — Pressão', stat: '30%', statLabel: 'da savana africana já foi convertida', desc: 'O crescimento populacional na África Sub-Saariana pressiona a savana com agricultura, caça furtiva e desmatamento. Espécies como elefante, leão e guepardo têm populações em queda acentuada.' },
  ];

  conservacao = [
    { icon: '🛡️', title: 'Unidades de Conservação', desc: 'O Cerrado conta com parques como a Chapada dos Veadeiros e a Chapada Diamantina. A meta é ampliar a área protegida para pelo menos 17% do bioma.' },
    { icon: '🌱', title: 'Restauração Ecológica', desc: 'Programas de restauração de matas ciliares e veredas ao longo de rios do Cerrado. Sementes nativas coletadas por comunidades locais.' },
    { icon: '📡', title: 'Monitoramento por Satélite', desc: 'O INPE monitora o desmatamento do Cerrado via satélite. O sistema TerraClass mapeia uso e cobertura do solo para embasar políticas públicas.' },
    { icon: '👩‍🌾', title: 'Povos do Cerrado', desc: 'Comunidades quilombolas, indígenas e geraizeiras são guardiãs do Cerrado. Seus territórios têm taxas de desmatamento muito inferiores às áreas privadas.' },
    { icon: '🌍', title: 'Parques Nacionais Africanos', desc: 'Serengeti, Kruger, Masai Mara: parques protegem enormes extensões de savana e sustentam o turismo de vida selvagem, alternativa econômica à agricultura.' },
    { icon: '📜', title: 'Legislação e Políticas', desc: 'O Código Florestal brasileiro exige 20% de reserva legal no Cerrado. Acordos internacionais de biodiversidade estabelecem metas de proteção para savanas tropicais.' },
  ];
}
