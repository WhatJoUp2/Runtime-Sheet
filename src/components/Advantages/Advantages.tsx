import type { FC } from 'react';
import db from '../../db.json';
import { Effects } from '../Effects/Effects';

export const Advantages: FC = () => {
  const advantagesList = db.advantages.map((adv) => ({
    title: adv.name,
    rank: adv.rank,
    description: adv.effect,
  }));

  return <Effects title="Advantages" list={advantagesList} />;
};
