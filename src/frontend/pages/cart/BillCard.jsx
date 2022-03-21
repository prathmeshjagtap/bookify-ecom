import React from "react";
import "./cartPage.css";

function BillCard() {
	return (
		<div>
			<div className="cart__bill">
				<h2>Price Details</h2>
				<ul className="price__details">
					<li>
						<p>Price(2 items)</p>
						<p>
							<i className="fas fa-rupee-sign fa-1x"></i>4999
						</p>
					</li>
					<li>
						<p>Discount</p>
						<p>
							-<i className="fas fa-rupee-sign fa-1x"></i>1999
						</p>
					</li>
					<li>
						<p>Delivery Charges</p>
						<p>
							<i className="fas fa-rupee-sign fa-1x"></i>499
						</p>
					</li>
					<li>
						<p>Total Amount</p>
						<p>
							<i className="fas fa-rupee-sign fa-1x"></i>3499
						</p>
					</li>
				</ul>
				<p class="bill__save">
					You will save <i className="fas fa-rupee-sign fa-1x"></i>1999 on this
					order
				</p>
				<button className="btn btn-primary card__btn">Place Order</button>
			</div>
		</div>
	);
}

export default BillCard;
