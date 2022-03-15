import React from "react";
import "./cartPage.css";

function ProductCardHorizontal({ product }) {
	return (
		<div className="card__horizontal">
			<img className="card__image" src="../../assets/Biography.jpg" />
			<div className="card__horizonatal__info">
				<div className="card__titles__horizontal">
					<h2>{product.title}</h2>
					<p>{product.author}</p>
				</div>
				<div className="card__price">
					<div className="current__price">
						<i className="fas fa-rupee-sign fa-1x"></i>
						<span>{product.price}</span>
					</div>
					<div className="previous__price">
						<i className="fas fa-rupee-sign fa-1x"></i>
						<span>{product.previousPrice}</span>
					</div>
				</div>
				<div className="quantity">
					<button className="quantity__minus">-</button>
					<input className="quantity__input" type="number" value="1" />
					<button className="quantity__plus">+</button>
				</div>
				<button className="btn btn-primary btn__horizontal">Add to cart</button>
				<button className="btn btn-outline-dark btn__horizontal">
					Move to wishlist
				</button>
			</div>
		</div>
	);
}

export default ProductCardHorizontal;
