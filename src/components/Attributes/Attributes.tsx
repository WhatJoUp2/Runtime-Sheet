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
  // const getTitle = (index: number) => {
  //   const max = Math.max(...attrs.map((attr) => attr.title.length));
  //   const diff = max - attrs[index].title.length;

  //   return attrs[index].title + ' '.repeat(diff);
  // };

  const getValue = (value: number) => {
    if (!sign) return value.toString();
    return value < 0 ? value.toString() : '+' + value;
  };

  // const getValue = (index: number) => {
  //   return attrs[index].value.toString().length == 2
  //     ? attrs[index].value.toString()
  //     : ' ' + attrs[index].value.toString();
  // };

  // const getEval = (value: number) => {
  //   if (value < 0) {
  //     return 'Weak';
  //   }
  //   if (value < 6) {
  //     return 'Exceptional';
  //   }
  //   if (value < 11) {
  //     return 'Superhuman';
  //   }
  // };

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
