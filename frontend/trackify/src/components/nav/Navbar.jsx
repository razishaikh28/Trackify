import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';

export default function Navbar() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const getUser = async () => {
		try {
			const { data } = await axios.get('/api/users/me');
			setUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleLogout = async () => {
		try {
			await axios.get('/api/auth/logout');
			setUser(null);
			toast.success('Logged out successfully');
			navigate('/auth');
		} catch (err) {
			console.log(err);
			toast.error('Cannot logout');
		}
	};

	if (!user) return null;

	return (
		<header>
			<div class="container card text-center d-flex position-relative mt-4 p-3 rounded">
				<div>
					<FaUserAlt className={classes.userIcon} />
				</div>
				<div>
					<h5 class="fs-1 mt-0">Welcome User!</h5>
					<p class="fs-4">Your Name: {user.name}</p>
					<p class="fs-4">Your Email: {user.email}</p>
					<Link class="fs-4 text-decoration-none" to="/edit-profile">
						<FiEdit />
						Edit
					</Link>
				</div>
				<br />
				<div class="d-grid gap-2 col-6 mx-auto">
					<button type="button" class="btn btn-danger" onClick={handleLogout}>
						Logout
					</button>
				</div>
				<br />
			</div>
		</header>
	);
}
