import React from 'react';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink as Link
  } from "react-router-dom";

import AboutUs from '../pages/AboutUs';
import MyNotes from '../pages/MyNotes';
import Settings from '../pages/Settings';

const Header = () => {
	return (
		<Router>
			<div className='header'>
				<h1>Take Some Notes</h1>
				<div>
					<Link exact activeClassName='active' to='/' className='navigation'>My Notes</Link>
					<Link activeClassName='active' to='/about' className='navigation'>About Us</Link>
					<Link activeClassName='active' to='/settings' className='navigation'>Settings</Link>
				</div>
				
			</div>

			{<Routes>
				<Route path="/" element={<MyNotes />} />

            	<Route path="/about" element={<AboutUs />} />

				<Route path="/settings" element={<Settings />} />
			</Routes>}
	
		</Router>

	);
};

export default Header;