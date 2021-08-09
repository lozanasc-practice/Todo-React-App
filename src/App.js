import './App.css';
import React, {useState} from 'react';
import TodoItem from './components/todoItem';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const tasks = [ 
              {
                taskId: 1,
                taskName: 'You should start adding tasks!',
                taskDescription: 'Type the name of the task and its description in the form field 😉'
              }
            ]

const App = () => {

  const NewTaskFormat = {taskId: null, taskName: '', taskDescription: ''};

  const [TaskList, SetTaskList] = useState(tasks); 
  const [Editing, SetEditing] = useState(false);
  const [NewTask, SetNewTask] = useState(NewTaskFormat);

// Basically a create function
const addTask = task => {
      task.taskId = TaskList.length + 1;
      SetTaskList([...TaskList, task])
}

// Delete function
const finishTask = id => {
      SetEditing(false);
      SetTaskList(TaskList.filter(task => task.taskId !== id))
}

// Update function
const updateTask = (id, updatedTask) => {
  SetEditing(false);

  SetTaskList(TaskList.map(task => (task.taskId === id  ? updatedTask : task)));
}

const editCurrentTask = Task => {
  SetEditing(true)

  SetNewTask({ taskId: Task.taskId, taskName: Task.taskName, taskDescription: Task.taskDescription });
}

  return (
    <div className="App">
      <h1>a <span style={{fontSize: '60px', fontFamily: 'Segoe UI'}}>📝todo</span> Web Application</h1>
      <div className="formListContainer">
      {(Editing ? 
            <EditTask
              Editing={Editing}
              SetEditing={SetEditing}
              NewTask={NewTask}
              updateTask = {updateTask}       
            /> 
            :
            <AddTask
              newTask={addTask}
            />
            )}
          <div className="formContainer">
            <h1>
              ⛅ Today's Tasks: 
            </h1>
            <TodoItem
            TaskList={TaskList}
            finishTask={finishTask}
            editCurrentTask = {editCurrentTask}
            />
          </div>
      </div>
    </div>
  )
}

export default App;
