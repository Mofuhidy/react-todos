import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsPlusCircleFill } from 'react-icons/bs';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          <BsPlusCircleFill />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.defaultProps = {
  addTodoItem: () => {},
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
};

export default InputTodo;
