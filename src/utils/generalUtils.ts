import { CharacterIndex } from "../contexts/characterContext/CharacterContext";

export function lockScroll(): void {
  document.body.style.overflow = 'hidden';
}

export function unlockScroll(): void {
  document.body.style.overflow = 'auto';
}

export function getCharacterFromUrl(): CharacterIndex | null {
  const params = new URLSearchParams(window.location.search);
  const characterParam = params.get('character');

  if (characterParam === 'Runtime') {
    return CharacterIndex.Runtime;
  } else if (characterParam === 'Spyderbot') {
    return CharacterIndex.Spyderbot;
  }

  return null;
}

export function setCharacterInUrl(characterIndex: CharacterIndex): void {
  const params = new URLSearchParams(window.location.search);
  let characterParam = '';

  if (characterIndex === CharacterIndex.Runtime) {
    characterParam = 'Runtime';
  } else if (characterIndex === CharacterIndex.Spyderbot) {
    characterParam = 'Spyderbot';
  }

  params.set('character', characterParam);
  const newUrl =
    window.location.pathname + '?' + params.toString() + window.location.hash;
  window.history.replaceState({}, '', newUrl);
}