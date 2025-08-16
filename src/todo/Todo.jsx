import { useState } from "react";
import "./Todo.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoDate from "../components/TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;
    if (!content) return;

    // if (task.includes(inputValue)) {
    //   alert("Duplicate Value!");
    //   return;
    // }

    const contentMatched = task.find((currTask) => currTask.content === content);
    if (contentMatched) return;

    let val = content.trim();
    if (!val) return;
    val = val.replace(/\s+/g, " ");
    setTask([...task, {id, content, checked}]);
  };

  const handleDelete = (value) => {
    const updatedTask = task.filter((currVal) => currVal.content !== value);
    setTask(updatedTask);
  };

  const handleChecked = (value) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === value) {
        return {...currTask, checked: !currTask.checked};
      }
      else {
        return currTask;
      }
    });
    setTask(updatedTask);
  }

  const handleClear = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <TodoDate />
      <TodoForm onAddTask={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                key={currTask.id}
                currTask={currTask.content}
                checked={currTask.checked}
                onDeleteTask={handleDelete}
                onCheckedTask={handleChecked}
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
