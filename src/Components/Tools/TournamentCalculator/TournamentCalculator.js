import "./TournamentCalculator.css";

import React, { Component } from "react";
import Helmet from "react-helmet";


import Characters from "../../../data/characters.json";
// import Accordion from "./Accordion/Accordion"

import AdComponent from "../../AdComponent/AdComponent";

class TournamentCalculator extends Component {

	static ROUND_ONE_MAX_DP 		 = 100;
	static QUARTER_FINALS_MAX_DP = 200;
	static SEMI_FINALS_MAX_DP		 = 500;
	static FINALS_MAX_DP				 = 1200;

	static ROUND_ONE_MAX_CHARACTERS 		 = 3;
	static QUARTER_FINALS_MAX_CHARACTERS = 3;
	static SEMI_FINALS_MAX_CHARACTERS 	 = 5;
	static FINALS_MAX_CHARACTERS 				 = 5;

	constructor(props) {
		super(props);
		
		const characters = Characters.filter((character) => character.stats.dp);


		this.state = {
			characters,
			roundOneSelected: [],
			quarterFinalsSelected: [],
			semiFinalsSelected: [],
			finalsSelected: [],
			currentRoundSelected: '',
			currentRoundDPTotal: 0,
			currentRoundDPRemaining: 0,
		};
	}

	getCharacterImage(character) {
		// src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
		return `${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`;
	}

	getTotalDP(array) {
		let total = 0;
		for(let i=0; i < array.length; i++) {
			console.log('array i', array[i]);
			console.log('array i stats dp', array[i].stats.dp);
			total = total + array[i].stats.dp;
		}
		return total;
	}

	renderCharacters(maxCharacters) {
		const rows = [];
		for( let i=0; i < maxCharacters; i++) {
			rows.push(
				this.state.roundOneSelected[i] ? 
					<img 
						src={require(`../../../images/face/${this.getCharacterImage(this.state.roundOneSelected[i])}.bmp`)}
						alt={`face pic of random`}
						className="pixel tournament-char my-1"
					/>
					:
					<img 
						src={require(`../../../images/face/random.bmp`)}
						alt={`face pic of random`}
						className="pixel tournament-char my-1"
					/>
			)
		}
		return rows;
	}

	// Helper method to get base character name (without variant suffix)
	getBaseCharacterName(character) {
		// Extract base name by removing variant suffixes like "(Weighted)", "(Agile)", etc.
		const baseName = character.name.replace(/\s*\([^)]*\)\s*$/, '');
		return baseName;
	}

	setCharacter(character) {
		console.log('roundOneSelected', this.state.roundOneSelected);
		// Check if character is already selected (same base name, same saga, AND same DP cost)
		const isAlreadySelected = this.state.roundOneSelected.some(
			selectedChar => 
				this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
				selectedChar.saga === character.saga && 
				selectedChar.stats.dp === character.stats.dp
		);
		
		if (isAlreadySelected) {
			// If already selected, remove it (deselect)
			const updatedSelection = this.state.roundOneSelected.filter(
				selectedChar => 
					!(this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
					  selectedChar.saga === character.saga && 
					  selectedChar.stats.dp === character.stats.dp)
			);
			this.setState({roundOneSelected: updatedSelection});
		} else {
			// Only add if we haven't reached the max
			if (this.state.roundOneSelected.length < TournamentCalculator.ROUND_ONE_MAX_CHARACTERS) {
				this.setState({roundOneSelected: [...this.state.roundOneSelected, character]});
			}
		}
	}

	// Helper method to check if a character is selected
	isCharacterSelected(character) {
		return this.state.roundOneSelected.some(
			selectedChar => 
				this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
				selectedChar.saga === character.saga && 
				selectedChar.stats.dp === character.stats.dp
		);
	}

	setCurrentRoundDP(round) {
		switch(round) {
			case 'Round One':
				return this.getTotalDP(this.state.roundOneSelected);
			case 'Quarter-Finals':
				return this.getTotalDP(this.state.quarterFinalsSelected);
			case 'Semi-Finals': 
				return this.getTotalDP(this.state.semiFinalsSelected);
			case 'Finals':
				return this.getTotalDP(this.state.finalsSelected);
		}
	}

	render() {
		const characters = this.state.characters;

		const characterGrid = characters.map((character) => (
			<div className="inline-block relative">
				<span className="dp-value">{character.stats.dp}</span>
				<img 
						src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
						alt={`face pic of ${character.name}`}
						className={`tournament-grid ${this.isCharacterSelected(character) ? 'disabled' : ''}`}
						onClick={ () => this.setCharacter(character)}
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
							<h4> Select your team { } </h4>
							{characterGrid}
						</div>

						<div>
							{	this.renderCharacters(TournamentCalculator.ROUND_ONE_MAX_CHARACTERS) }
							Round 1: ( {this.getTotalDP(this.state.roundOneSelected)} / {TournamentCalculator.ROUND_ONE_MAX_DP} )
						</div>
						
						<div>
							{	this.renderCharacters(TournamentCalculator.QUARTER_FINALS_MAX_CHARACTERS) }
							Quarter-Finals: ( {this.getTotalDP(this.state.quarterFinalsSelected)} / {TournamentCalculator.QUARTER_FINALS_MAX_DP} )
						</div>

						<div>
							{	this.renderCharacters(TournamentCalculator.SEMI_FINALS_MAX_CHARACTERS) }
							Semi-Finals: ( {this.getTotalDP(this.state.semiFinalsSelected)} / {TournamentCalculator.SEMI_FINALS_MAX_DP} )
						</div>

						<div>
							{	this.renderCharacters(TournamentCalculator.FINALS_MAX_CHARACTERS) }
							Finals: ( {this.getTotalDP(this.state.finalsSelected)} / {TournamentCalculator.FINALS_MAX_DP} )
						</div>

					</div>
				</section>
				</div>
			</div>
		);
	}
}

export default TournamentCalculator;
