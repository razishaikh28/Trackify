import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/nav/Navbar';
import TaskList from '../components/task/TaskList';
import logo from '../../logo.png';
import { TiTick } from 'react-icons/ti';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Home() {
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
									<a class="nav-link active" aria-current="page" href='/register'>
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
			</div>
			<Navbar />
			<TaskList />
		</Layout>
	);
}
export default Home;
