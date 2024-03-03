import React from 'react';
import { User } from './App.types';
import { Props2 } from '../User/User.types';
import './App.css';
import { User2 } from '../User';

type Props = {
  user: User;
};

export function App({ user }: Props, { 'Alex', 18 }: Props2) {
  return (
    <>
      <div>
        <h1>{user.name}</h1>
      </div>
      <User2 name={name} age={age} />
    </>
  );
}
