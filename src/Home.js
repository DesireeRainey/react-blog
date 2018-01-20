import React, { Component } from 'react';
import Widget from './Widget';
import './App.css';

class Home extends Component {
  constructor(props){
	super(props)
	this.state = {
		shakeSpeare: "",
		zipcode: "",
		value: "",
		weather: {},
    main: ""
	}
	this.handleChange =
		this.handleChange.bind(this);
	this.handleSubmit =
		this.handleSubmit.bind(this);
  }
  handleChange(event) {
  	this.setState({zipcode: event.target.value});
 	  	console.log('The weather in your zip code is: ' + this.state.zipcode);
  }

  handleSubmit(event) {
  	event.preventDefault();
    console.log(this.state.zipcode)
	var base = this
	let weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=" + this.state.zipcode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98"
	fetch(weatherApi)
		.then((response) => response.json())
    .then((json) => {
      console.log(json)
			base.setState({
				weather: json
			})
		})
  }


  componentDidMount(){
	var base = this

	let poemApi = "http://ShakeItSpeare.com/api/poem"
	fetch(poemApi)
		.then((response) => {
			return response.json()
		}).then((json) => {
			base.setState({shakeSpeare: json.poem});
		}).catch((ex) => {
			console.log('ERROR', ex);
		})
  }

   render() {
   	let poetry = this.state.shakeSpeare;
   	if (!this.state.shakeSpeare){
   		return (
   			<div>
   			<h1>Loading...</h1>
   			</div>
   		)
   	}
    return (
      <div className="Home">
      <form className="weather" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
              <input type="submit" value="Get My Forecast!" />
          </form>
      <Widget zipcode={this.state.zipcode} weather={this.state.weather} />
      	<h2>This is my fave Shakespeare poem:</h2>
     	{poetry}
      </div>
    );
  }
}

export default Home;
