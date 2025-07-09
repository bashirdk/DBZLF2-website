import "./TournamentCalculator.css";

import React, { Component } from "react";
import Helmet from "react-helmet";
import html2canvas from "html2canvas";

import Characters from "../../../data/characters.json";
// import Accordion from "./Accordion/Accordion"

import AdComponent from "../../AdComponent/AdComponent";

class TournamentCalculator extends Component {

	static ROUND_ONE_MAX_DP 		 = 50;
	static QUARTER_FINALS_MAX_DP = 100;
	static SEMI_FINALS_MAX_DP		 = 300;
	static FINALS_MAX_DP				 = 1200;

	static ROUND_ONE_MAX_CHARACTERS 		 = 3;
	static QUARTER_FINALS_MAX_CHARACTERS = 3;
	static SEMI_FINALS_MAX_CHARACTERS 	 = 5;
	static FINALS_MAX_CHARACTERS 				 = 5;

	static ROUNDS = [
		{ name: 'Round One', 			maxChars: TournamentCalculator.ROUND_ONE_MAX_CHARACTERS, 			maxDP: TournamentCalculator.ROUND_ONE_MAX_DP },
		{ name: 'Quarter-Finals', maxChars: TournamentCalculator.QUARTER_FINALS_MAX_CHARACTERS, maxDP: TournamentCalculator.QUARTER_FINALS_MAX_DP },
		{ name: 'Semi-Finals', 		maxChars: TournamentCalculator.SEMI_FINALS_MAX_CHARACTERS, 		maxDP: TournamentCalculator.SEMI_FINALS_MAX_DP },
		{ name: 'Finals', 				maxChars: TournamentCalculator.FINALS_MAX_CHARACTERS, 				maxDP: TournamentCalculator.FINALS_MAX_DP }
	];

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
			// Round One
			case TournamentCalculator.ROUNDS[0].name:
				return this.state.roundOneSelected;
			// Quarter-Finals
			case TournamentCalculator.ROUNDS[1].name:
				return this.state.quarterFinalsSelected;
			// Semi-Finals
			case TournamentCalculator.ROUNDS[2].name:
				return this.state.semiFinalsSelected;
			// Finals
			case TournamentCalculator.ROUNDS[3].name:
				return this.state.finalsSelected;
			default:
				return [];
		}
	}

	// Method to get max characters for the current round
	getMaxCharactersForRound(currentRound) {
		const foundRound = TournamentCalculator.ROUNDS.find((round) => round.name === currentRound);
		return foundRound ? foundRound.maxChars : 0;
	}

		// Method to get max characters for the current round
	getMaxDPForRound(currentRound) {
		const foundRound = TournamentCalculator.ROUNDS.find((round) => round.name === currentRound);
		return foundRound ? foundRound.maxDP : 0;
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
			// Round One
			case TournamentCalculator.ROUNDS[0].name:
				this.setState({ roundOneSelected: characters });
				break;
			// Quarter-Finals
			case TournamentCalculator.ROUNDS[1].name:
				this.setState({ quarterFinalsSelected: characters });
				break;
			// Semi-Finals
			case TournamentCalculator.ROUNDS[2].name:
				this.setState({ semiFinalsSelected: characters });
				break;
			// Finals
			case TournamentCalculator.ROUNDS[3].name:
				this.setState({ finalsSelected: characters });
				break;
			default:
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
		// const maxDP = this.getMaxDPForRound(this.state.currentRoundSelected);
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
		const currentRound = this.state.currentRoundSelected;
		const selectedChars = this.getSelectedCharactersForRound(currentRound);
		const maxChars = this.getMaxCharactersForRound(currentRound);
		const maxDP = this.getMaxDPForRound(currentRound);
		if (selectedChars.length >= maxChars) {
			return true;
		}

		// New: Check if picking this character would make it impossible to fill the team
		if (selectedChars.length < maxChars - 1) {
			// How many slots will be left after picking this character?
			const slotsLeft = maxChars - (selectedChars.length + 1);

			// Get all characters not already selected (by base name, saga, and DP)
			const alreadySelectedIds = selectedChars.map(
				c => `${this.getBaseCharacterName(c)}|${c.saga}|${c.stats.dp}`
			);
			alreadySelectedIds.push(`${this.getBaseCharacterName(character)}|${character.saga}|${character.stats.dp}`);

			const availableChars = this.state.characters.filter(
				c => !alreadySelectedIds.includes(`${this.getBaseCharacterName(c)}|${c.saga}|${c.stats.dp}`)
			);

			// Get the lowest DP costs for the number of slots left
			const sortedDPs = availableChars.map(c => c.stats.dp).sort((a, b) => a - b);
			const minDPNeeded = sortedDPs.slice(0, slotsLeft).reduce((a, b) => a + b, 0);

			// Calculate DP used if this character is picked
			const dpUsed = this.getTotalDP(selectedChars) + character.stats.dp;

			// If picking this character + the lowest DP chars for the rest would exceed maxDP, disable
			if (dpUsed + minDPNeeded > maxDP) {
				return true;
			}
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

	// Method to check if all rounds have their character slots filled
	areAllRoundsComplete() {
		return TournamentCalculator.ROUNDS.every(round => {
			const selectedCharacters = this.getSelectedCharactersForRound(round.name);
			return selectedCharacters.length === round.maxChars;
		});
	}

	// Helper function to get DP usage color and message
	getDPUsageStatus(dpUsed, maxDP) {
		if (!maxDP || maxDP === 0) return { color: 'red', message: 'No DP limit set.' };
		const usage = (dpUsed / maxDP) * 100;
		if (usage >= 90) {
			return { color: 'green', message: '' };
		} else if (usage >= 80) {
			return { color: 'yellow', message: 'It\'s okay, but you should probably use some stronger characters.' };
		} else if (usage >= 70) {
			return { color: 'orange', message: 'You should reconsider your character roster.' };
		} else {
			return { color: 'red', message: 'You should definitely pick a stronger team.' };
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
						className={`tournament-grid ${this.isCharacterDisabled(character) ? 'disabled' : ''} ${this.isCharacterSelected(character) ? 'selected' : ''}`}
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

						{/* Round Selection */}
						<div className="text-center mb-6">
							<h3 className="text-xl mb-4">Select a Round to Begin</h3>
							<div className="flex justify-center gap-4">
								{TournamentCalculator.ROUNDS.map((round) => (
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
							<h3>Select your team for {this.state.currentRoundSelected || 'Round'} </h3>
							{characterGrid}
						</div>

						{/* Round Display */}
						<div id="rounds-display">
							{TournamentCalculator.ROUNDS.map((round) => {
								const maxChars = this.getMaxCharactersForRound(round.name);
								const charWidth = maxChars * 82; // 80px character + 2px gap
								const selectedChars = this.getSelectedCharactersForRound(round.name);
								const dpUsed = this.getTotalDP(selectedChars);
								const maxDP = round.maxDP;
								const { color, message } = this.getDPUsageStatus(dpUsed, maxDP);
								const allSelected = selectedChars.length === maxChars;
								return (
									<>
									<div key={round.name} className="round-display">
										<div className="round-info">
											<div>{round.name}:</div>
										</div>
										<div className="round-characters" style={{ width: `${charWidth}px` }}>
											{this.renderCharacters(maxChars, round.name)}
										</div>
										<div className="round-info">
											<div>
												DP: <span style={{ color }}>{dpUsed} / {maxDP}</span>
											</div>
										</div>
									</div>
									{	<div className="block" style={{ color, fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', marginBottom: '1rem' }}>{allSelected ? message : ''}</div>}
									</>
								);
							})}
						</div>

						{/* Copy to Clipboard Button */}
						<div className="text-center mt-6">
							<button	onClick={this.copyRoundsToClipboard} className="copy-clipboard-button" disabled={!this.areAllRoundsComplete()}>
								📋 Copy Tournament Setup to Clipboard
							</button>
						</div>

					</div>
				</section>
				</div>

				<div className="text-white text-center">
					<p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<AdComponent />
					<p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>

			</div>
		);
	}
}

export default TournamentCalculator;
