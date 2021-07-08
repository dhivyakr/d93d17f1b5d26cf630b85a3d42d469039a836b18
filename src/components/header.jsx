import React, { Component } from 'react'
import styled from 'styled-components'
import styles from '../css/header.css'; 

const Button = styled.button`
  background: ${props => props.selected ? "gray" : "white"};
  color: ${props => props.selected ? "white" : "gray"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  width: 50%;
`

export default class Header extends React.Component {

  render() {
    return (
    <div>
      <div className="dateContainer">        
            {
              this.props.dates.map(function(d, idx)
              {
                return (<div className={"dateContent " + ((d.displayState == "disabled") ? "disabled" : "") + ((idx == 0) ? "selected" : "")}>
                <span className="displayDay">{d.displayDay}</span><br></br>
                <span className="displayDate">{d.displayDate}</span></div>)
              })
            }
      </div>
      <div className="flexContainer">
          <Button selected>Lunch</Button>
          <Button>Dinner</Button>
      </div>
    </div>
    )
  }
}