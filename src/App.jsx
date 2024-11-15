import React from 'react';
import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList';

function getUser(userId) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <div className="App">
      <TodoList todos={todos} />
    </div>
  </div>
);
