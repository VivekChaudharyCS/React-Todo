import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ currTask, checked, onDeleteTask, onCheckedTask }) => {
  console.log(currTask);

  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{currTask}</span>
      <button className="check-btn" onClick={() => onCheckedTask(currTask)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTask(currTask)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
