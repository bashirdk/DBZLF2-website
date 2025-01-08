import "./BattleModeBalancer.css";

import React, { Component } from "react";
import Helmet from "react-helmet";


import Characters from "../../data/characters.json";
// import Accordion from "./Accordion/Accordion"

import AdComponent from "../AdComponent/AdComponent";

class BattleModeBalancer extends Component {

	constructor(props) {
		super(props);
		this.setCharacter1 = this.setCharacter1.bind(this);
		this.setCharacter2 = this.setCharacter2.bind(this);
		
		const characters = Characters.filter((character) => character.name);

		this.state = {
			characters,
			selectedCharTeam1: '',
			selectedCharTeam2: '',
			char1DefenseInput: 1.0,
			char2DefenseInput: 1.0,
		};
	}


	setCharacter1(character) {
		this.setState({selectedCharTeam1: character});
	}

	setCharacter2(character) {
		this.setState({selectedCharTeam2: character});
	}

	setChar1DefenseMultiplier(event) {
		this.setState({char1DefenseInput: event});
	}

	setChar2DefenseMultiplier(event) {
		this.setState({char2DefenseInput: event});
	}

numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

roundPowerLevelNumber(num) {
	if (num >= 1000 && num < 10000) {
			// Round 4-digit number to the nearest 10
			return Math.round(num / 10) * 10;
	} else if (num >= 10000 && num < 100000) {
			// Round 5-digit number to the nearest 100
			return Math.round(num / 10) * 10;
	} else if (num >= 100000 && num < 1000000) {
			// Round 6-digit number to the nearest 1000
			return Math.round(num / 100) * 100;
	} else {
			// Return the number as is if it's not a 4, 5, or 6 digit number
			return num;
	}
}

	calculatePowerLevel(attack, defense, hp_regen) {
		if (hp_regen === 2) {
			return this.numberWithCommas(this.roundPowerLevelNumber(attack * defense * 1000));
		}
		if (hp_regen === 4) {
			return this.numberWithCommas(this.roundPowerLevelNumber(attack * defense * 1.1 * 1000));
		}
		if (hp_regen === 10) {
			return this.numberWithCommas(this.roundPowerLevelNumber(attack * defense * 2 * 1000));
		}
	}


