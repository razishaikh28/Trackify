import React, { useEffect, useState } from 'react';
import classes from './TaskList.module.scss';
import toast from 'react-hot-toast';
import axios from 'axios';
import TaskItem from './TaskItem';

function TaskList() {
	const [taskList, setTaskList] = useState([]);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newTask, setNewTask] = useState('');

	const getTasks = async () => {
		try {
			const { data } = await axios.get('/api/tasks/myTasks');
			setTaskList(
				data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	const addNewButtonClick = () => {
		setIsAddingNew(!isAddingNew);
	};

	const addNewTask = async e => {
		e.preventDefault();
		if (newTask.length <= 0) {
			toast.error('Task is empty');
			return;
		}
		try {
			const { data } = await axios.post('/api/tasks/', {
				title: newTask,
			});
			toast.success('New task added');
			setTaskList([{ ...data }, ...taskList]);
			setNewTask('');
			setIsAddingNew(false);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteTask = async id => {
		try {
			await axios.delete(`/api/tasks/${id}`);
			toast.success('Task deleted');
			setTaskList(taskList.filter(task => task._id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div className={classes.topBar}>
				<button type="button" class="btn btn-success btn-lg" onClick={addNewButtonClick}>
					+ Add task
				</button>
			</div>
			{isAddingNew && (
				<form className={classes.addNewForm} onSubmit={addNewTask}>
					<input
						type="text"
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
						placeholder="Task name"
					/>
					<button type="submit">+Add</button>
				</form>
			)}
			{taskList.length > 0 ? (
				<table className={classes.taskList_table}>
					<tbody>
						{taskList.map(task => (
							<TaskItem task={task} key={task._id} deleteTask={deleteTask} />
						))}
					</tbody>
				</table>
			) : (
				<p class="container">No Task Found! Create a new task</p>
			)}
		</div>
	);
}

export default TaskList;
