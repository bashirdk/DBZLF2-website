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
			green: 0,
			blue: 0,
			rect32: 16777215,
			sizeMultiplier: 3,
			spriteWidth: 79,
			bpointWidth: 1,
			bpointHeight: 3,
			bpointTop: 35,
			bpointLeft: 36,
		};
	
	}

	setRed(value) {
		this.setState({red: value});
		document.getElementById("redSlider").value = value;
	}
	setGreen(value) {
		this.setState({green: value});
		document.getElementById("greenSlider").value = value;
	}
	setBlue(value) {
		this.setState({blue: value});
		document.getElementById("blueSlider").value = value;
	}
	setRect32(value) {
		this.setState({rect32: value});
	}

	setSizeMultiplier(value) {
		this.setState({sizeMultiplier: value});
		const { spriteWidth, bpointWidth, bpointHeight, bpointTop, bpointLeft } = this.state;
		const sprite= document.getElementsByClassName("rect32-char")[0];
		const bpoint = document.getElementsByClassName("bpoint")[0];
		sprite.style.width  = `${spriteWidth * value}px`;
		bpoint.style.width  = `${bpointWidth * value}px`;
		bpoint.style.height = `${bpointHeight * value}px`;
		bpoint.style.top    = `${bpointTop * value}px`;
		bpoint.style.left   = `${bpointLeft * value}px`;
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
			const bpointColor  = document.getElementsByClassName("bpoint")[0];

			rect32Red.style.backgroundColor   = `rgb(${red}, 0, 0)`;
			rect32Green.style.backgroundColor = `rgb(0, ${green}, 0)`;
			rect32Blue.style.backgroundColor  = `rgb(0, 0, ${blue})`;
			rect32Colour.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
			bpointColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		}
		
  }
	
	handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  };
	

	render() {			
		const { red, green, blue } = this.state;

		let rect32Value = document.getElementById("rect32_value");
		if (rect32Value) {
			if ( (red >= 0 && red <= 255) && (green >= 0 && green <= 255) && (blue >= 0 && blue <= 255)) {
				rect32Value.innerHTML = (red * 65536) + (green * 256) + (blue * 1);
			} else {
				rect32Value.innerHTML = "Invalid Values. RGB values are between 0-255."
			}
		}

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
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-5 mx-0">

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
								<tr style={{textAlign:"center"}}>
									<td> <input type="range" className="colorSlider" id="redSlider" name="volume" min="0" max="255" value={red} onChange={(e) => this.setRed(e.target.value)}></input> </td>
									<td> <input type="range" className="colorSlider" id="greenSlider" name="volume" min="0" max="255" value={green} onChange={(e) => this.setGreen(e.target.value)}></input> </td>
									<td> <input type="range" className="colorSlider" id="blueSlider" name="volume" min="0" max="255" value={blue} onChange={(e) => this.setBlue(e.target.value)}></input></td>
								</tr>
							</tbody>

						</table>

						<br></br>

						<p style={{textAlign: "center"}}>Rect32: <span id="rect32_value">16777215</span></p>

						<br></br>

						<div style={{textAlign: "center", width: "100%"}}> 
							<div id="rect32_colour"></div>
						</div>

						<div style={{textAlign: "center", width: "100%", margin: "20px"}}>
							<button className={`rect32-size-btn ${this.state.sizeMultiplier === 1 ? 'active' : ''}`} onClick={(e) => this.setSizeMultiplier(1)}>1x</button>
							<button className={`rect32-size-btn ${this.state.sizeMultiplier === 2 ? 'active' : ''}`} onClick={(e) => this.setSizeMultiplier(2)}>2x</button>
							<button className={`rect32-size-btn ${this.state.sizeMultiplier === 3 ? 'active' : ''}`} onClick={(e) => this.setSizeMultiplier(3)}>3x</button>
							<button className={`rect32-size-btn ${this.state.sizeMultiplier === 4 ? 'active' : ''}`} onClick={(e) => this.setSizeMultiplier(4)}>4x</button>
							<button className={`rect32-size-btn ${this.state.sizeMultiplier === 5 ? 'active' : ''}`} onClick={(e) => this.setSizeMultiplier(5)}>5x</button>
							<br></br><br></br>
							<div style={{width: "fit-content", textAlign: "center", position: "relative", margin: "0 auto"}}>
								<span className="bpoint"></span>
								<img 
									src={require(`../../../images/tools/ssgoku.png`)}
									alt={`battle mode balancer tool`}
									className="rect32-char"
								/>
							</div>
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
								<td>May 14, 2025</td>
								<td> <ul>	<li> Add option to change sprite size from 1x to 5x. </li>	</ul>	</td>
							</tr>
							<tr>
								<td>May 13, 2025</td>
								<td> <ul>	<li> Add SS Goku sprite to see how the bpoint colour looks. </li>	</ul>	</td>
							</tr>
							<tr>
								<td>May 12, 2025</td>
								<td> <ul>	<li> Added a slider to give more options on how to select RGB values. </li>	</ul>	</td>
							</tr>
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
