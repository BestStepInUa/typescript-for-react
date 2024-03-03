import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { User } from './App/App.types';
import { Props2 } from './User/User.types';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

const user: User = {
  id: 1,
  name: 'Jon',
  email: 'mail@example.com',
};

const user2: Props2 = {
  name: 'Alex',
  age: 18,
};

root.render(
  <StrictMode>
    <App user={user} user2={user2} />
  </StrictMode>
);
