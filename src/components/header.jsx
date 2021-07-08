import React, { useRef } from 'react';
import styled from 'styled-components'
import styles from '../css/header.css';
import DateSelection from './dateselection.jsx'; 
import Modal from './locationmodal.jsx';
import locationData from '../js/maps.js'

const Header = function(props) {
	const modal = useRef(null)
  return (
  <div>
	  <div>
	  	<button onClick={() => modal.current.open()}>open me</button>
	  </div>
	  <Modal ref={modal}>
	  	<div className="locationWrapper">
		  	<div className="locationTitle">cek makanan yang tersedia di lokasi kamu</div>	
		  	<div>
		  		{locationData.map((locationData) => <div className="addressContent">{locationData.place_name}<br></br>{locationData.formatted_address}</div>
		  		)}
		  	</div>
		</div>
	  </Modal>
	  <DateSelection dates = {props.dates}/>
  </div>
  );
}
export default Header;