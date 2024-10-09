import "./Downloads.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import DownloadsJSON from "../../data/downloads.json";
import DownloadsCharListJSON from "../../data/downloadsCharList.json";
import DownloadsBgListJSON from "../../data/downloadsBgList.json";

import Accordion from "./Accordion/Accordion"
import AccordionDLC from "./AccordionDLC/AccordionDLC"

class Downloads extends Component {

	render() {
		let downloadsCharacterList = {};
		DownloadsCharListJSON.map((list)=> {
			return downloadsCharacterList[list.version] = { ...list.characters }
		})
		let downloadsBackgroundList = {};
		DownloadsBgListJSON.map((list)=> {
			return downloadsBackgroundList[list.version] = { ...list.backgrounds }
		})

		var downloadsData = DownloadsJSON.map((download) => (
			<div className="downloads-section"  key={download.version}>
				<Accordion
					version={download.version}
					date={download.date}
					download={download.download}
					charactersTotal={download.characters.total}
					charactersNew={download.characters.new}
					backgroundsTotal={download.backgrounds.total}
					backgroundsNew={download.backgrounds.new}
					trailer={download.trailer}
					updates={download.updates}
					characterList={downloadsCharacterList[download.version]}
					backgroundList={downloadsBackgroundList[download.version]}
				/>
			</div>
		));


		return (
			<div>
				<Helmet>
					<title>Downloads - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of Characters in DBZ LF2." />
					<link rel="canonical" href="https://dbzlf2.com/downloads/" />
				</Helmet>
				<h1 className="text-white">Downloads</h1>
				<h2 className="text-white text-center"> DLC </h2>
				<AccordionDLC />

				<h2 className="text-white text-center"> Game </h2>
				<div>{downloadsData}</div>
			</div>
		);
	}
}

export default Downloads;
