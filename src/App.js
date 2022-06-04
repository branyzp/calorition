import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchPage from './Pages/SearchPage';
import BMRcalculator from './Pages/BMRcalculator';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Meal%20Planner" element={<SearchPage />} />
					<Route path="BMR%20Calculator" element={<BMRcalculator />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
