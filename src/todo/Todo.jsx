import { useState } from "react";
import "./Todo.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoDate from "../components/TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      alert("Duplicate Value!");
      return;
    }
    let val = inputValue.trim();
    if (!val) return;
    val = val.replace(/\s+/g, " ");
    setTask([...task, val]);
  };

  const handleDelete = (value) => {
    const updatedTask = task.filter((currVal) => currVal !== value);
    setTask(updatedTask);
  };

  const handleClear = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <TodoDate />
      <TodoForm onAddTask={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask, index) => {
            return (
              <TodoList
                index={index}
                currTask={currTask}
                onDeleteTask={handleDelete}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
