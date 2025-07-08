import "./TournamentCalculator.css";

import React, { Component } from "react";
import Helmet from "react-helmet";
import html2canvas from "html2canvas";

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
			currentRoundSelected: '', // Track which round is currently selected
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

	renderCharacters(maxCharacters, round) {
		const selectedCharacters = this.getSelectedCharactersForRound(round);
		const rows = [];
		for( let i=0; i < maxCharacters; i++) {
			rows.push(
				selectedCharacters[i] ? 
					<img 
						src={require(`../../../images/face/${this.getCharacterImage(selectedCharacters[i])}.bmp`)}
						alt={`face pic of ${selectedCharacters[i].name}`}
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

	// Method to select a round
	selectRound(round) {
		this.setState({ currentRoundSelected: round });
	}

	// Method to get the selected characters for the current round
	getSelectedCharactersForRound(round) {
		switch(round) {
			case 'Round One':
				return this.state.roundOneSelected;
			case 'Quarter-Finals':
				return this.state.quarterFinalsSelected;
			case 'Semi-Finals':
				return this.state.semiFinalsSelected;
			case 'Finals':
				return this.state.finalsSelected;
			default:
				return [];
		}
	}

	// Method to get max characters for the current round
	getMaxCharactersForRound(round) {
		switch(round) {
			case 'Round One':
				return TournamentCalculator.ROUND_ONE_MAX_CHARACTERS;
			case 'Quarter-Finals':
				return TournamentCalculator.QUARTER_FINALS_MAX_CHARACTERS;
			case 'Semi-Finals':
				return TournamentCalculator.SEMI_FINALS_MAX_CHARACTERS;
			case 'Finals':
				return TournamentCalculator.FINALS_MAX_CHARACTERS;
			default:
				return 0;
		}
	}

	// Method to get max DP for the current round
	getMaxDPForRound(round) {
		switch(round) {
			case 'Round One':
				return TournamentCalculator.ROUND_ONE_MAX_DP;
			case 'Quarter-Finals':
				return TournamentCalculator.QUARTER_FINALS_MAX_DP;
			case 'Semi-Finals':
				return TournamentCalculator.SEMI_FINALS_MAX_DP;
			case 'Finals':
				return TournamentCalculator.FINALS_MAX_DP;
			default:
				return 0;
		}
	}

	setCharacter(character) {
		// Only allow character selection if a round is selected
		if (!this.state.currentRoundSelected) {
			return;
		}

		const currentRoundSelected = this.getSelectedCharactersForRound(this.state.currentRoundSelected);
		const maxCharacters = this.getMaxCharactersForRound(this.state.currentRoundSelected);

		// Check if character is already selected (same base name, same saga, AND same DP cost)
		const isAlreadySelected = currentRoundSelected.some(
			selectedChar => 
				this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
				selectedChar.saga === character.saga && 
				selectedChar.stats.dp === character.stats.dp
		);
		
		if (isAlreadySelected) {
			// If already selected, remove it (deselect)
			const updatedSelection = currentRoundSelected.filter(
				selectedChar => 
					!(this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
					  selectedChar.saga === character.saga && 
					  selectedChar.stats.dp === character.stats.dp)
			);
			this.updateSelectedCharactersForRound(this.state.currentRoundSelected, updatedSelection);
		} else {
			// Only add if we haven't reached the max
			if (currentRoundSelected.length < maxCharacters) {
				this.updateSelectedCharactersForRound(this.state.currentRoundSelected, [...currentRoundSelected, character]);
			}
		}
	}

	// Method to update selected characters for a specific round
	updateSelectedCharactersForRound(round, characters) {
		switch(round) {
			case 'Round One':
				this.setState({ roundOneSelected: characters });
				break;
			case 'Quarter-Finals':
				this.setState({ quarterFinalsSelected: characters });
				break;
			case 'Semi-Finals':
				this.setState({ semiFinalsSelected: characters });
				break;
			case 'Finals':
				this.setState({ finalsSelected: characters });
				break;
		}
	}

	// Helper method to check if a character is selected in the current round
	isCharacterSelected(character) {
		if (!this.state.currentRoundSelected) {
			return false; // No characters selected if no round is selected
		}
		
		const currentRoundSelected = this.getSelectedCharactersForRound(this.state.currentRoundSelected);
		return currentRoundSelected.some(
			selectedChar => 
				this.getBaseCharacterName(selectedChar) === this.getBaseCharacterName(character) && 
				selectedChar.saga === character.saga && 
				selectedChar.stats.dp === character.stats.dp
		);
	}

	// Helper method to check if adding a character would exceed max DP
	wouldExceedMaxDP(character) {
		if (!this.state.currentRoundSelected) {
			return false; // No round selected, so no DP limit
		}

		const currentRoundSelected = this.getSelectedCharactersForRound(this.state.currentRoundSelected);
		const currentDP = this.getTotalDP(currentRoundSelected);
		const maxDP = this.getMaxDPForRound(this.state.currentRoundSelected);
		const characterDP = character.stats.dp;

		return (currentDP + characterDP) > maxDP;
	}

	// Helper method to check if character should be disabled
	isCharacterDisabled(character) {
		// Disable if no round is selected
		if (!this.state.currentRoundSelected) {
			return true;
		}

		// Disable if character is already selected
		if (this.isCharacterSelected(character)) {
			return false; // Allow deselection
		}

		// Disable if adding this character would exceed max DP
		if (this.wouldExceedMaxDP(character)) {
			return true;
		}

		// Disable if max characters reached
		const currentRoundSelected = this.getSelectedCharactersForRound(this.state.currentRoundSelected);
		const maxCharacters = this.getMaxCharactersForRound(this.state.currentRoundSelected);
		if (currentRoundSelected.length >= maxCharacters) {
			return true;
		}

		return false;
	}

	// Method to copy rounds display to clipboard as image
	copyRoundsToClipboard = async () => {
		try {
			const roundsDisplay = document.getElementById('rounds-display');
			if (!roundsDisplay) {
				console.error('Rounds display element not found');
				return;
			}

			// Capture the rounds display as canvas
			const canvas = await html2canvas(roundsDisplay, {
				backgroundColor: '#122565', // Dark background to match the theme
				scale: 2,
				useCORS: true,
				allowTaint: true,
				width: roundsDisplay.offsetWidth,
				height: roundsDisplay.offsetHeight,
				imageTimeout: 0, // Prevent timeout issues with images
				removeContainer: false, // Keep original styling
				foreignObjectRendering: false, // Better compatibility
				ignoreElements: (element) => {
					// Don't ignore any elements, keep all styling
					return false;
				}
			});

			// Set pixelated rendering on the canvas context
			const ctx = canvas.getContext('2d');
			ctx.imageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;

			// Convert canvas to blob
			canvas.toBlob(async (blob) => {
				try {
					// Try to use modern Clipboard API
					if (navigator.clipboard) {
						try {
							// eslint-disable-next-line no-undef
							const clipboardItem = new ClipboardItem({
								'image/png': blob
							});
							await navigator.clipboard.write([clipboardItem]);
							alert('Tournament setup copied to clipboard!');
							return;
						} catch (clipboardError) {
							console.log('ClipboardItem not supported, falling back to download');
						}
					}
					
					// Fallback for older browsers - create download link
					const url = URL.createObjectURL(blob);
					const link = document.createElement('a');
					link.href = url;
					link.download = 'tournament-setup.png';
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					URL.revokeObjectURL(url);
					alert('Tournament setup saved as image! (Clipboard not supported in this browser)');
				} catch (err) {
					console.error('Failed to copy to clipboard:', err);
					// Fallback - save as file
					const url = URL.createObjectURL(blob);
					const link = document.createElement('a');
					link.href = url;
					link.download = 'tournament-setup.png';
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					URL.revokeObjectURL(url);
					alert('Tournament setup saved as image!');
				}
			}, 'image/png');
		} catch (err) {
			console.error('Failed to capture image:', err);
			alert('Failed to capture image. Please try again.');
		}
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

	// Method to check if all rounds have their character slots filled
	areAllRoundsComplete() {
		const rounds = [
			{ name: 'Round One', maxChars: TournamentCalculator.ROUND_ONE_MAX_CHARACTERS },
			{ name: 'Quarter-Finals', maxChars: TournamentCalculator.QUARTER_FINALS_MAX_CHARACTERS },
			{ name: 'Semi-Finals', maxChars: TournamentCalculator.SEMI_FINALS_MAX_CHARACTERS },
			{ name: 'Finals', maxChars: TournamentCalculator.FINALS_MAX_CHARACTERS }
		];

		return rounds.every(round => {
			const selectedCharacters = this.getSelectedCharactersForRound(round.name);
			return selectedCharacters.length === round.maxChars;
		});
	}

	render() {
		const characters = this.state.characters;
		const isRoundSelected = this.state.currentRoundSelected !== '';

		const characterGrid = characters.map((character) => (
			<div className="inline-block relative">
				<span className="dp-value">{character.stats.dp}</span>
				<img 
						src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
						alt={`face pic of ${character.name}`}
						className={`tournament-grid ${this.isCharacterDisabled(character) ? 'disabled' : ''} ${this.isCharacterSelected(character) ? 'selected' : ''}`}
						onClick={ () => this.setCharacter(character)}
					/>
			</div>
		));

		const rounds = [
			{ name: 'Round One', maxChars: TournamentCalculator.ROUND_ONE_MAX_CHARACTERS, maxDP: TournamentCalculator.ROUND_ONE_MAX_DP },
			{ name: 'Quarter-Finals', maxChars: TournamentCalculator.QUARTER_FINALS_MAX_CHARACTERS, maxDP: TournamentCalculator.QUARTER_FINALS_MAX_DP },
			{ name: 'Semi-Finals', maxChars: TournamentCalculator.SEMI_FINALS_MAX_CHARACTERS, maxDP: TournamentCalculator.SEMI_FINALS_MAX_DP },
			{ name: 'Finals', maxChars: TournamentCalculator.FINALS_MAX_CHARACTERS, maxDP: TournamentCalculator.FINALS_MAX_DP }
		];

		
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

						{/* Round Selection */}
						<div className="text-center mb-6">
							<h3 className="text-xl mb-4">Select a Round to Begin</h3>
							<div className="flex justify-center gap-4">
								{rounds.map((round) => (
									<button
										key={round.name}
										onClick={() => this.selectRound(round.name)}
										className={`tournament-round-button ${
											this.state.currentRoundSelected === round.name
												? 'tournament-round-button-selected'
												: ''
										}`}
									>
										{round.name}
									</button>
								))}
							</div>
						</div>

						{/* Character Selection */}
						<div className="tournament-grid text-center my-5">
							<h4>Select your team for {this.state.currentRoundSelected || 'Round'} </h4>
							{characterGrid}
						</div>

						{/* Round Display */}
						<div id="rounds-display">
							{rounds.map((round) => {
								const maxChars = this.getMaxCharactersForRound(round.name);
								const charWidth = maxChars * 82; // 80px character + 2px gap
								return (
									<div key={round.name} className="round-display">
										<div className="round-info">
											<div>{round.name}:</div>
										</div>
										<div className="round-characters" style={{ width: `${charWidth}px` }}>
											{this.renderCharacters(maxChars, round.name)}
										</div>
										<div className="round-info">
											<div>DP: {this.getTotalDP(this.getSelectedCharactersForRound(round.name))} / {round.maxDP}</div>
										</div>
									</div>
								);
							})}
						</div>

						{/* Copy to Clipboard Button */}
						<div className="text-center mt-6">
							<button
								onClick={this.copyRoundsToClipboard}
								className="copy-clipboard-button"
								disabled={!this.areAllRoundsComplete()}
							>
								📋 Copy Tournament Setup to Clipboard
							</button>
						</div>

					</div>
				</section>
				</div>
			</div>
		);
	}
}

export default TournamentCalculator;
