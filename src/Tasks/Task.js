import React from 'react';

const Task = props => {
    return (
        <div className="task">
            <p><input type="checkbox"
                      // checked={props.check}
                      onChange={props.change} />{props.task}</p>
            <button type="button" onClick={props.remove} className="btnRemove">&#10006;</button></div>
    );
}

export default Task;