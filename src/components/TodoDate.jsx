import { useEffect, useState } from "react";

const TodoDate = () => {
    
  const [dateTime, setDateTime] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-IN");
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <header>
      <h1>Todo List</h1>
      <h2 className="date-time">{dateTime}</h2>
    </header>
  );
};

export default TodoDate;
