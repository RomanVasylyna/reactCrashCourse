import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {

    // Each of these values reflect a specific input/checkbox
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = e => {
        // Preventing the form from being submitted    
        e.preventDefault();

        // Making sure the task input is not empty
        if (!text) {
            alert('Task field can\'t be empty!');
            return;
        }

        // Sending a new formed object to the main component
        onAdd({ text, day, reminder });

        // Clearing inputs
        setText('');
        setDay('');
        setReminder(false);
    };


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> Task </label>
                <input type="text"
                    placeholder="Add Task..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                ></input>
            </div>

            <div className="form-control">
                <label> Date </label>
                <input type="text"
                    placeholder="Add Date..."
                    value={day}
                    onChange={e => setDay(e.target.value)}
                ></input>
            </div>

            <div className="form-control">
                <label> Set Reminder </label>
                <input type="checkbox"
                    checked={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type="submit"
                value="Save Task"
                className="btn btn-block" />

        </form>

    )
}

export default AddTask;
