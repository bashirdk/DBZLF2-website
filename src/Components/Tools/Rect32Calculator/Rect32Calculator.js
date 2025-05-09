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
			red: 0,
			green: 0,
			blue: 0
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
	


	calculateRect32() {

	}
	

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
		
		let red = this.state.red;
		let green = this.state.green;
		let blue = this.state.blue;

		let rect32 = document.getElementById("rect32_value");
		if (rect32) {
			if ( (red >= 0 && red <= 255) && (green >= 0 && green <= 255) && (blue >= 0 && blue <= 255)) {
				rect32.innerHTML = (red * 65536) + (green * 256) + (blue * 1);
			} else {
				rect32.innerHTML = "Invalid Values. RGB values are between 0-255."
			}
		}

		return (
			<div>
				<Helmet>
					<title>Rect32 Calculator - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Tool used to determine defense values for characters to balance them." />
					<link rel="canonical" href="https://dbzlf2.com/tools/battle-mode-balancer/" />
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
								<td><input type="number" min="0" max="255" id="red" onChange={(e) => this.setRed(e.target.value)}></input></td>
								<td><input type="number" min="0" max="255" id="green" onChange={(e) => this.setGreen(e.target.value)}></input></td>
								<td><input type="number" min="0" max="255" id="blue" onChange={(e) => this.setBlue(e.target.value)}></input></td>
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

					<p style={{textAlign: "center"}}>Rect32: <span id="rect32_value"></span></p>




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
