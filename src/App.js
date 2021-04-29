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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id));
  };

  // Toggle Reminder's Class   
  const toggleReminder = id => {
    // e.currentTarget.classList.toggle('reminder');
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
    console.log(tasks);
  }

  //Add Task
  const addTask = task => {
    console.log(task);
  }

  return (
    <div className="container">
      <AddTask/>
      {/* If we pass number/boolean we have to use {} for attributes*/}
      <Header />

      {/* Tasks */}
      { tasks.length > 0 ?
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={ toggleReminder }
          onInput={ addTask }
          />
        : 'No Tasks'}

    </div>
  );

}

export default App;
