import React from "react";
import { Navbar, ProductCard } from "../../components";
import BillCard from "./BillCard";
import "./cartPage.css";
import ProductCardHorizontal from "./ProductCardHorizontal";

function Cart() {
	return (
		<div>
			<Navbar />
			<main className="cart__conatainer">
				<div className="cart__items">
					<ProductCardHorizontal />
				</div>
				<BillCard />
			</main>
		</div>
	);
}

export { Cart };
