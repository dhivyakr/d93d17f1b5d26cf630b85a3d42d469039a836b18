import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.selected ? "gray" : "white"};
  color: ${props => props.selected ? "white" : "gray"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  width: 50%;
`
const DateSelection = function(props) {
  const[date, setDate] = useState(0);
  const[mealTime, setmealTime] = useState("lunch");
    return (
    <div>
      <div className="dateContainer">        
            {
              props.dates.map(function(d, idx)
              {
                return (<div id= {"id_date_" + idx} className={"dateContent " + ((d.displayState === "disabled") ? "disabled" : "") + ((date === idx) ? "selected" : "")}  onClick={() => setDate(idx)}>
                <span className="displayDay">{d.displayDay}</span><br></br>
                <span className="displayDate">{d.displayDate}</span></div>)
                setDate(0);
              })
            }
      </div>
      <div className="flexContainer">
          <Button selected = {(mealTime==="lunch") ? true : false} onClick={() => setmealTime("lunch")}>Lunch</Button>
          <Button selected = {(mealTime==="dinner") ? true : false} onClick={() => setmealTime("dinner")}>Dinner</Button>
      </div>
    </div>
    );
  }
  export default DateSelection;