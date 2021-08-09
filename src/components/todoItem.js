import React from 'react';

const cardStyle = {
    backgroundColor: 'rgb(236, 207, 207)',
    padding: '10px',
    borderRadius: '15px',
    margin: '15px auto'
}

const taskName = {
    fontSize: '20px',
    fontWeight: 'bold'
}

const taskDesc = {
    fontSize: '18px',
}

const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    margin: '4px 6px',
    fontWeight: 'bold',
    filter: 'drop-shadow(0 1px 0.1rem  rgba(0, 0, 0, 0.452))'
}

const TodoItem = props => 
        props.TaskList.length > 0 ? props.TaskList.map(task => 
        (
            <div key={task.taskId} style={cardStyle} className="TodoItem">
            <p>
            <span
            style={taskName}
            >
                {task.taskName}
            </span>
            <br/>
            <span
            style={taskDesc}
            >
                {task.taskDescription}
            </span>
            </p>
            <button
            style={buttonStyle}
            onClick={() => props.finishTask(task.taskId)}
            >
            Done 😁
            </button>
            <button
            style={buttonStyle}
            onClick={() => {props.editCurrentTask(task)
                            console.log(task)}}
            >
            Edit ✍
            </button>
        </div>
        )) 
    : 
    <h1>😎 Guess what, you're free for the day! Enjoy!</h1>
export default TodoItem;