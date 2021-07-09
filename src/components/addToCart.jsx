import React, { useState } from 'react'
import styled from 'styled-components';
import styles from '../css/addToCart.css';

const AddToCart = function(props) {
console.log(props.cartData);
	if(props.cartData.itemCount > 0)
	{
		return (
			<div className="cartDataContainer">
				<div classNAme = "cartCount">
					{props.cartData.itemCount} items
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