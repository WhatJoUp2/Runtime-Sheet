import type { FC } from 'react';
import db from '../../db.json';
import { Attributes } from '../Attributes/Attributes';
import './Skills.css';

export const Skills: FC = () => {
  const skillList = [
    { title: 'Athletics', value: db.skills.athletics },
    { title: 'Deception', value: db.skills.deception },
    { title: 'Insight', value: db.skills.insight },
    { title: 'Intimidation', value: db.skills.intimidation },
    { title: 'Investigation', value: db.skills.investigation },
    { title: 'Perception', value: db.skills.perception },
    { title: 'Persuasion', value: db.skills.persuasion },
    { title: 'Ranged Combat', value: db.skills.rangedCombat },
    { title: 'Sleight of Hand', value: db.skills.sleightOfHand },
    { title: 'Stealth', value: db.skills.stealth },
    { title: 'Technology', value: db.skills.technology },
    { title: 'Treatment', value: db.skills.treatment },
    { title: 'Vehicles', value: db.skills.vehicles },
  ];

  return (
    <div className="skill-container">
      <Attributes title="Skills" list={skillList} sign />
      <div className="skill-note">
        Note: If a skill is not present, assume +0.
      </div>
    </div>
  );
};
