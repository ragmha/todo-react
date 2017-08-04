import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = props =>
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo =>
        <TodoItem key={todo.id} handleToggle={props.handleToggle} {...todo} />
      )}
    </ul>
  </div>;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func,
};
