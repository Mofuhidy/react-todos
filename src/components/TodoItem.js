import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div
        className={styles.content}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>
          <FaRegEdit />
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          <FaTrash />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        style={editMode}
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
