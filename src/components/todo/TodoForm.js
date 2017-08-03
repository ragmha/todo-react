import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = props =>
  <form action="">
    <input
      type="text"
      value={props.currentTodo}
      onChange={props.handleInputChange}
    />
  </form>;

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
