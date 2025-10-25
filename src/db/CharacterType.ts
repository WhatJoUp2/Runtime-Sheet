export interface Character {
  details: {
    name: string;
    alternateIdentity: string;
    gender: string;
    age: string;
    height: string;
    weight: string;
  };
  abilities: {
    strength: number;
    stamina: number;
    agility: number;
    dexterity: number;
    fighting: number;
    intelect: number;
    awareness: number;
    presence: number;
  };
  defenses: {
    dodge: number;
    fortitude: number;
    parry: number;
    toughness: number;
    will: number;
    initiative: number;
  };
  skills: { [key: string]: number };
  advantages: {
    name: string;
    effect: string;
    rank?: number;
  }[];
  powers: {
    name: string;
    effect: string;
    description?: string;
    extras?: string;
    flaws?: string;
    flats?: string;
    rank: number;
    link?: string;
  }[];
}

export enum CharacterIndex {
  Runtime,
  Spyderbot,
  Nightshade,
}

export const indexToCharacterName = {
  [CharacterIndex.Runtime]: 'Runtime',
  [CharacterIndex.Spyderbot]: 'Spyderbot',
  [CharacterIndex.Nightshade]: 'Nightshade',
};

export const indexToColor = {
  [CharacterIndex.Runtime]: '#f00',
  [CharacterIndex.Spyderbot]: '#f00',
  [CharacterIndex.Nightshade]: '#80f',
};
