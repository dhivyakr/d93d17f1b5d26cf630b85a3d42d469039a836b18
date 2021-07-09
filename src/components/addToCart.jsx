import React, { useState } from 'react'
import styled from 'styled-components';
import styles from '../css/addToCart.css';
import cartIcon from '../images/cartIcon.png';

const AddToCart = function(props) {
console.log(props.cartData);
	if(props.cartData.itemCount > 0)
	{
		return (
			<div className="cartDataContainer">
				<div className = "cartCont">
					<div className = "cartDataWrapper">
						<div className = "cartCount">
							{props.cartData.itemCount} items&nbsp;&nbsp;|
						</div>
						<div className = "cartPrice">
							Rp&nbsp;{props.cartData.itemPrice.toLocaleString()}
						</div>
					</div>
					<div className = "shippingText">
						Termasuk ongkos kirim
					</div>
				</div>
				<div className = "cartIcon">
					<img className = "cartImage" src = {cartIcon}>
					</img>
				</div>
			</div>
		)
	}
	else
	{
		return <></>
	}
}
export default AddToCart;