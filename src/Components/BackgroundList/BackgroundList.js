import "./BackgroundList.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import BackgroundGroup from "./BackgroundGroup";
import Backgrounds from "../../data/backgrounds.json";

class BackgroundList extends Component {
	constructor(props) {
		super(props);

		const groups = ["Saiyan", "Namek", "Android", "Buu", "LF2"].map((saga) => ({
			name: `${saga} Saga`,
			backgrounds: Backgrounds.filter((background) => background.saga === saga),
		}));

		const backgrounds = Backgrounds.filter((background) => background.name);

		this.state = {
			groups,
			backgrounds,
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
				let backgrounds = [];
				for(let background of group.backgrounds) {
					if(background.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
						backgrounds = [ ...backgrounds, background ];
					} 
				}
				let g = {};
				g.name = group.name; 
				g.backgrounds = backgrounds;
				return <BackgroundGroup key={g.name} data={g} />
			});

		return (
			<div>
				<Helmet>
					<title>Backgrounds - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Backgrounds in DBZ LF2." />
					<link rel="canonical" href="https://dbzlf2.com/backgrounds/" />
				</Helmet>
				<h1 className="text-white">Background List</h1>

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

export default BackgroundList;
