import React from 'react'
import styled from 'styled-components';
import styles from '../css/productList.css';
import productData from '../js/products.js'

const Button = styled.button`
  background: #f9423a;
  color: #ffffff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  width: 50%;
`
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const ProductList = function(props) {
	return (
		<div className="plpContainer">
		{
		  	productData.map(function(d, idx)
	        {   console.log(images[d.pdtImage].default);
	        	return (
	            	<div id= {"id_product_" + idx} className={"productContainer"}>
	            		<img className = "productImage" src = {images[d.pdtImage].default}/>
	            		<div className = "pdtDetailsContainer">
	            			<div className = "pdtRating">{d.rating}</div>
	            			<div className = "pdtName">{d.pdtName}</div>
	            			<div className = "pdtDetWrapper">
		            			<div className = "pdtPartner">by {d.pdtPartner}</div>
		            			<div className = "seperator"> . </div>
		            			<div className = "pdtOwner">{d.pdtOwner}</div>
	            			</div>
	            			<div className = "pdtPrice">{d.currency}{d.price}</div>
	            		</div>
		    			<Button className="addToCartBtn">ADD+</Button>
	            	</div>)
	        })

		}
		</div>
	)
}
export default ProductList;