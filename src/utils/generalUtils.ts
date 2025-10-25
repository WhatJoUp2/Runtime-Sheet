import { CharacterIndex } from "../contexts/characterContext/CharacterContext";

export const indexToCharacterName = {
  [CharacterIndex.Runtime]: "Runtime",
  [CharacterIndex.Spyderbot]: "Spyderbot",
};

export function lockScroll(): void {
  document.body.style.overflow = 'hidden';
}

export function unlockScroll(): void {
  document.body.style.overflow = 'auto';
}

export function getCharacterFromUrl(): CharacterIndex | null {
  const params = new URLSearchParams(window.location.search);
  const characterParam = params.get('character');

  if (characterParam === indexToCharacterName[CharacterIndex.Runtime]) {
    return CharacterIndex.Runtime;
  } else if (characterParam === indexToCharacterName[CharacterIndex.Spyderbot]) {
    return CharacterIndex.Spyderbot;
  }

  return null;
}

export function setCharacterInUrl(characterIndex: CharacterIndex): void {
  const params = new URLSearchParams(window.location.search);
  let characterParam = '';

  if (characterIndex === CharacterIndex.Runtime) {
    characterParam = indexToCharacterName[CharacterIndex.Runtime];
  } else if (characterIndex === CharacterIndex.Spyderbot) {
    characterParam = indexToCharacterName[CharacterIndex.Spyderbot];
  }

  params.set('character', characterParam);
  const newUrl =
    window.location.pathname + '?' + params.toString() + window.location.hash;
  window.history.replaceState({}, '', newUrl);
}

export function setPageTitle(character?: CharacterIndex): void {
  const titles = {
    [CharacterIndex.Runtime]: indexToCharacterName[CharacterIndex.Runtime],
    [CharacterIndex.Spyderbot]: indexToCharacterName[CharacterIndex.Spyderbot],
  };

  document.title = character !== undefined ? titles[character] + " | League of Stars" : "League of Stars";
}
