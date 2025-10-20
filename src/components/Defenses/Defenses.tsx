import type { FC } from 'react';
import db from '../../db.json';
import { Attributes } from '../Attributes/Attributes';

export const Defenses: FC = () => {
  const defensesList = [
    { title: 'Dodge', value: db.defenses.dodge },
    { title: 'Fortitude', value: db.defenses.fortitude },
    { title: 'Parry', value: db.defenses.parry },
    { title: 'Toughness', value: db.defenses.toughness },
    { title: 'Will', value: db.defenses.will },
    { title: 'Initiative', value: db.defenses.initiative },
  ];

  return <Attributes title="Defenses & Init" list={defensesList} />;
};
