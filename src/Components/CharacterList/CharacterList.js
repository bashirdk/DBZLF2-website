import "./CharacterList.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import CharacterGroup from "./CharacterGroup";
import Characters from "../../data/characters.json";

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

		const characters = Characters.filter((character) => character.name);

		this.state = {
			groups,
			characters,
			searchTerm: '',
			faceSwap: this.swapRef
		};
	}

	updateSearch(event) {
		this.setState({searchTerm: event.target.value.substr(0, 20)});
	}

	updateSwap(event) {
		this.setState({faceSwap: event.target.checked});
	}

	render() {
		const groups = this.state.groups.map(
			(group) => {
				console.log("the search term is: ",this.state.searchTerm);
				let characters = [];
				for(let character of group.characters) {
					if(character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
						characters = [ ...characters, character ];
					} 
				}
				let g = {};
				g.name = group.name; 
				g.characters = characters;
				return <CharacterGroup key={g.name} data={g} faceSwap={this.state.faceSwap}/>
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
						<span className="text-white"> Swap Face Pics </span>
						<label className="switch">
							
							<input type="checkbox" id="face_swap" ref={this.swapRef} onChange={this.updateSwap.bind(this)} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>

					<input
						type="text"
						name="search"
						placeholder="filter by name..."
            onChange={this.updateSearch.bind(this)}
            class="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					/>

				<div>{groups}</div>
			</div>
		);
	}
}

export default CharacterList;
