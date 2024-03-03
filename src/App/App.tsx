import React from 'react';
import { User } from './App.types';
import './App.css';
import { User2 } from '../User';
import { Props2 } from '../User/User.types';

type Props = {
  user: User;
};

export function App({ user }: Props, user2: Props2) {
  return (
    <>
      <div>
        <h1>{user.name}</h1>
      </div>
      <User2 name={user2.name} age={user2.age} />
    </>
  );
}
