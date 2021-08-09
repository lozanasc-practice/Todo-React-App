import React, {useState} from 'react';



const AddTask = (props) => {
    const TaskForm = {taskId: null, taskName: '', taskDescription: ''};

    const [NewTask, SetNewTask] = useState(TaskForm);


    const handleChange = (e) => {
        const {name, value} = e.target;

        SetNewTask({...NewTask, [name]: value});
    }

    const AddTaskStyle = {
        display: 'flex',
        flexFlow: 'column'
    }
    return (
        <form 
        className="formContainer"
        onSubmit={(e) => {
            e.preventDefault();
            if(!NewTask.taskName || !NewTask.taskDescription) return;
            props.newTask(NewTask);
            SetNewTask(TaskForm);
        }}
        style={AddTaskStyle}
        >
            <h1>
            ✨ Got any new Tasks for the Day?
            </h1>
            <input 
            name='taskName'
            onChange={handleChange}
            placeholder='Enter Task Name'
            type="text"/>
            <input 
            name='taskDescription'
            onChange={handleChange}
            placeholder='Enter Description'
            type="text"/>
            <button>
                Add
            </button>
        </form>
    )
}

export default AddTask;