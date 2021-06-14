import React, { FC } from 'react';
import { IState as IProps } from '../App';

// interface IProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

const List: FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((peoson) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img className='List-img' src={peoson.url} />
            <h2>{peoson.name}</h2>
          </div>
          <p>{peoson.age} years old</p>
          <p className='List-note'>{peoson.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
