import "./App.css";
import {
	Products,
	WishList,
	Cart,
	Home,
	Login,
	Signup,
} from "./frontend/pages";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js";
import { FilterProvider } from "./frontend/contexts";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="/WishList" element={<WishList />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
