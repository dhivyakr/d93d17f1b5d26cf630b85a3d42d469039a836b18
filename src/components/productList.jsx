import React, { useState } from 'react'
import styled from 'styled-components';
import styles from '../css/productList.css';
import productData from '../js/products.js';
import AddToCart from './addToCart.jsx'

const Button = styled.button`
  background: #f9423a;
  color: #ffffff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  border-radius: 5px;
  width: 60px;
`
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const ProductList = function() {
const [cartData, setCartData] = useState(
	{itemCount: 0,
    itemPrice: 0}
);
	return (
	<div>
		<div className="plpContainer">
		{
		  	productData.map(function(d, idx)
	        {   console.log(images[d.pdtImage].default);
	        	return (
	            	<div id= {"id_product_" + idx} className={"productContainer"}>
	            		<img className = "productImage" src = {images[d.pdtImage].default}/>
	            		<div className = "pdtDetailsContainer">
		            		<div className = "ratingWrapper">	
		            			<div className = "pdtRating">{d.rating}</div>
		            			<div className = "ratingStar">
						  			<img className = "ratingImage" src = {images['rating.png'].default}>
						  			</img>
					  			</div>
				  			</div>
	            			<div className = "pdtName">{d.pdtName}</div>
	            			<div className = "pdtDetWrapper">
		            			<div className = "pdtPartner">by {d.pdtPartner}</div>
		            			<div className = "seperator"> . </div>
		            			<div className = "pdtOwner">{d.pdtOwner}</div>
	            			</div>
	            			<div className = "flexCont">
	            				<div className = "pdtPrice">{d.currency}&nbsp;{d.price.toLocaleString()}</div>
	            				<Button className="addToCartBtn" onClick={() => setCartData({itemCount: cartData.itemCount + 1, itemPrice: cartData.itemPrice + d.price})}>ADD+</Button>
            				</div>
	            		</div>
	            	</div>)
	        })

		}
		</div>
		<div>
			<AddToCart cartData={cartData}></AddToCart>
		</div>
	</div>
	)

	
}
export default ProductList;