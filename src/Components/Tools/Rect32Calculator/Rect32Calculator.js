import "./Rect32Calculator.css";

import React, { Component } from "react";
import Helmet from "react-helmet";


import AdComponent from "../../AdComponent/AdComponent";

class Rect32Calculator extends Component {

	constructor(props) {
		super(props);
		this.setRed   = this.setRed.bind(this);
		this.setGreen = this.setGreen.bind(this);
		this.setBlue  = this.setBlue.bind(this);
		

		this.state = {
			red: 255,
			green: 255,
			blue: 255,
			rect32: 16777215
		};
	
	}

	setRed(value) {
		this.setState({red: value});
	}
	setGreen(value) {
		this.setState({green: value});
	}
	setBlue(value) {
		this.setState({blue: value});
	}
	setRect32(value) {
		this.setState({rect32: value});
	}


	componentDidUpdate(prevProps, prevState) {
    const { red, green, blue } = this.state;
    if (
      prevState.red !== red ||
      prevState.green !== green ||
      prevState.blue !== blue
    ) {
			const rect32Red    = document.getElementById("rect32_red");
			const rect32Green  = document.getElementById("rect32_green");
			const rect32Blue   = document.getElementById("rect32_blue");
			const rect32Colour = document.getElementById("rect32_colour");

			rect32Red.style.backgroundColor   = `rgb(${red}, 0, 0)`;
			rect32Green.style.backgroundColor = `rgb(0, ${green}, 0)`;
			rect32Blue.style.backgroundColor  = `rgb(0, 0, ${blue})`;
			rect32Colour.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		}
		
  }
	
	handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  };

	

	render() {
		
		// let slider = document.getElementById("redRange");
		// var output = document.getElementById("red");
		// if (slider){
		// 	console.log(slider.value);
		// 	console.log('output', output);
		// 	output.value = slider.value; // Display the default slider value
		
		// 	// Update the current slider value (each time you drag the slider handle)
		// 	slider.oninput = function() {
		// 	output.innerHTML = this.value;
		// 	}
		// }
		
		const { red, green, blue } = this.state;

		let rect32Value = document.getElementById("rect32_value");
		if (rect32Value) {
			if ( (red >= 0 && red <= 255) && (green >= 0 && green <= 255) && (blue >= 0 && blue <= 255)) {
				rect32Value.innerHTML = (red * 65536) + (green * 256) + (blue * 1);
			} else {
				rect32Value.innerHTML = "Invalid Values. RGB values are between 0-255."
			}
		}


		// let rect32Colour = document.getElementById("rect32_colour");
		// if (rect32Colour) {
		// 	rect32Colour.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
		// }

		return (
			<div>
				<Helmet>
					<title>Rect32 Calculator - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Tool used to get the rect32 value using RGB values." />
					<link rel="canonical" href="https://dbzlf2.com/tools/rec32-calculator" />
				</Helmet>

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>

				<h1 className="text-white">Rect32 Calculator</h1>

				<div className="text-white">

				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">

					<table id="rect32_table">
						<thead>
						<tr style={{textAlign:"center"}}>
								<td>Red</td>
								<td>Green</td>
								<td>Blue</td>
							</tr>
						</thead>
						<tbody>
							<tr style={{textAlign:"center"}}>
								<td><input type="number" min="0" value={red} max="255" id="red" onChange={(e) => this.setRed(e.target.value)}></input></td>
								<td><input type="number" min="0" value={green} max="255" id="green" onChange={(e) => this.setGreen(e.target.value)}></input></td>
								<td><input type="number" min="0" value={blue} max="255" id="blue" onChange={(e) => this.setBlue(e.target.value)}></input></td>
							</tr>
							<tr style={{textAlign:"center"}}>
								<td> <div id="rect32_red"></div> </td>
								<td> <div id="rect32_green"></div> </td>
								<td> <div id="rect32_blue"></div> </td>
							</tr>
							{/* <tr>
								<td><div id="red_colour"></div></td>
								<td><div id="green_colour"></div></td>
								<td><div id="blue_colour"></div></td>
							</tr>
							<tr>
								<td>a
									<div class="slidecontainer"> <input type="range" min="0" max="255" value="0" class="slider" id="redRange"></input></div>
								</td>
								<td>
									<div class="slidecontainer"> <input type="range" min="0" max="255" value="0" class="slider" id="greenRange"></input></div>
								</td>
								<td>
									<div class="slidecontainer"> <input type="range" min="0" max="255" value="0" class="slider" id="blueRange"></input></div>
								</td>
							</tr> */}
						</tbody>

					</table>

					<br></br>

					<p style={{textAlign: "center"}}>Rect32: <span id="rect32_value">16777215</span></p>

					<br></br>

					<div style={{textAlign: "center", width: "100%"}}> 
						<div id="rect32_colour"></div>
					</div>



					</div>
				</section>
 

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>


				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">

					<h3>Changelog</h3>

					<table id="rect32_changelog">
						<thead>
							<tr>
								<td>Date</td>
								<td>Update</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>May 11, 2025</td>
								<td> <ul>	<li> Added a rectangle box for each colour to show the shade of red / green / blue. </li>	</ul>	</td>
							</tr>
							<tr>
								<td>May 10, 2025</td>
								<td> <ul>	<li> Added box that changes colour based on RGB values selected. </li>	</ul>	</td>
							</tr>
							<tr>
								<td>May 9, 2025</td>
								<td> <ul>	<li> Basic funtionality completed</li>	</ul>	</td>
							</tr>
						</tbody>
					</table>


					</div>
				</section>


				</div>
			</div>
		);
	}
}

export default Rect32Calculator;
