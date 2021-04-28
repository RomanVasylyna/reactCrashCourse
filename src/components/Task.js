import React from 'react'

const Task = ({ task }) => {

    const setReminder = e => {
    alert(e.currentTarget.innerHTML);    
    }
    
    return (
        <div className="task" onClick={ setReminder }>
         <h3>{ task.text }</h3>
         <p>{ task.day }</p>   
         <span>X</span>
        </div>
    )
}

export default Task
