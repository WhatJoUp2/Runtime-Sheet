import { useContext, type FC } from 'react';
import { Effects } from '../effects/Effects';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

export const Advantages: FC = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  const advantagesList = selectedCharacter.advantages.map((adv) => ({
    title: adv.name,
    rank: adv.rank,
    description: adv.effect,
  }));

  return <Effects title="Advantages" list={advantagesList} />;
};
