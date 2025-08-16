import { useState } from "react";

const TodoForm = ({onAddTask}) => {
  const [inputValue, setinputValue] = useState({id: "", content: "", checked: false});

  const handleInputChange = (value) => {
    setinputValue({id:value.toLowerCase(), content: value.toLowerCase(), checked: false});
  };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      onAddTask(inputValue);
      setinputValue({id: "", content: "", checked: false});
    };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
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
