import { useContext, type FC } from 'react';
import { Attributes } from '../attributes/Attributes';
import './Skills.css';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

export const Skills: FC = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  const skillList = [];

  for (const [key, value] of Object.entries(selectedCharacter.skills)) {
    skillList.push({title: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), value });
  }


  // const skillList = [
  //   { title: 'Athletics', value: selectedCharacter.skills.athletics },
  //   { title: 'Deception', value: selectedCharacter.skills.deception },
  //   { title: 'Insight', value: selectedCharacter.skills.insight },
  //   { title: 'Intimidation', value: selectedCharacter.skills.intimidation },
  //   { title: 'Investigation', value: selectedCharacter.skills.investigation },
  //   { title: 'Perception', value: selectedCharacter.skills.perception },
  //   { title: 'Persuasion', value: selectedCharacter.skills.persuasion },
  //   { title: 'Ranged Combat', value: selectedCharacter.skills.rangedCombat },
  //   { title: 'Sleight of Hand', value: selectedCharacter.skills.sleightOfHand },
  //   { title: 'Stealth', value: selectedCharacter.skills.stealth },
  //   { title: 'Technology', value: selectedCharacter.skills.technology },
  //   { title: 'Treatment', value: selectedCharacter.skills.treatment },
  //   { title: 'Vehicles', value: selectedCharacter.skills.vehicles },
  // ];

  return (
    <div className="skill-container">
      <Attributes title="Skills" list={skillList} sign />
      <div className="skill-note">
        Note: If a skill is not present, assume +0.
      </div>
    </div>
  );
};
