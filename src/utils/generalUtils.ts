import { CharacterIndex, indexToCharacterName } from '../db/CharacterType';

export function lockScroll(): void {
  document.body.style.overflow = 'hidden';
}

export function unlockScroll(): void {
  document.body.style.overflow = 'auto';
}

export function getCharacterFromUrl(): CharacterIndex | null {
  const params = new URLSearchParams(window.location.search);
  const characterParam = params.get('character');

  switch (characterParam) {
    case indexToCharacterName[CharacterIndex.Runtime]:
      return CharacterIndex.Runtime;
    case indexToCharacterName[CharacterIndex.Spyderbot]:
      return CharacterIndex.Spyderbot;
    case indexToCharacterName[CharacterIndex.Nightshade]:
      return CharacterIndex.Nightshade;
    default:
      return null;
  }
}

export function setCharacterInUrl(characterIndex: CharacterIndex): void {
  const params = new URLSearchParams(window.location.search);
  params.set('character', indexToCharacterName[characterIndex]);
  const newUrl =
    window.location.pathname + '?' + params.toString() + window.location.hash;
  window.history.replaceState({}, '', newUrl);
}

export function setPageTitle(character?: CharacterIndex): void {
  document.title =
    character !== undefined
      ? indexToCharacterName[character] + ' | League of Stars'
      : 'League of Stars';
}
