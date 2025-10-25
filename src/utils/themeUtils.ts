import { indexToColor, type CharacterIndex } from '../db/CharacterType';

export function setAccentColor(color: string) {
  const r: any = document.querySelector(':root');
  r.style.setProperty('--accent-color', color);
}

export function setBackgroundColor(color: string) {
  const r: any = document.querySelector(':root');
  r.style.setProperty('--background-color', color);
}

export function setCharacterTheme(character: CharacterIndex) {
  setAccentColor(indexToColor[character]);
}
