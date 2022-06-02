import './App.css';
import SearchBar from './Components/SearchBar';
import Home from './Pages/Home';
import About from './Pages/About';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchPage from './Pages/SearchPage';

function App() {
	

	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="search" element={<SearchPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
