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
    id: '1', name: 'Terminal 1', tag: 'Rebuilt · reopening',
    status: 'Rebuilt in 2025–2026 and coming back into use. Some Latin American airlines are being moved here from Terminal 2. If your boarding pass says T1, that\'s why.',
    about: 'The original terminal, closed for years and rebuilt from scratch with 7 gates. Most US and Canadian travelers will not use it.',
    airlines: ['Charter flights', 'Some Latin American airlines (moving from T2, check your boarding pass)'],
    tips: ['If you land here and connect or leave from another terminal, take the free inter-terminal shuttle.'],
  },
  {
    id: '2', name: 'Terminal 2', tag: 'Mexico & Latin America',
    about: 'The oldest terminal still in use. Domestic flights within Mexico plus Latin American and some European leisure airlines. It has separate domestic and international arrival areas.',
    airlines: ['Viva Aerobus', 'Volaris', 'Magnicharters', 'Copa Airlines', 'Avianca', 'LATAM', 'Aerolíneas Argentinas', 'Arajet', 'GOL', 'Sky Airline Peru', 'Wingo', 'TUI', 'Neos'],
    tips: ['Flying within Mexico on Viva or Volaris? This is almost always your terminal.', 'Some Latin American airlines are moving to the rebuilt Terminal 1. Check your boarding pass.'],
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
