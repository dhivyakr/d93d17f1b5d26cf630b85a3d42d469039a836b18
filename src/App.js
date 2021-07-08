import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Header from './components/header'

class App extends Component {
	constructor() {
		super()
   	var startdate = new Date();
    var dayMap = {"Sun": "Min", "Mon": "Sen", "Tue": "Sel", "Wed": "Rab", "Thu": "Kam", "Fri": "Jum", "Sat": "Sab"};
   	this.state = {dates: []};
   	for(let i=0; i<14; i++)
  	{
  		if(i!=0)
      {
        var new_date = moment(startdate, "DD-MM-YYYY").add(1, 'day'); 
      }
      else
      {
        var new_date = moment(startdate, "DD-MM-YYYY")
      }
      
  	  var date = new_date.format('DD');
  	  var day = dayMap[new_date.format('ddd')];
      var dateState = (day == "Sab" || day == "Min") ? "disabled" : "enabled";
      
  	  this.state.dates[i] = {displayDate: date, displayDay: day, displayState: dateState};
      startdate = new_date;
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
