import "./CharacterList.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import CharacterGroup from "./CharacterGroup";
import Characters from "../../data/characters.json";

class CharacterList extends Component {
	constructor(props) {
		super(props);

		const groups = ["Saiyan", "Namek", "Android", "Buu"].map((saga) => ({
			name: `${saga} Saga`,
			characters: Characters.filter((character) => character.saga === saga),
		}));

		const characters = Characters.filter((character) => character.name);

		this.state = {
			groups,
			characters,
			searchTerm: ''
		};
	}

	updateSearch(event) {
		this.setState({searchTerm: event.target.value.substr(0, 20)});
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
				return <CharacterGroup key={g.name} data={g} />
			});

		return (
			<div>
				<Helmet>
					<title>Characters - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Characters in DBZ LF2." />
					<link rel="canonical" href="https://dbzlf2.com/characters/" />
				</Helmet>
				<h1 className="text-white">Character List</h1>

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
