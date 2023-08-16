import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './EditProfileForm.module.scss';

function EditProfileForm() {
	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('/api/users/me');
				setUser(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	const updateUserInfo = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const updateProfile = async e => {
		e.preventDefault();
		try {
			const res = await axios.put('/api/users/me', user);
			toast.success('Profile updated successfully');
			setUser(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="container d-flex position-relative  card text-center mt-4 p-3">
			<button type="button" class=" btn btn-primary btn-lg d-grid gap-2 col-6 mx-auto">
				<a class="text-decoration-none text-white" href="/">
					<IoMdArrowRoundBack /> Back to previous page
				</a>
			</button>
			<div>
				<br />
				<h5 class="fs-1 mt-0">Edit Profile</h5>
				<form className={classes.editForm} onSubmit={updateProfile}>
					<label class="fs-3" htmlFor="name">
						Full Name:
						<input
							class="fs-5"
							name="name"
							type="text"
							placeholder="Full Name"
							required
							value={user.name}
							onChange={updateUserInfo}
						/>
					</label>
					<label class="fs-3" htmlFor="email">
						Email:
						<input
							class="fs-5"
							name="email"
							type="email"
							placeholder="email"
							required
							value={user.email}
							onChange={updateUserInfo}
						/>
					</label>
					<button type="submit" class="btn btn-success btn-lg">
						Save
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditProfileForm;
