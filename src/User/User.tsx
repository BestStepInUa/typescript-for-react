import React from 'react';
import { Props2 } from './User.types';

export function User2({ name, age }: Props2) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
    </div>
  );
}
