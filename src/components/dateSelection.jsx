import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../css/dateSelection.css';
const Button = styled.button`
  background: ${props => props.selected ? "gray" : "white"};
  color: ${props => props.selected ? "white" : "gray"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  width: 50%;
`
const DateSelection = function(props) {
  let selectedDate = props.dates[0];
  const[date, setDate] = useState(
    {displayDate: selectedDate.displayDate,
    displayName: selectedDate.displayName,
    displayMonth: selectedDate.displayMonth,
    displayYear: selectedDate.displayYear}
  );
  const[mealTime, setmealTime] = useState("lunch");
    return (
    <div>
      <div className="dateContainer">        
        {
          props.dates.map(function(d, idx)
          {
            return (<div id= {"id_date_" + idx} className={"dateContent " + ((d.displayState === "disabled") ? "disabled" : "") + ((date.displayDate === d.displayDate) ? "selected" : "")}  onClick={() => setDate({displayDate: d.displayDate, displayName: d.displayName, displayMonth: d.displayMonth, displayYear: d.displayYear})}>
            <span className="displayDay">{d.displayDay}</span><br></br>
            <span className="displayDate">{d.displayDate}</span></div>)
          })
        }
      </div>
      <div className="flexContainer">
          <Button selected = {(mealTime==="lunch") ? true : false} onClick={() => setmealTime("lunch")}>Lunch</Button>
          <Button selected = {(mealTime==="dinner") ? true : false} onClick={() => setmealTime("dinner")}>Dinner</Button>
      </div>
      <div className="selectedDate">
        <p>{date.displayName}.{date.displayDate} {date.displayMonth} {date.displayYear}</p> 
      </div>
    </div>
    );
  }
  export default DateSelection;