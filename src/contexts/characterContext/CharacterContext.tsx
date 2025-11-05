import {
  createContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { type Character, CharacterIndex } from '../../db/CharacterType';
import { Astrid, Nightshade, Runtime, Spyderbot } from '../../db/';
import {
  getCharacterFromUrl,
  setCharacterInUrl,
  setPageTitle,
} from '../../utils/generalUtils';
import { setCharacterTheme } from '../../utils/themeUtils';

interface CharacterContextType {
  characters: Character[];
  selectedCharacter: Character;
  selectedCharacterIndex: CharacterIndex;
  setSelectedCharacter: (index: CharacterIndex) => void;
}

const characters = [Runtime, Spyderbot, Nightshade, Astrid];

export const CharacterContext = createContext<CharacterContextType>({
  characters,
  selectedCharacter: Runtime,
  selectedCharacterIndex: CharacterIndex.Runtime,
  setSelectedCharacter: () => {},
});

export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedCharacterIndex, setSelectedCharacter] = useState(
    getCharacterFromUrl() || CharacterIndex.Runtime,
  );
  const selectedCharacter = characters[selectedCharacterIndex];

  useEffect(() => {
    setCharacterInUrl(selectedCharacterIndex);
    setPageTitle(selectedCharacterIndex);
    setCharacterTheme(selectedCharacterIndex);
  }, [selectedCharacterIndex]);

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
