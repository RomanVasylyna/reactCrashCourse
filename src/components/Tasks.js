import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
      
    return (
    // We don't need a container here so we can just use an empty fragment
     <> 
      { tasks.map( task => <Task className="task"
       key={ task.id }
       task={ task } 
       onDelete={ onDelete } 
       onToggle={ onToggle }/> )}   
     </>
    )
}

export default Tasks;
