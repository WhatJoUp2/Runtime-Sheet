import { useContext, type FC } from 'react';
import { Attributes } from '../attributes/Attributes';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

export const Defenses: FC = () => {
  const {selectedCharacter} = useContext(CharacterContext);

  const defensesList = [
    { title: 'Dodge', value: selectedCharacter.defenses.dodge },
    { title: 'Fortitude', value: selectedCharacter.defenses.fortitude },
    { title: 'Parry', value: selectedCharacter.defenses.parry },
    { title: 'Toughness', value: selectedCharacter.defenses.toughness },
    { title: 'Will', value: selectedCharacter.defenses.will },
    { title: 'Initiative', value: selectedCharacter.defenses.initiative },
  ];

  return <Attributes title="Defenses & Init" list={defensesList} />;
};
