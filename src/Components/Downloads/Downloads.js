import "./Downloads.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import DownloadsJSON from "../../data/downloads.json";
import DownloadsCharListJSON from "../../data/downloadsCharList.json";
import DownloadsBgListJSON from "../../data/downloadsBgList.json";

import Accordion from "./Accordion/Accordion"
import AccordionDLC from "./AccordionDLC/AccordionDLC"

import AdComponent from "../AdComponent/AdComponent";

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

		var downloadsData = DownloadsJSON.slice(1).map((download) => (
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

				<h2 className="text-white text-center"> Latest Game Version </h2>
				
				<Accordion
					version={DownloadsJSON[0].version}
					date={DownloadsJSON[0].date}
					download={DownloadsJSON[0].download}
					download_ver={DownloadsJSON[0].download_ver}
					download_b={DownloadsJSON[0].download_b}
					download_r={DownloadsJSON[0].download_r}
					charactersTotal={DownloadsJSON[0].characters.total}
					charactersNew={DownloadsJSON[0].characters.new}
					backgroundsTotal={DownloadsJSON[0].backgrounds.total}
					backgroundsNew={DownloadsJSON[0].backgrounds.new}
					trailer={DownloadsJSON[0].trailer}
					updates={DownloadsJSON[0].updates}
					characterList={downloadsCharacterList[DownloadsJSON[0].version]}
					backgroundList={downloadsBackgroundList[DownloadsJSON[0].version]}
				/>

				<h2 className="text-white text-center"> DLC </h2>
				<AccordionDLC />

				<div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
					<br></br>
				</div>

				<h2 className="text-white text-center"> Previous Game Versions </h2>
				<div>{downloadsData}</div>
			</div>
		);
	}
}

export default Downloads;
