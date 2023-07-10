import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoList;
