import "./CharacterList.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import CharacterGroup from "./CharacterGroup";
import Characters from "../../data/characters.json";
import CharactersDLC from "../../data/dlcCharacters.json";

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

class CharacterList extends Component {
	constructor(props) {
		setCookie('previousUrl', window.location.pathname, 1);

		super(props);
		
		const groups = ["Saiyan", "Namek", "Android", "Buu"].map((saga) => ({
			name: `${saga} Saga`,
			characters: Characters.filter((character) => character.saga === saga),
		}));

		const groupsDLC = ["Super"].map((saga) => ({
			categories: saga,
			name: `${saga} Saga`,
			characters: CharactersDLC.filter((character) => character.saga === saga),
		}));

		const characters = Characters.filter((character) => character.name);

		this.state = {
			groups,
			groupsDLC,
			characters,
			searchTerm: '',
			faceSwap: this.swapRef
		};
	}

	updateSearch(event) { this.setState({searchTerm: event.target.value.substr(0, 20)}); }
	updateSwap(event)   {	this.setState({faceSwap: event.target.checked}); }
	showDLC(event) 		  { this.setState({showDLC: event.target.checked}); }

	render() {
		let totalCharacters = 0;
		let heroes = 0;
		let villains = 0;
		let other = 0;

		const groups = this.state.groups.map(
			(group) => {
				let characters = [];
				for(let character of group.characters) {
					if(character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
						characters = [ ...characters, character ];
					} 
				}
				let g = {};
				g.name = group.name; 
				g.characters = characters;
				
				characters.forEach(element => {
					totalCharacters += 1;
					if (element.type) {
						if (element.type.hero) { heroes += 1; }
						if (element.type.villain) {	villains += 1; }
						if (element.type.other) {	other += 1;	}
					}
				});

				return <CharacterGroup key={g.name} data={g} faceSwap={this.state.faceSwap}/>
			});

			const groupsDLC = this.state.groupsDLC.map(
				(group) => {
					let characters = [];
					for(let character of group.characters) {
						if(character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
							characters = [ ...characters, character ];
						} 
					}
					let g = {};
					g.categories = group.categories;
					g.name = group.name; 
					g.characters = characters;

					if(this.state.showDLC) {
						characters.forEach(element => {
							totalCharacters += 1;
							if (element.type) {
								if (element.type.hero) {	heroes += 1; }
								if (element.type.villain) {	villains += 1; }
								if (element.type.other) {	other += 1;	}
							}
						});
					}

					return <div> <CharacterGroup key={g.name} data={g} faceSwap={this.state.faceSwap}/> </div>
				});

		return (
			<div>
				<Helmet>
					<title>Characters - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Characters in DBZ LF2." />
					<link rel="canonical" href="https://dbzlf2.com/characters/" />
				</Helmet>
				<div>
					<h1 className="text-white inline-block">Character List</h1>

					<div className="float-right">
						<span className="text-white"> DLC Characters </span>
						<label className="switch">
							
							<input type="checkbox" id="face_swap" onChange={this.showDLC.bind(this)} />
							<span className="slider round"></span>
						</label>

						<span className="text-white"> Swap Face Pics </span>
						<label className="switch">
							
							<input type="checkbox" id="face_swap" onChange={this.updateSwap.bind(this)} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>

				<input
					type="text"
					name="search"
					placeholder="filter by name..."
					onChange={this.updateSearch.bind(this)}
					className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
				/>

				<br></br><br></br>
				<div className="text-white">
					{totalCharacters > 0 ? 
					<table className="character-count-table">
						<tr>
							<th>Characters</th>
							<th>Heroes</th>
							<th>Villains</th>
							<th>Other</th>
						</tr>
						<tr>
							<td>{totalCharacters}</td>
							<td>{heroes}</td>
							<td>{villains}</td>
							<td>{other}</td>
						</tr>
					</table>
					: ''}
				</div>

				<div>{groups}</div>

				{ this.state.showDLC ?
				<>	
					<h2 className="text-white text-center text-4xl">DLC Characters</h2> <br></br>
					{groupsDLC}
				</>
				:
				''
				}

			</div>
		);
	}
}

export default CharacterList;
