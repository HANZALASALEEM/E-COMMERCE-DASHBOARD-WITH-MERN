import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<h1>Product</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
