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
    ret += 'TYPE: ' + power.effect;
    ret += power.extras ? '\nEXTRAS: ' + power.extras : '';
    ret += power.flaws ? '\nFLAWS: ' + power.flaws : '';
    ret += power.flats ? '\nFLATS: ' + power.flats : '';
    ret += power.description ? '\nDESCRIPTION: ' + power.description : '';

    return ret;
  };

  const powersList = db.powers.map((power) => ({
    title: power.name,
    rank: power.rank,
    description: getDescription(power),
    link: power.link,
  }));

  return <Effects title="Powers" list={powersList} />;
};
