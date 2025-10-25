import { useContext, type FC } from 'react';
import './Details.css';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';

export const Details: FC = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  const list = [
    { title: 'Identity', value: selectedCharacter.details.alternateIdentity },
    { title: 'Name', value: selectedCharacter.details.name },
    { title: 'Age', value: selectedCharacter.details.age },
    { title: 'Gender', value: selectedCharacter.details.gender },
    { title: 'Height', value: selectedCharacter.details.height },
    { title: 'Weight', value: selectedCharacter.details.weight },
  ];
  return (
    <table className="detes-table">
      <tbody>
        {list.map((dete) => (
          <tr key={dete.title}>
            <th>
              <label>{dete.title}</label>
            </th>
            <td>{dete.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
