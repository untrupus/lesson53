import React, {useState} from 'react';
import './App.css';
import Task from "./Tasks/Task";
import AddTaskForm from "./Tasks/AddTaskForm";

const App = () => {
    const [tasks, setTasks] = useState([
        {task: 'Buy milk', id: 1},
        {task: 'Walk with dog', id: 2},
        {task: 'Do homework', id: 3},
    ]);

    const [text, setText] = useState([{value: ''}]);

    const currentTask = event => {
        const textCopy = [...text];
        const newText = {...textCopy[0]};
        newText.value = event.target.value;
        textCopy[0] = newText;
        setText(textCopy);
    }

    const addTask = () => {
        if (text[0].value !== '') {
            let lastIndex = tasks[tasks.length - 1].id;
            const newTasks = [...tasks];
            newTasks.push({task: text[0].value, id: (lastIndex + 1)});
            setTasks(newTasks);

            const textCopy = [...text];
            const newText = {...textCopy[0]};
            newText.value = '';
            textCopy[0] = newText;
            setText(textCopy);
        }
    }

    const removeTask = id => {
        const index = tasks.findIndex(p => p.id === id);
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);

        setTasks(tasksCopy);
    };

    let tasksList = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                task={task.task}
                remove={() => removeTask(task.id)}
            />
        )
    });

    return (
        <div className="container">
            <AddTaskForm
                onChange={currentTask}
                click={addTask}
                value={text[0].value}
            />
            <div className="tasks">
                {tasksList}
            </div>
        </div>
    );
}

export default App;
