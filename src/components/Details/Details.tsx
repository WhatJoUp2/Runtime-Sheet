import type { FC } from 'react';
import db from '../../db.json';
import './Details.css';

export const Details: FC = () => {
  const list = [
    { title: 'Identity', value: db.details.alternateIdentity },
    { title: 'Name', value: db.details.name },
    { title: 'Age', value: db.details.age },
    { title: 'Gender', value: db.details.gender },
    { title: 'Height', value: db.details.height },
    { title: 'Weight', value: db.details.weight },
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
