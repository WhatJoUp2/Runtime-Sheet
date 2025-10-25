import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import type { Character } from '../../db/CharacterType';
import { Runtime, Spyderbot } from '../../db/';
import { getCharacterFromUrl, setCharacterInUrl } from '../../utils/generalUtils';

interface CharacterContextType {
  characters: Character[];
  selectedCharacter: Character;
  selectedCharacterIndex: CharacterIndex;
  setSelectedCharacter: (index: CharacterIndex) => void;
}

const characters = [Runtime, Spyderbot];

export enum CharacterIndex {
  Runtime,
  Spyderbot,
}

export const CharacterContext = createContext<CharacterContextType>({
  characters,
  selectedCharacter: Runtime,
  selectedCharacterIndex: CharacterIndex.Runtime,
  setSelectedCharacter: () => {},
});

export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(
    getCharacterFromUrl() || CharacterIndex.Runtime,
  );
  const selectedCharacter = characters[selectedCharacterIndex];

  const setSelectedCharacter = (index: CharacterIndex) => {
    setSelectedCharacterIndex(index);
    setCharacterInUrl(index);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectedCharacter,
        selectedCharacterIndex,
        setSelectedCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
