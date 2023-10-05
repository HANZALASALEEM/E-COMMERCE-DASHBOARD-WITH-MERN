import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signUp = () => {
		console.log(name);
	};

	return (
		<div className="Container">
			<h1 className="heading">Sign Up</h1>
			<input
				className="input"
				value={name}
				type="text"
				placeholder="Name"
				onChange={(text) => {
					setName(text.target.value);
				}}
			/>
			<input
				className="input"
				value={email}
				type="text"
				placeholder="Email"
				onChange={(text) => {
					setEmail(text.target.value);
				}}
			/>
			<input
				className="input"
				value={password}
				type="password"
				placeholder="Password"
				onChange={(text) => {
					setPassword(text.target.value);
				}}
			/>
			<button className="button" onClick={signUp}>
				Sign Up
			</button>
		</div>
	);
};

export default SignUp; // Changed the export name to "SignUp"
