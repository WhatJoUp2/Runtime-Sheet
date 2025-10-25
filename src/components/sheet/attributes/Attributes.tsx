import type { FC } from 'react';
import './Attributes.css';

interface AttributesProps {
  title: string;
  list: { title: string; value: number }[];
  sign?: boolean;
}

export const Attributes: FC<AttributesProps> = ({
  list,
  title,
  sign = false,
}) => {
  const getValue = (value: number) => {
    if (!sign) return value.toString();
    return value < 0 ? value.toString() : '+' + value;
  };

  return (
    <div className="attribute-container">
      <div className="attribute-title">{title}</div>
      <table className="attribute-table">
        <thead>
          <tr>
            <th></th>
            <th>Ranks</th>
          </tr>
        </thead>
        <tbody>
          {list.map((attr) => (
            <tr key={attr.title}>
              <td>{attr.title}</td>
              <td>{getValue(attr.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
