import './App.css';
import SearchBar from './Components/SearchBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log('API_ID is ' + API_ID);
console.log('API Key is ' + API_KEY);

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
