import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Event2 from './Components/Event2';
import Gallery from './Components/Gallary';
import Home from './Components/Home';

import Sponsor from './Components/Sponsor';
import PaymentStatus from './Components/Payments/PaymentStatus';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LoginForm from './Components/Auth/LoginForm';
import ForgotPass from './Components/Auth/ForgotPass';
import UserInput from './Components/Auth/UserInput';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/events' element={<Event2 />} />
				<Route exact path='/gallery' element={<Gallery />} />

				<Route exact path='/Sponsors' element={<Sponsor />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/userinput' element={<UserInput />} />
				<Route path='/forgot' element={<ForgotPass />} />
				<Route exact path='/status/:orderId' element={<PaymentStatus />} />
			</Routes>
		</div>
	);
}

export default App;
