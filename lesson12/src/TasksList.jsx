import React from "react";
import Task from "./Task.jsx";
import CreateTask from './CreateTask.jsx'
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway.jsx'



class TasksList extends React.Component {
    state = {
        tasks: []
    }
    componentDidMount() {
        this.fetchTasks()
    }
    fetchTasks = () => {
        fetchTasksList()
        .then(tasksList => {
            this.setState({
                tasks: tasksList
            })
        })
    }
    onCreate = (text) => {
        const newTask = {
            text,
            done: false
        }
        createTask(newTask).then(() => this.fetchTasks())
    }
    handleTaskStatusChange = id => {
        const {done, text} = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done
        }
        updateTask(id, updatedTask).then(() => this.fetchTasks())
    }
    handleTaskDelete = id => {
        deleteTask(id).then(() => this.fetchTasks())
    }
    render() {
        const sortedTask = this.state.tasks.slice()
            .sort((a, b) => a.done - b.done)
        return (
            <main className="todo-list">
                <CreateTask onCreate={this.onCreate}></CreateTask>
                <ul className="list">
                    {sortedTask.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={this.handleTaskStatusChange}
                            onDelete={this.handleTaskDelete}
                            >
                        </Task>
                    ))}
                </ul>
            </main>
        );
    }
}
export default TasksList;