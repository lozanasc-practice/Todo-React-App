import React, {useState, useEffect} from 'react';


const EditTask = (props) => {
    const EditTaskStyle = {
        display: 'flex',
        flexFlow: 'column'
    }
    const buttonGroupStyle = {
        display: 'flex',
        margin: '5px 12px'
    }
    const [task, setTask] = useState(props.NewTask);

    const handleChange = e => {
        const {name, value} = e.target;
        setTask({...task, [name]: value});
    }

    useEffect(() => {
            setTask(props.NewTask);
            console.log(props.NewTask);
    }, [props]);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.updateTask(task.taskId, task)
            console.log(task)
        }}
        className = 'formContainer'
        style = {EditTaskStyle}
        >
            <h1>
            😮 You wanted to change some stuff?
            </h1>
            <input
            name='taskName'
            value={task.taskName}
            placeholder='Enter Task Name'
            onChange={handleChange}
            type="text"/>
            <input 
            value={task.taskDescription}
            name='taskDescription'
            onChange={handleChange}
            placeholder='Enter Description'
            type="text"/>
            <div className={buttonGroupStyle}>
            <button
            
            >
                Edit
            </button>
            <button
            onClick={() => props.SetEditing(false)}
            >
                Cancel
            </button>
            </div>
        </form>
    )
}

export default EditTask;