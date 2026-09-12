import type { CityDestination } from '../../../types/destinationPage';

export const createDestinationAliases = (
  baseData: Record<string, CityDestination>
): Record<string, CityDestination> => {
  const aliases: Record<string, CityDestination> = {};

  if (baseData.casablanca) {
    aliases.agadir = {
      ...baseData.casablanca,
      id: 'dest-agadir',
      slug: 'agadir',
      name: 'Agadir',
      heroBadge: 'Perle du Souss & Baie Dorée',
      heroDescription:
        'Plages ensoleillées 300 jours par an, marina animée et douceur de vivre le long de l’Atlantique.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
      quickInfo: {
        climate: '300 jours de soleil par an',
        mustSee: 'Kasbah Agadir Oufella, Marina, Promenade de la plage, Souk El Had',
        location: 'Sur la côte Atlantique sud'
      }
    };
  }

  if (baseData.fes) {
    aliases.meknes = {
      ...baseData.fes,
      id: 'dest-meknes',
      slug: 'meknes',
      name: 'Meknès',
      heroBadge: 'Cité Impériale & Trésor Ismaélien',
      heroDescription:
        'Portes monumentales impériales, écuries royales historiques et splendeur d’une capitale millénaire.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=85',
      quickInfo: {
        climate: 'Climat méditerranéen tempéré',
        mustSee: 'Bab Mansour, Bassin de l’Agdal, Mausolée Moulay Ismaïl, Volubilis',
        location: 'Région Fès-Meknès'
      }
    };
  }

  if (baseData.marrakech) {
    aliases.ouarzazate = {
      ...baseData.marrakech,
      id: 'dest-ouarzazate',
      slug: 'ouarzazate',
      name: 'Ouarzazate',
      heroBadge: 'Porte du Désert & Cité du Cinéma',
      heroDescription:
        'Kasbahs magistrales en terre cuite, oasis secrètes de palmiers et studios de cinéma légendaires.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
      quickInfo: {
        climate: 'Climat pré-saharien ensoleillé',
        mustSee: 'Kasbah de Taourirt, Ksar d’Aït-ben-Haddou, Studios Atlas, Oasis de Fint',
        location: 'Aux portes du Grand Sud marocain'
      }
    };
  }

  if (baseData.tanger) {
    aliases.essaouira = {
      ...baseData.tanger,
      id: 'dest-essaouira',
      slug: 'essaouira',
      name: 'Essaouira',
      heroBadge: 'Cité des Alizés & Mogador',
      heroDescription:
        'Remparts face à l’Atlantique, médina d’artistes et mélodies enivrantes du festival Gnaoua.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1920&q=85'
    };
  }

  return aliases;
};
