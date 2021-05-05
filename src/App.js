import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s appointment',
      day: "Apr 11 2021",
      reminder: true
    },
    {
      id: 2,
      text: 'Colonoscopy',
      day: "Mar 11 2020",
      reminder: false
    },
    {
      id: 3,
      text: 'Prostate massage',
      day: "Sep 5 2019",
      reminder: true
    }
  ]);

  // Show/Hide Form for adding tasks
  let [showForm, setShowForm] = useState(false);
  

  // Adding a new task
  // getting a new task obj as a param to the function from child component
  const addTask = task => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task};
  setTasks([...tasks, newTask]);  
  console.log(newTask);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id));
  };

  // Toggle Reminder's Class   
  const toggleReminder = id => {
    // e.currentTarget.classList.toggle('reminder');
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task));
    console.log(tasks);
  }

  // Toggle Form
  const toggleForm = () => {
  setShowForm(!showForm);
  }
  

  return (
    <div className="container">
      {/* If we pass number/boolean we have to use {} for attributes*/}
      <Header onToggleForm={ toggleForm } showForm={ showForm }/>

      {/* Passing addTask function as a prop */}
      <AddTask onAdd={ addTask } showForm={ showForm }/> 

      {/* Tasks */}
      { tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />
        : 'No Tasks'}

    </div>
  );

}

export default App;
