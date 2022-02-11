import React, { ChangeEvent, FC, useState } from 'react';
import "./App.css";
import { ITask } from "./interfaces";

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask])
    console.log(todo)
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
        <input type='text' placeholder='Text...'  name="task" onChange={handleChange}/>
        <input type='number' placeholder='Deadline (in days)...' name="deadline" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className='todoList'>
        <div className='todoContainer'>
          <h1>Here comes the output from header</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi quasi error nemo magnam, vitae, debitis iste libero soluta cupiditate ad deserunt id mollitia officia, sint sunt dignissimos facilis atque.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
