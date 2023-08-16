import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask }) {
	const [isCompleted, setIsCompleted] = useState(task.completed);
	const [isLoading, setIsLoading] = useState(false);

	const handleCheckboxClick = async () => {
		try {
			setIsLoading(true);
			await axios.put(`/api/tasks/${task._id}`, {
				completed: !isCompleted,
			});
			setIsCompleted(!isCompleted);
			toast.success('Task updated successfully');
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<table class="table table-bordered">
				<thead class="table-dark text-center">
					<tr>
						<th scope="col">Checkbox</th>
						<th scope="col">Task</th>
						<th scope="col">Complete / Incomplete</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr>
						<th scope="row">
							<div
								onChange={handleCheckboxClick}
								role="checkbox"
								aria-checked
							>
								<input
									type="checkbox"
									checked={isCompleted}
									disabled={isLoading}
									readOnly
									tabIndex={-1}
								/>
							</div>
						</th>
						<td>
							<p>{task.title}</p>
						</td>
						<td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								onClick={() => deleteTask(task._id)}
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TaskItem;
