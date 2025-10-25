import { useContext, type FC } from 'react';
import { Effects } from '../effects/Effects';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

interface Power {
  name: string;
  effect: string;
  rank: number;
  link?: string;
  flaws?: string;
  flats?: string;
  description?: string;
  extras?: string;
}

export const Powers: FC = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  const getDescription = (power: Power): string => {
    let ret = '';
    ret += 'TYPE: ' + power.effect;
    ret += power.extras ? '\nEXTRAS: ' + power.extras : '';
    ret += power.flaws ? '\nFLAWS: ' + power.flaws : '';
    ret += power.flats ? '\nFLATS: ' + power.flats : '';
    ret += power.description ? '\nDESCRIPTION: ' + power.description : '';

    return ret;
  };

  const powersList = selectedCharacter.powers.map((power) => ({
    title: power.name,
    rank: power.rank,
    description: getDescription(power),
    link: power.link,
  }));

  return <Effects title="Powers" list={powersList} />;
};
