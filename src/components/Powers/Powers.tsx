import type { FC } from 'react';
import db from '../../db.json';
import { Effects } from '../Effects/Effects';

interface Power {
  name: string;
  effect: string;
  rank: number;
  link: string;
  flaws?: string;
  flats?: string;
  description?: string;
  extras?: string;
}

export const Powers: FC = () => {
  const getDescription = (power: Power): string => {
    let ret = '';
    ret += 'Type: ' + power.effect;
    ret += power.extras ? '\nExtas: ' + power.extras : '';
    ret += power.flaws ? '\nFlaws: ' + power.flaws : '';
    ret += power.flats ? '\nFlats: ' + power.flats : '';
    ret += power.description ? '\nDescription: ' + power.description : '';

    return ret;
  };

  const powersList = db.powers.map((power) => ({
    title: power.name,
    rank: power.rank,
    description: getDescription(power),
  }));

  return <Effects title="Powers" list={powersList} />;
};
