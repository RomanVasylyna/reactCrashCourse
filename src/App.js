import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


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

  return (
    <div className="container">
      {/* If we pass number/boolean we have to use {} for attributes*/}
     <Header />
     <Tasks tasks={ tasks }/>
    </div>
  );

}

export default App;
