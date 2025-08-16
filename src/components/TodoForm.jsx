import { useState } from "react";

const TodoForm = ({onAddTask}) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (value) => {
    setinputValue(value.toLowerCase());
  };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      onAddTask(inputValue);
      setinputValue("");
    };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
