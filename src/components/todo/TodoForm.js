import React from 'react';

export const TodoForm = props =>
  <form action="">
    <input
      type="text"
      value={props.currentTodo}
      onChange={props.handleInputChange}
    />
  </form>;