	renderBattleLength(team1char, team2char, char1Damage, char2Damage) {
		let hpRegenChar1 = '';
		let hpRegenChar2 = '';
		if (team1char && team2char) {
			if (team1char.stats.hp_regen > 2) {
				hpRegenChar1 = <p className="text-yellow"> <span className="text-blue">Team 1 </span> Character has higher HP regen, focus on balancing power levels rather than Punch to Enemy </p>
			}
			if (team2char.stats.hp_regen > 2) {
				hpRegenChar2 = <p className="text-yellow"> <span className="text-red">Team 2 </span> Character has higher HP regen, focus on balancing power levels rather than Punch to Enemy </p>
			}
		}

		if (team1char && team2char) {
			if (char1Damage >= 100 || char2Damage >= 100) {
				return <div> <p className="text-red"> Battle will end instantly  </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 50 || char2Damage >= 50) {
				return <div> <p className="text-red-light"> Battle will end very quickly  </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 25 || char2Damage >= 25) {
				return <div> <p className="text-red"> Battle will end quickly (approx 15-45 seconds) </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 15 || char2Damage >= 15) {
				return <div> <p className="text-yellow-dark"> Battle will be fast (approx 30-60 seconds) </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 10 || char2Damage >= 10) {
				return <div> <p className="text-green"> Battle will be average length (approx 45-90 seconds) </p>  {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 7 || char2Damage >= 7) {
				return <div> <p className="text-yellow-dark"> Battle will be a little longer than average (approx 2-3 minutes) </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 5 || char2Damage >= 5) {
				return <div> <p className="text-red"> Battle will be long (approx 4-7 mins) </p> {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 2 || char2Damage >= 2) {
				return <div> <p className="text-red"> Battle will be very long (approx 7-10 mins) </p>  {hpRegenChar1} {hpRegenChar2}</div>

			} else if (char1Damage >= 1 || char2Damage >= 1) {
				return <div> <p className="text-red-light"> Battle will be extremely long (approx 10-20 mins) </p>  {hpRegenChar1} {hpRegenChar2}</div>
				
			} else if (char1Damage >= 0 || char2Damage >= 0) {
				return <div> <p className="text-red"> Battle will be nearly impossible to complete (approx 20+ minutes) </p>  {hpRegenChar1} {hpRegenChar2}</div>
			} 
		}
	}

	render() {
		
		const characters = this.state.characters;
		let team1char = this.state.selectedCharTeam1;
		let team2char = this.state.selectedCharTeam2;
		let char1DefMultiplier = this.state.char1DefenseInput;
		let char2DefMultiplier = this.state.char2DefenseInput;		

		let char1Def = Math.round(team1char && team1char.stats.defense * char1DefMultiplier * 100) / 100;
		let char2Def = Math.round(team2char && team2char.stats.defense * char2DefMultiplier * 100) / 100;

		let char1Damage = team1char && team2char ? Math.round((team1char.stats.attack * 15) / char2Def) : 0;
		let char2Damage = team1char && team2char ? Math.round((team2char.stats.attack * 15) / char1Def) : 0;

		const characterGrid = characters.map((character) => (
			<img 
					src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
					alt={`face pic of ${character.name}`}
					className="pixel"
					onClick={() => this.setCharacter1(character)}
				/>
		));

		const characterGrid2 = characters.map((character) => (
			<img 
					src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
					alt={`face pic of ${character.name}`}
					className="pixel"
					onClick={() => this.setCharacter2(character)}
				/>
		));

		console.log(characters);
		console.log("Team 1 Character:", team1char);
		console.log("Team 2 Character:", team2char);
		console.log("Character 1 Defense Multiplier:", char1DefMultiplier);
		return (
			<div>
				<Helmet>
					<title>Battle Mode Balancer - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Tool used to determine defense values for characters to balance them." />
					<link rel="canonical" href="https://dbzlf2.com/tools/battle-mode-balancer/" />
				</Helmet>

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>

				<h1 className="text-white">Battle Mode Balancer</h1>

				<div className="text-white">

				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">


						<section className="sm:pr-3 inline-block align-top w-full sm:w-1/2">
							<h3 className="text-center text-blue my-1"> Team 1 </h3>

							<h3 className="text-center my-1"> {team1char.name ? team1char.name : 'N/A'} </h3>
							<div className="text-center w-full">
							{ team1char ? 
								<img 
									src={require(`../../images/face/${team1char.saga.toLowerCase()}/${team1char.url_id.toLowerCase()}.bmp`)}
									alt={`face pic of ${team1char.name}`}
									className="w-1/3 pixel my-1"
								/>
								:
								<img 
									src={require(`../../images/face/random.bmp`)}
									alt={`face pic of random`}
									className="w-1/3 pixel my-1"
								/>
							}
							</div>

							<table className="bm-balancer-table team1 my-1">
								<thead>
									<tr>
										<td colspan="2"> ORIGINAL STATS</td>
										<td colspan="2"> NEW STATS</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Attack</td>
										<td>{team1char ? team1char.stats.attack : 0}</td>
										<td>Attack</td>
										<td>{team1char ? team1char.stats.attack : 0}</td>
									</tr>
									<tr>
										<td>Defense</td>
										<td>{team1char ? team1char.stats.defense : 0 }</td>
										<td>Defense</td>
										<td>{char1Def ? char1Def : 0}</td>
									</tr>
									<tr>
										<td>Power Level</td>
										<td>{team1char ? this.numberWithCommas(team1char.stats.power_level) : 0}</td>
										<td>Power Level</td>
										<td className="font-bold text-yellow">{team1char ? this.calculatePowerLevel(team1char.stats.attack, char1Def, team1char.stats.hp_regen) : 0 }</td>
									</tr>
								</tbody>
							</table>

						</section>

						<section className="sm:pl-3 inline-block align-top w-full sm:w-1/2">
						<h3 className="text-center text-red my-1"> Team 2 </h3>

						<h3 className="text-center my-1"> {team2char.name ? team2char.name : "N/A"} </h3>
						<div className="text-center w-full">
						{ team2char ? 
								<img 
								src={require(`../../images/face/${team2char.saga.toLowerCase()}/${team2char.url_id.toLowerCase()}.bmp`)}
								alt={`face pic of ${team2char.name}`}
								className="w-1/3 pixel my-1"
							/>
							:
							<img 
								src={require(`../../images/face/random.bmp`)}
								alt={`face pic of random`}
								className="w-1/3 pixel my-1"
							/>
						}
						</div>


						<table className="bm-balancer-table team2 my-1">
							<thead>
								<tr>
									<td colspan="2"> NEW STATS</td>
									<td colspan="2"> ORIGINAL STATS</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{team2char ? team2char.stats.attack : 0}</td>
									<td>Attack</td>
									<td>{team2char ? team2char.stats.attack : 0}</td>
									<td>Attack</td>
								</tr>
								<tr>
									<td>{char2Def}</td>
									<td>Defense</td>	
									<td>{team2char ? team2char.stats.defense : 0}</td>
									<td>Defense</td>
									
								</tr>
								<tr>
									<td className="font-bold text-yellow">{team2char ? this.calculatePowerLevel(team2char.stats.attack, char2Def, team2char.stats.hp_regen) : 0 }</td>
									<td>Power Level</td>
									<td>{team2char ? this.numberWithCommas(team2char.stats.power_level) : 0}</td>
									<td>Power Level</td>
								
								</tr>
							</tbody>
						</table>

					</section>



					<section className="my-5 inline-block align-top w-full text-center font-bold">

					{this.renderBattleLength(team1char, team2char, char1Damage, char2Damage)}

					</section>



						<br></br>

					<section className="sm:pr-3 inline-block align-top w-full sm:w-1/2">

						<div className="text-right">
							<p className="my-1">Punch Damage: {team1char ? Math.round(team1char.stats.attack * 15) : 0}</p> 
							<p className="my-1">Damage to Enemy: <span className="font-bold text-yellow"> {char1Damage}  </span></p>
							<p className="my-2">
								Defense Multiplier: <input type="number" className="text-right" min ="0.1" max="100.0" step="0.1" placeholder="1.0" value={this.state.char1DefenseInput} onChange={(e) => this.setChar1DefenseMultiplier(e.target.value)}></input>
							</p>
						</div>

						<div className="bm-balance-grid text-center my-5">
							<h4> Select a Character </h4>
							{characterGrid}
						</div>

					</section>

					<section className="sm:pl-3 inline-block align-top w-full sm:w-1/2">

						<p className="my-1">{team2char ? Math.round(team2char.stats.attack * 15) : 0} :Punch Damage</p> 
						<p className="my-1"> <span className="font-bold text-yellow"> {char2Damage} </span> :Damage to Enemy </p>

						<p className="my-2"><input type="number" min ="0.1" max="100.0" step="0.1" placeholder="1.0" value={this.state.char2DefenseInput} onChange={(e) => this.setChar2DefenseMultiplier(e.target.value)}></input> 	:Defense Multiplier
						</p>
						<div className="bm-balance-grid text-center my-5">
							<h4> Select a Character </h4>
							{characterGrid2}
						</div>

					</section>

					</div>
				</section>
 

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>


				</div>
			</div>
		);
	}
}

export default BattleModeBalancer;
