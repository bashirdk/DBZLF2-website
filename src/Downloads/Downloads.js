import "./Downloads.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import DownloadsJSON from "../data/downloads.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Accordion from "./Accordion/Accordion"

class Downloads extends Component {
	constructor(props) {
		super(props);
	}

	render() {	
		var downloadsData = DownloadsJSON.map((download) => (
			<div className="downloads-section">

			<Accordion 
				version={download.version}
				date={download.date}
				charactersTotal={download.characters.total}
				charactersNew={download.characters.new}
				trailer={download.trailer}
				updates={download.updates}
			/>			

			</div>
		));

		console.log("THE DATA: " + downloadsData[0].version);
		return (
			<div>
				<Helmet>
					<title>Downloads - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Characters in DBZ LF2." />
				</Helmet>
				<h1 className="text-white">Downloads</h1>
				<div>{downloadsData}</div>
			</div>
		);
	}
}

export default Downloads;
