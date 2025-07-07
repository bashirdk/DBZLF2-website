import "./TournamentCalculator.css";

import React, { Component } from "react";
import Helmet from "react-helmet";


import Characters from "../../../data/characters.json";
// import Accordion from "./Accordion/Accordion"

import AdComponent from "../../AdComponent/AdComponent";

class TournamentCalculator extends Component {

	constructor(props) {
		super(props);
		
		const characters = Characters.filter((character) => character.stats.dp);

		this.state = {
			characters
		};
	}


	render() {
		const characters = this.state.characters;

		const characterGrid = characters.map((character) => (
			<div className="inline-block relative">
				<span className="dp-value">{character.stats.dp}</span>
				<img 
						src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
						alt={`face pic of ${character.name}`}
						className="pixel"
						onClick={() => this.setCharacter1(character)}
					/>
			</div>
		));
		
		return (
			<div>
				<Helmet>
					<title>Tournament DP Calculator - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Tool used to determine defense values for characters to balance them." />
					<link rel="canonical" href="https://dbzlf2.com/tools/battle-mode-balancer/" />
				</Helmet>

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>

				<h1 className="text-white">Tournament DP Calculator</h1>

				<div className="text-white">

				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">

						<div className="tournament-grid text-center my-5">
							<h4> Select a Character </h4>
							{characterGrid}
						</div>

					</div>
					</section>
				</div>
			</div>
		);
	}
}

export default TournamentCalculator;
