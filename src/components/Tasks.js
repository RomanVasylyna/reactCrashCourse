import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
      
    return (
    // We don't need a container here so we can just use an empty fragment
     <> 
      { tasks.map( (task, index) => <Task className="task"
       key={ index }
       task={ task } 
       onDelete={ onDelete } 
       onToggle={ onToggle }/> )}   
     </>
    )
}

export default Tasks;
