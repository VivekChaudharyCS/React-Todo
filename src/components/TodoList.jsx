import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ index, currTask, onDeleteTask }) => {

  return (
    <li key={index} className="todo-item">
      <span>{currTask}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTask(currTask)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
