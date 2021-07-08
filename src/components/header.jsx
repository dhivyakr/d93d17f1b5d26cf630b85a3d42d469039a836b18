import React, { useState } from 'react';
import styled from 'styled-components'
import styles from '../css/header.css';
import DateSelection from './dateSelection.jsx'; 

const Header = function(props) {
  return (
    <DateSelection dates = {props.dates}/>
  );
}
export default Header;