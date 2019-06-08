import "./Downloads.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import Characters from "../data/characters.json";

class Downloads extends Component {
	constructor(props) {
		super(props);

	}

	render() {
	

		return (
			<div>
				<Helmet>
					<title>Downloads - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Characters in DBZ LF2." />
				</Helmet>
				<h1 className="text-white">Downloads</h1>

			</div>
		);
	}
}

export default Downloads;
