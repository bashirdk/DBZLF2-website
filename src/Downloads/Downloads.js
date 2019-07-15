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
			<div>

			<Accordion 
				title={download.version}
				date={download.date}
				charactersTotal={download.characters.total}
				charactersNew={download.characters.new}
				content="deez nuts"
			/>			

			<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0 text-white">
				<div class="sm:w-1 md:w-1/2 inline-block align-top"> 
					<h2> DBZ LF2 {download.version} </h2>
					<a href={"https://github.com/bashirdk/dbz-lf2/releases/download/" + download.version + "/DBZ.LF2." + download.version + ".zip"}>
						<button class="download-button">
						  <FontAwesomeIcon icon="download" color="white" />
							<span class="mx-2">DOWNLOAD</span>
						</button>
					</a>
					
					
				</div>
				<div class="sm:w-1 md:w-1/2 inline-block text-right align-top">
					<p class="my-2"> Release Date: {download.date}</p>
					<p class="my-2"> Total Characters: <span class="rounded-lg py-05 px-2 my-2 bg-green"> {download.characters.total} </span></p> 
					<p class="my-2"> New Characters: <span class="rounded-lg py-05 px-2 my-2 bg-blue"> {download.characters.new} </span> </p>
				</div>
				
				<div class="text-center">
					{ download.trailer ? 
						<div class="download-trailer">
							<div class="video-responsive">
								<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + download.trailer} frameborder="0" 
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
								</iframe> 
							</div>
						</div>
						:
					<div></div> }
				</div>
				
			</div>

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
