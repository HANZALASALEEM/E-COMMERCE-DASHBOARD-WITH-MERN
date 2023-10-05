import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import SignUp from "./screens/signUp/signUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<h1>Product</h1>} />
					<Route path="/addProduct" element={<h1>Product</h1>} />
					<Route path="/updateProduct" element={<h1>Product</h1>} />
					<Route path="/profile" element={<h1>Product</h1>} />
					<Route path="/logout" element={<h1>Product</h1>} />
					<Route path="/signUp" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
