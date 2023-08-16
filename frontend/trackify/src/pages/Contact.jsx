import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../components/Layout';
import logo from '../../logo.png';
import { TiTick } from 'react-icons/ti';
import { IoMdArrowRoundBack } from 'react-icons/io';
import toast from 'react-hot-toast';

function Contact() {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_9eir8db',
				'template_kgaif8b',
				form.current,
				'D0F8KBJBPp4MKKYrK'
			)
			.then(
				result => {
					console.log(result.text);
					toast.success('Message Sent!');
				},
				error => {
					console.log(error.text);
					toast.success('Error!');
				}
			);
	};

	return (
		<Layout>
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
				<br />
				<br />
			</div>
			<div class="container card text-center">
				<div class="card-header">
					<h2>Contact Us</h2>
				</div>
				<div class="card-body">
					<form ref={form} onSubmit={sendEmail}>
						<div class="mb-3">
							<input
								name="user_name"
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Enter your full name"
								required
							/>
						</div>
						<div class="mb-3">
							<input
								name="user_email"
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="Enter your email address"
								required
							/>
						</div>
						<div class="mb-3">
							<textarea
								name="message"
								class="form-control"
								id="exampleFormControlTextarea1"
								placeholder="Enter your message here....."
								rows="3"
							></textarea>
						</div>
						<button class="btn btn-primary" type="submit" value="Send">
							Send
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
					<IoMdArrowRoundBack /> Back to Home page
				</a>
			</button>
		</Layout>
	);
}

export default Contact;
