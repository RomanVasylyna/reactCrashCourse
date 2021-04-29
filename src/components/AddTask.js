import React from 'react'

const AddTask = () => {

    return (
        <form className="add-form">
            <div className="form-control">
                <label> Task </label>
                <input type="text"
                    placeholder="Add Task..."
                ></input>
            </div>

            <div className="form-control">
                <label> Date </label>
                <input type="text"
                    placeholder="Add Date..."
                ></input>
            </div>

            <div className="form-control">
                <label> Set Reminder </label>
                <input type="checkbox"></input>
            </div>

            <input type="submit"/>
        </form>

    )
}

export default AddTask;