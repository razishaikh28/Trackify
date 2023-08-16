import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import Auth from './pages/Auth';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Register from '../src/components/auth/Register';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Toaster
				position="top-right"
				toastOptions={{
					style: {
						fontSize: '1.2rem',
					},
				}}
			/>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/" element={<Home />} />
					<Route path="/edit-profile" element={<EditProfile />} />
				</Route>
				<Route path="/auth" element={<Auth />} />
				<Route path='/register' element={<Register/>}/>
				<Route path='/contact-us' element={<Contact/>}/>
			</Routes>
		</>
	);
}

export default App;
