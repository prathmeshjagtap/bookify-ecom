import "./App.css";
import { Products, WishList, Cart, Home, Login } from "./frontend/pages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="/WishList" element={<WishList />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			<Link to="/">Home</Link> | <Link to="/products">Products</Link> |
			<Link to="/Cart">Cart</Link> | <Link to="/WishList">WishList</Link> |
			<Link to="/Login">Login</Link>
		</div>
	);
}

export default App;
