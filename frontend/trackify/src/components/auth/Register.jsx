import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { TiTick } from 'react-icons/ti';
import { IoMdArrowRoundBack } from 'react-icons/io';
import logo from '../../../logo.png';
import Layout from '../Layout';

function Register() {
	const register = async e => {
		e.preventDefault();
		const user = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		try {
			await axios.post('/api/auth/register', user);
			toast.success('Registered successfully');
		} catch (err) {
			console.log(err);
			toast.error('Something went wrong');
		}
	};

	return (
		<Layout>
			<nav class="navbar navbar-dark bg-dark fixed-top">
				<div class="container-fluid">
					<img src={logo} alt="logo" />
					<a class="navbar-brand" href="/">
						<h2 class="position-absolute top-50 start-50 translate-middle">
							<b>Trackify</b>
							<TiTick />
						</h2>
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasDarkNavbar"
						aria-controls="offcanvasDarkNavbar"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="offcanvas offcanvas-end text-bg-dark"
						tabindex="-1"
						id="offcanvasDarkNavbar"
						aria-labelledby="offcanvasDarkNavbarLabel"
					>
						<div class="offcanvas-header">
							<h3 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
								SignIn / Register
							</h3>
							<button
								type="button"
								class="btn-close btn-close-white"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div class="offcanvas-body">
							<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="/">
										Home
									</a>
								</li>
								<hr />
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="/contact-us"
									>
										Contact Us
									</a>
								</li>
								<hr />
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="/auth">
										Sign In
									</a>
								</li>
								<hr />
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="/register"
									>
										Register
									</a>
								</li>
								<hr />
								<br/>
								<li>
									<p class="text-center">Copyright © 2023. All rights reserved.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div class="container card text-center">
				<div class="card-header">
					<h2>Register Here</h2>
				</div>
				<div class="card-body">
					<form onSubmit={register}>
						<div class="form-floating mb-3">
							<input
								name="name"
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="name"
								required
							/>
							<label for="floatingInput">Enter your full name</label>
						</div>
						<div class="form-floating mb-3">
							<input
								name="email"
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								required
							/>
							<label for="floatingInput">Enter your email address</label>
						</div>
						<div class="form-floating mb-3">
							<input
								name="password"
								type="password"
								class="form-control"
								id="floatingInput"
								placeholder="password"
								required
							/>
							<label for="floatingInput">Enter password</label>
						</div>
						<div class="form-check d-flex justify-content-center mb-4">
							<input
								class="form-check-input me-2"
								type="checkbox"
								id="registerCheck"
								aria-describedby="registerCheckHelpText"
							/>
							<label class="form-check-label" for="registerCheck">
								I have read and agree to the terms
							</label>
						</div>
						<button class="btn btn-primary" type="submit">
							Register
						</button>
					</form>
				</div>
				<div class="card-footer text-muted">
					Copyright © 2023. All rights reserved.
				</div>
			</div>
			<br />
			<br />
			<br />
			<button type="button" class="d-grid mx-auto btn btn-primary btn-lg">
				<a class="text-decoration-none text-white" href="/auth">
					<IoMdArrowRoundBack /> Back to Previous page
				</a>
			</button>
		</Layout>
	);
}

export default Register;
