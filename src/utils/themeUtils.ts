export function setAccentColor(color: string) {
  const r: any = document.querySelector(':root');
  r.style.setProperty('--accent-color', color);
}

export function setBackgroundColor(color: string) {
  const r: any = document.querySelector(':root');
  r.style.setProperty('--background-color', color);
}