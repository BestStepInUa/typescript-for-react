import React from 'react';
import { PropsFC } from './UserFC.types';

export const UserFC: React.FC<PropsFC> = ({ nameFC, ageFC }) => {
  return (
    <div>
      <p>{`User name is ${nameFC}`}</p>
      <p>{`User age is ${ageFC}`}</p>
    </div>
  );
};
