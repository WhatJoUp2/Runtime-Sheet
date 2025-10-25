import { useContext, type FC } from 'react';
import { Attributes } from '../attributes/Attributes';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

export const Abilities: FC = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  const attrs = [
    { title: 'Strength', value: selectedCharacter.abilities.strength },
    { title: 'Stamina', value: selectedCharacter.abilities.stamina },
    { title: 'Agility', value: selectedCharacter.abilities.agility },
    { title: 'Dexterity', value: selectedCharacter.abilities.dexterity },
    { title: 'Fighting', value: selectedCharacter.abilities.fighting },
    { title: 'Intellect', value: selectedCharacter.abilities.intelect },
    { title: 'Awareness', value: selectedCharacter.abilities.awareness },
    { title: 'Presence', value: selectedCharacter.abilities.presence },
  ];

  return <Attributes title="Ability Scores" list={attrs} />;
};
