import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../../logo.png';
import { TiTick } from 'react-icons/ti';
import bg from '../../bg.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import './Auth.css';

function Auth() {
	const { auth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate('/');
		}
	}, [auth, navigate]);

	const login = async e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		try {
			await axios.post('/api/auth/login', {
				email,
				password,
			});
			navigate('/');
			toast.success('Login Success');
		} catch (err) {
			console.log(err);
			toast.error('Login Failed');
		}
	};

	return (
		<div>
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
								Sign In / Register
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
								<br />
								<li>
									<p class="text-center">
										Copyright © 2023. All rights reserved.
									</p>
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
			<div class="container text-center">
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-6">
						<div class="zoom-in-out-box ">
							<h2>
								<a class="text-decoration-none" href="/">
									Welcome to Trackify!
								</a>
							</h2>
						</div>
						<h5>Task Management Application</h5>
						<div
							data-aos="zoom-in"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							<img src={bg} class="rounded mx-auto d-block" alt="bg" />
						</div>
					</div>
					<div class="col-sm-12 col-md-12 col-lg-6">
						<div class="d-grid gap-2 col-6 mx-auto">
							<button class="btn btn-primary" type="button">
								<a class="text-decoration-none text-white" href="/auth">
									Login
								</a>
							</button>
							<button class="btn btn-primary" type="button">
								<a class="text-decoration-none text-white" href="/register">
									Register
								</a>
							</button>
						</div>
						<br />
						<br />
						<br />
						<form onSubmit={login}>
							<div class="form-floating mb-3">
								<input
									name="email"
									type="email"
									class="form-control"
									id="floatingInput"
									placeholder="name@example.com"
									required
								/>
								<label for="floatingInput">Email address</label>
							</div>
							<div class="form-floating">
								<input
									name="password"
									type="password"
									class="form-control"
									id="floatingPassword"
									placeholder="Password"
									required
								/>
								<label for="floatingPassword">Password</label>
							</div>
							<br />
							<br />
							<div class="row mb-4">
								<div class="col d-flex">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="form2Example31"
										/>
										<label class="form-check-label" for="form2Example31">
											Remember me
										</label>
									</div>
								</div>
								<div class="col">
									<a href="#!">Forgot password?</a>
								</div>
							</div>
							<button type="submit" class="btn btn-primary btn-block mb-4">
								Sign in
							</button>
						</form>
						<div class="text-center">
							<p>
								Not a member? <a href="/register">Register</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Auth;
