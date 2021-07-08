import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Header from './components/header'

class App extends Component {
	constructor() {
		super()
   	let startDate = new Date();
    let new_date = startDate;
    let dayMap = {"Sun": "Min", "Mon": "Sen", "Tue": "Sel", "Wed": "Rab", "Thu": "Kam", "Fri": "Jum", "Sat": "Sab"};
    let dayNames = {"Min": "Minggu", "Sen": "Senin", "Sel": "Selasa", "Rab": "Rabu", "Kam": "Kamis", "Jum": "Jumat", "Sab": "Sabtu"};
   	this.state = {dates: []};
   	for(let i=0; i<14; i++)
  	{
  		if(i!==0)
      {
         new_date = moment(startDate, "DD-MM-YYYY").add(1, 'day'); 
      }
      else
      {
        new_date = moment(startDate, "DD-MM-YYYY")
      }
      
  	  let date = new_date.format('DD');
  	  let day = dayMap[new_date.format('ddd')];
      let displayName = dayNames[day];
      let dateState = (day === "Sab" || day === "Min") ? "disabled" : "enabled";
      
  	  this.state.dates[i] = {displayDate: date, displayDay: day, displayState: dateState,displayName: displayName};
      startDate = new_date;
  	}
   	console.log(this.state.dates);
  }
  render() {
    return (
      <div className="App">
        <Header dates={this.state.dates}/>
      </div>
    );
  }
  
}

export default App;
