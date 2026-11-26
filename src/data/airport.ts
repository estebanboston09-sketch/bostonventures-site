// Cancún airport terminals. Airlines checked Nov 2026 from: Wikipedia (Cancún International Airport),
// airport.online terminal list (compiled Oct 2026), The Better Vacation 2026 guide, JetBlue's own CUN page,
// The Cancún Sun and El CEO (Terminal 1 reopening). Airlines move terminals: the boarding pass always wins.
// Photos: put Esteban's/airport-approved photos in public/images/airport/t1.jpg … t4.jpg and set `photo` below.
export type Terminal = {
  id: '1' | '2' | '3' | '4';
  name: string;
  tag: string;
  status?: string;
  about: string;
  airlines: string[];
  tips: string[];
  photo?: { src: string; credit: string; creditUrl?: string };
};

export const TERMINALS: Terminal[] = [
  {
    id: '1', name: 'Terminal 1', tag: 'Under construction',
    status: 'Still under construction and not used by passenger flights (confirmed with the airport, Nov 2026). All flights use Terminals 2, 3 and 4 for now.',
    about: 'The original terminal, closed for years and now being rebuilt and expanded. When it reopens, some airlines may move here. We\'ll update this page when that happens.',
    airlines: ['No passenger flights yet'],
    tips: ['Ignore older guides or apps that send you to Terminal 1.'],
  },
  {
    id: '2', name: 'Terminal 2', tag: 'Mexico & Latin America',
    about: 'The oldest terminal still in use. Domestic flights within Mexico plus Latin American and some European leisure airlines. It has separate domestic and international arrival areas.',
    airlines: ['Viva Aerobus', 'Volaris', 'Magnicharters', 'Copa Airlines', 'Avianca', 'LATAM', 'Aerolíneas Argentinas', 'Arajet', 'GOL', 'Sky Airline Peru', 'Wingo', 'TUI', 'Neos'],
    tips: ['Flying within Mexico on Viva or Volaris? This is almost always your terminal.'],
    photo: { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Terminal_2_Cancun.jpg?width=1200', credit: 'Wikimedia Commons', creditUrl: 'https://commons.wikimedia.org/wiki/File:Terminal_2_Cancun.jpg' },
  },
  {
    id: '3', name: 'Terminal 3', tag: 'Big US airlines & Canada',
    about: 'The main terminal for the big US airlines, Air Canada and British Airways. It has immigration e-gates, restaurants, bars, duty-free and lounges.',
    airlines: ['American Airlines', 'Delta', 'United', 'Air Canada', 'Air Canada Rouge', 'British Airways', 'Avelo', 'Iberojet', 'World2fly', 'Air Caraïbes', 'Wamos Air'],
    tips: ['Most travelers from big US cities land here.', 'Spirit used Terminal 3 but stopped flying in 2026. Older guides still list it.'],
    photo: { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Terminal_3_Cancun.jpg?width=1200', credit: 'Wikimedia Commons', creditUrl: 'https://commons.wikimedia.org/wiki/File:Terminal_3_Cancun.jpg' },
  },
  {
    id: '4', name: 'Terminal 4', tag: 'Newest · low-cost US, Canada, Europe',
    about: 'The newest terminal (opened 2017 and expanded for 2026). Home to Aeroméxico, the US low-cost airlines, Canadian leisure airlines and most European airlines. E-gates, a food court, duty-free and lounges.',
    airlines: ['Aeroméxico', 'Southwest', 'JetBlue', 'Frontier', 'Sun Country', 'WestJet (incl. former Sunwing)', 'Air Transat', 'Porter', 'Flair (seasonal)', 'Air France', 'KLM', 'Lufthansa', 'Condor', 'Discover', 'Edelweiss', 'Turkish Airlines', 'TAP Air Portugal', 'Virgin Atlantic', 'Aer Lingus', 'Air Europa'],
    tips: ['Flying Aeroméxico within Mexico? A few guides put those flights in Terminal 2, so check your boarding pass.'],
  },
];
