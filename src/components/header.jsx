import React, { useRef } from 'react';
import styled from 'styled-components'
import styles from '../css/header.css';
import DateSelection from './dateselection.jsx'; 
import Modal from './locationmodal.jsx';
import locationData from '../js/maps.js';
import backArrow from '../images/backArrow.png';
import chevron from '../images/chevron.png';
import mapIcon from '../images/mapIcon.png';
import mapPointer from '../images/mapPointer.png';

const Header = function(props) {
	const modal = useRef(null)
  return (
  <div>
	  <div>
	  	<div onClick={() => modal.current.open()}>  
	  		<div className = "deliveryAddress">
	  			<div className = "backArrow">
		  			<img className = "arrowImage" src = {backArrow}>
		  			</img>
	  			</div>		
	  			<div className = "locationCont">
		  			<div className = "locationTitle">ALAMAT PENGANTARAN</div>
		  			<div className = "deliveryLocation">Tokopedia Tower</div>
	  			</div>
	  			<div className = "chevron">
		  			<img className = "chevronImage" src = {chevron}>
		  			</img>
	  			</div>
  			</div>
	  	</div>
	  </div>
	  <Modal ref={modal}>
	  	<div className="locationWrapper">
		  	<div className="locationTitleTxt">cek makanan yang tersedia di lokasi kamu</div>
		  	<input class="locationSearch" type="text">
		  	</input>
		  	<div className="mapPointer">
  				<img className="mapPointerImg" src={mapPointer}/>
  			</div>
		  	<div>
		  		{locationData.map((locationData) => 
			  		<div className="addressContent">
			  			<div className="mapIcon">
			  				<img className="mapIconImg" src={mapIcon}/>
			  			</div>
			  			<div className="addressWrapper">
				  			<div className="place">{locationData.place_name}</div>
				  			<div className="address">{locationData.formatted_address}</div>
			  			</div>
		  			</div>
		  		)}
		  	</div>
		</div>
	  </Modal>
	  <DateSelection dates = {props.dates}/>
  </div>
  );
}
export default Header;