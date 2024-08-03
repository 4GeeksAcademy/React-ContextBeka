import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light d-flex justify-content-end">
			<div className="ml-auto">
				<Link to="/demo">
					<button id="btnAddContact" className="btn ">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
