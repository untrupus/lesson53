import React from 'react';

const AddTaskForm = props => {
    return (
        <div className="head">
            <input type="text" className="field" value={props.value} placeholder="Add new task" onChange={props.onChange}/>
            <button type="button" className="btn" onClick={props.click}>Add</button>
        </div>
    );
}

export default AddTaskForm;