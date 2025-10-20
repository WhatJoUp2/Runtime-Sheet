import type { FC } from 'react';
import db from '../../db.json';
import { Attributes } from '../Attributes/Attributes';

export const Abilities: FC = () => {
  const attrs = [
    { title: 'Strength', value: db.abilities.strength },
    { title: 'Stamina', value: db.abilities.stamina },
    { title: 'Agility', value: db.abilities.agility },
    { title: 'Dexterity', value: db.abilities.dexterity },
    { title: 'Fighting', value: db.abilities.fighting },
    { title: 'Intellect', value: db.abilities.intelect },
    { title: 'Awareness', value: db.abilities.awareness },
    { title: 'Presence', value: db.abilities.presence },
  ];

  return <Attributes title="Ability Scores" list={attrs} />;
};
