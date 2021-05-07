import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {

  let [tasks, setTasks] = useState([]);

  useEffect(() => {
  const getTasks = async() => {
  const tasksFromServer = await fetchTasks();
  setTasks(tasksFromServer); 
  }; 
  getTasks();
  }, []);

  // Show/Hide Form for adding tasks
  let [showForm, setShowForm] = useState(false);
  
  // Fetching tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();

    console.log(data);
    return data;
  }

  // Fetching Single task by id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();

    console.log(data);
    return data;
  }


  // Adding a new task
  // getting a new task obj as a param to the function from child component
  const addTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      
      headers: {
        'Content-type': 'application/json', 
      },

      body: JSON.stringify(task)
    })

    const data = await res.json();
     
    setTasks([...tasks, data]);
    

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    // console.log(newTask);
  }

  // Delete Task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Reminder's Class   
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updatedTask)  
    });

    const data = await res.json();

    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task));
  }

  // Toggle Form
  const toggleForm = () => {
    setShowForm(!showForm);
  }


  return (
    <div className="container">
      {/* If we pass number/boolean we have to use {} for attributes*/}
      <Header onToggleForm={toggleForm} showForm={showForm} />

      {/* Passing addTask function as a prop */}
      <AddTask onAdd={addTask} showForm={showForm} />

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
