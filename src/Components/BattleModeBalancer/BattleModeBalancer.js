import "./BattleModeBalancer.css";

import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Helmet from "react-helmet";


import Characters from "../../data/characters.json";
// import Accordion from "./Accordion/Accordion"

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


	render() {
		
		const characters = this.state.characters;
		let team1char = this.state.selectedCharTeam1;
		let team2char = this.state.selectedCharTeam2;
		let char1DefMultiplier = this.state.char1DefenseInput;
		let char2DefMultiplier = this.state.char2DefenseInput;

		let char1Def = Math.round(team1char && team1char.stats.defense * char1DefMultiplier * 100) / 100;
		let char2Def = Math.round(team2char && team2char.stats.defense * char2DefMultiplier * 100) / 100;

		const characterGrid = characters.map((character) => (
			<img 
					src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
					alt={`face pic of ${character.name}`}
					className=""
					onClick={() => this.setCharacter1(character)}
				/>
		));

		const characterGrid2 = characters.map((character) => (
			<img 
					src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
					alt={`face pic of ${character.name}`}
					className=""
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
					<meta name="description" content="Learn how the game plays and works." />
					<link rel="canonical" href="https://dbzlf2.com/guide/" />
				</Helmet>

				<h1 className="text-white">Battle Mode Balancer</h1>



				<div className="text-white">

				<section className="sm:pr-2 inline-block align-top w-full sm:w-1/2">
            <section className="">
              <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
                <h3 className="text-center text-blue"> Team 1 </h3>

								<p>Selected Character: </p>

								<h3 className="text-center"> {team1char.name} </h3>
								<div className="text-center w-full">
								{ team1char ? 
										<img 
										src={require(`../../images/face/${team1char.saga.toLowerCase()}/${team1char.url_id.toLowerCase()}.bmp`)}
										alt={`face pic of ${team1char.name}`}
										className="w-1/2 pixel"
									/>
									: ''
								}
								</div>

								<table className="bm-balancer-table team1">
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
											<td>{team1char ? team1char.stats.power_level : 0}</td>
											<td>Power Level</td>
											<td className="font-bold text-yellow">{team1char ? Math.round(team1char.stats.attack *char1Def * 1000) : 0 }</td>
										</tr>
									</tbody>
								</table>


								<p>Punch Damage: {team1char ? Math.round(team1char.stats.attack * 15) : 0}</p> 
								<p>Damage to Enemy {team1char && team2char ? (team1char.stats.attack * 15) / team1char.stats.defend : 0 } </p>


								Defense: <input type="number" min ="0.1" max="100.0" step="0.1" placeholder="1.0" value={this.state.char1DefenseInput} onChange={(e) => this.setChar1DefenseMultiplier(e.target.value)}></input>
								
								<p></p>
								<div className="bm-balance-grid text-center">
									{characterGrid}
								</div>
              </div>
            </section>
          </section>
          
          <section className="sm:pl-2 inline-block align-top w-full sm:w-1/2">
            <section className="my-1">
              <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
                <h3 className="text-center text-red"> Team 2 </h3>

								<p>Selected Character: </p>

								<h3 className="text-center"> {team2char.name} </h3>
								<div className="text-center w-full">
								{ team2char ? 
										<img 
										src={require(`../../images/face/${team2char.saga.toLowerCase()}/${team2char.url_id.toLowerCase()}.bmp`)}
										alt={`face pic of ${team2char.name}`}
										className="w-1/2 pixel"
									/>
									: ''
								}
								</div>


								<table className="bm-balancer-table team2">
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
											<td className="font-bold text-yellow">{team2char ? Math.round(team2char.stats.attack * char2Def * 1000) : 0 }</td>
											<td>Power Level</td>
											<td>{team2char ? team2char.stats.power_level : 0}</td>
											<td>Power Level</td>
										
										</tr>
									</tbody>
								</table>

								<p>Punch Damage: {team2char ? Math.round(team2char.stats.attack * 15) : 0}</p> 
								<p>Damage to Enemy {team1char && team2char ? (team2char.stats.attack * 15) / team1char.stats.defend : 0 } </p>

								Defense: <input type="number" min ="0.1" max="100.0" step="0.1" placeholder="1.0" value={this.state.char2DefenseInput} onChange={(e) => this.setChar2DefenseMultiplier(e.target.value)}></input>
								
								<p></p>
								<div className="bm-balance-grid text-center">
									{characterGrid2}
								</div>
              </div>
            </section>
          </section>
				</div>
			</div>
		);
	}
}

export default BattleModeBalancer;
