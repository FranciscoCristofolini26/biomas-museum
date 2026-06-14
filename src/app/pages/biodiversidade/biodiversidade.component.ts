import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Species {
  type: 'fauna' | 'flora';
  name: string;
  scientific: string;
  emoji: string;
  image: string;
  native: boolean;
  endemic: boolean;
  adaptation: string;
  ecology: string;
}

@Component({
  selector: 'app-biodiversidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biodiversidade.component.html',
  styleUrls: ['./biodiversidade.component.scss']
})
export class BiodiversidadeComponent {
  activeFilter = signal<'all' | 'fauna' | 'flora'>('all');
  activeSpecies = signal<Species | null>(null);

  species: Species[] = [
    {
      type: 'fauna', name: 'Leão-africano', scientific: 'Panthera leo',
      emoji: '🦁', native: true, endemic: false,
      image: '',
      adaptation: 'Pelagem dourada mimetiza a cor das gramíneas secas. Vida social em grupos (alcateias) permite caçar presas muito maiores que um indivíduo sozinho.',
      ecology: 'Predador de topo que regula populações de grandes herbívoros (zebras, gnus, antílopes), mantendo o equilíbrio da savana africana.'
    },
    {
      type: 'fauna', name: 'Girafa', scientific: 'Giraffa camelopardalis',
      emoji: '🦒', native: true, endemic: false,
      image: '',
      adaptation: 'Pescoço de até 1,8m para alcançar folhas de acácias inacessíveis a outros herbívoros. Língua de 45cm com melanina para proteção contra o sol.',
      ecology: 'Dispersora de sementes de acácias. Ao podar os galhos altos, favorece a estrutura das árvores e cria nichos para outras espécies.'
    },
    {
      type: 'fauna', name: 'Elefante-africano', scientific: 'Loxodonta africana',
      emoji: '🐘', native: true, endemic: false,
      image: '',
      adaptation: 'Grandes orelhas como radiadores para dissipação de calor. Tromba multifuncional com 40.000 músculos para manipular alimentos e água.',
      ecology: 'Engenheiro do ecossistema — derruba árvores criando clareiras, cava poços na seca que outros animais usam, e dispersa sementes a longas distâncias.'
    },
    {
      type: 'fauna', name: 'Lobo-guará', scientific: 'Chrysocyon brachyurus',
      emoji: '🦊', native: true, endemic: true,
      image: '',
      adaptation: 'Pernas longas para ver sobre as gramíneas altas do Cerrado. Pelagem vermelha como camuflagem entre as plantas secas da savana brasileira.',
      ecology: 'Onívoro dispersor de sementes — especialmente da lobeira (Solanum lycocarpum), planta endêmica do Cerrado. Espécie-guarda-chuva do Cerrado.'
    },
    {
      type: 'fauna', name: 'Gnu-azul', scientific: 'Connochaetes taurinus',
      emoji: '🐃', native: true, endemic: false,
      image: '',
      adaptation: 'Migração anual de 1.800 km seguindo as chuvas. Filhotes ficam em pé em minutos após o nascimento, necessário para escapar de predadores.',
      ecology: 'A maior migração terrestre do mundo (1,5 milhão de animais). Fertiliza o solo com fezes e mantém a vegetação rasteira com o pastejo intensivo.'
    },
    {
      type: 'flora', name: 'Acácia', scientific: 'Vachellia tortilis',
      emoji: '🌳', native: true, endemic: false,
      image: '',
      adaptation: 'Copa em guarda-sol maximiza captação de luz e cria sombra para a savana ao redor. Espinhos e compostos químicos (taninos) como defesa contra herbívoros.',
      ecology: 'Árvore icônica da savana africana. Fixa nitrogênio no solo via simbiose com bactérias. Fornece alimento (vagens, folhas) para girafas, elefantes e antílopes.'
    },
    {
      type: 'flora', name: 'Baobá', scientific: 'Adansonia digitata',
      emoji: '🌴', native: true, endemic: false,
      image: '',
      adaptation: 'Tronco gigante (até 11m de diâmetro) que armazena até 120.000 litros de água para a estação seca. Casca resistente ao fogo que se regenera após queimadas.',
      ecology: 'Conhecido como "árvore da vida" — oferece frutos, folhas, água e abrigo para dezenas de espécies. Pode viver mais de 3.000 anos e serve como indicador ambiental.'
    },
    {
      type: 'flora', name: 'Pequizeiro', scientific: 'Caryocar brasiliense',
      emoji: '🌰', native: true, endemic: true,
      image: '',
      adaptation: 'Raízes profundas que acessam o lençol freático mesmo na seca. Sistema de rebrota subterrânea (lignotuber) que permite recuperação rápida após queimadas.',
      ecology: 'Espécie-símbolo do Cerrado. Seus frutos (pequis) são alimento essencial para aves, macacos e humanos. A extração sustentável é fonte de renda para comunidades.'
    },
    {
      type: 'flora', name: 'Capim-elefante', scientific: 'Pennisetum purpureum',
      emoji: '🌾', native: true, endemic: false,
      image: '',
      adaptation: 'Crescimento rápido após as chuvas (até 4cm/dia). Raízes profundas e extensas que estabilizam o solo e sobrevivem à queimada para rebrotar em dias.',
      ecology: 'Base da cadeia alimentar da savana. Sustenta grandes populações de herbívoros. Responsável pela continuidade das queimadas que moldam a estrutura do bioma.'
    },
    {
      type: 'flora', name: 'Buriti', scientific: 'Mauritia flexuosa',
      emoji: '🌴', native: true, endemic: false,
      image: '',
      adaptation: 'Raízes adaptadas a solos alagados (veredas). Tronco resistente à seca quando adulto. Produz frutos o ano todo, garantindo alimento contínuo à fauna.',
      ecology: 'A "Árvore da Vida" do Cerrado. Indica presença de lençol freático superficial. Essencial para a cultura e subsistência dos povos do cerrado brasileiro.'
    },
  ];

  get filtered(): Species[] {
    const f = this.activeFilter();
    return f === 'all' ? this.species : this.species.filter(s => s.type === f);
  }

  setFilter(f: 'all' | 'fauna' | 'flora') { this.activeFilter.set(f); this.activeSpecies.set(null); }
  openSpecies(s: Species) { this.activeSpecies.set(s); }
  closeModal() { this.activeSpecies.set(null); }
}
