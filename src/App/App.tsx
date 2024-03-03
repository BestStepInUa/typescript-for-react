import React from 'react';
import { User } from './App.types';
import './App.css';
import { User2 } from '../User';
import { Props2 } from '../User/User.types';
import { PropsFC } from '../UserFC/UserFC.types';
import { UserFC } from '../UserFC';

type Props = {
  user: User;
};

export function App({ user }: Props, { name = 'Alex', age = 18 }: Props2, { nameFC = 'Max', ageFC = 25 }: PropsFC) {
  return (
    <>
      <div>
        <h1>{user.name}</h1>
      </div>
      <User2 name={name} age={age} />
      <UserFC nameFC={nameFC} ageFC={ageFC} />
    </>
  );
}
