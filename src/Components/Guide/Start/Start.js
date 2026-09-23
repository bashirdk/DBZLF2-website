import "./Start.css";

import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class Start extends Component {

	scrollDown() {
		console.log('scroll down');
		window.scrollBy(100, 100);
	}

	constructor(props) {
    super(props);
    this.targetRef = React.createRef();
  }

  scrollToTarget = () => {
		console.log('this target ref', this.targetRef);
		console.log('taret gref', this.targetRef.current);
    if (this.targetRef.current) {
      this.targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


	render() {
		const GAME_START = "Game Start";
		const DOWNLOAD_GAME = "Downloading the Game";
		const INSTALL_GAME = "Installing the Game";
		const PLAY_GAME = "Playing the Game";

		const TROUBLESHOOT = "Troubleshooting"
		const VIRUS = "The game is being detected as a virus!";
		const SIDE_ERROR = "I'm getting a side-by-side error!";

		return (
			<div>
				<Helmet>
					<title>Getting Started - Game Guide - Deadly Battle Zone Little Fighter 2</title>
					<meta name="description" content="Learn how the game plays and works." />
					<link rel="canonical" href="https://dbzlf2.com/guide/getting-started" />
				</Helmet>

				<h1 className="text-white">DBZ LF2 Game Guide - Getting Started</h1>

				<div className="guide-summary text-white guide-contents border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-7 pr-5 pt-5 pb-10 mx-0 lg:mx-3">
					<ul>
						<li><h2><a href="#game_start" className="guide-blue">{GAME_START}</a></h2></li>
						<ul>
							<li onClick={this.scrollToTarget}><h3><a href="#download_game">{DOWNLOAD_GAME} </a></h3></li>
							<li onClick={this.scrollToTarget}><h3><a href="#install_game">{INSTALL_GAME}</a></h3></li>
							<li onClick={this.scrollToTarget}><h3><a href="#play_game">{PLAY_GAME}</a></h3></li>
						</ul>
						<li><h2><a href="#troubleshoot" className="guide-blue">{TROUBLESHOOT}</a></h2></li>
						<ul>
							<li><h3><a href="#virus">{VIRUS}</a></h3></li>
							<li><h3><a href="#side_error">{SIDE_ERROR}</a></h3></li>
						</ul>
					</ul>
				</div>

				<div className="text-white guide-page">

				<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
					<h2 id="game_start">{GAME_START}</h2>
					<p> Downloading and Extracting and Playing the game! </p>

					<h3 id="download_game" ref={this.targetRef}> {DOWNLOAD_GAME} </h3>
					<p> DBZ LF2 is a mod of Little Fighter 2, however it doesn't require the LF2 base game as it is a standalone game/download.
					To start, you must first download the game. You can find a list of downloads <NavLink to="/downloads/"> HERE. </NavLink> </p>

					<h3 id="install_game" ref={this.targetRef}> {INSTALL_GAME} </h3>
					<p> DBZ LF2 is a portable game/application meaning there is no installation required. All you have to do is extract/unzip the zip/rar file and you can play immediately! </p>

					<h3 id="play_game" ref={this.targetRef}> {PLAY_GAME} </h3>
					<p> Once the game has been extracted into its own folder, you just need to open the .exe file to play! Enjoy! </p>
				</div>
					
				<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
					<h2 id="troubleshoot"> {TROUBLESHOOT} </h2>
					<p> You may experience issues while trying to get the game up and running. If so, read below to solve your issues! </p>

					<h3 id="virus"> {VIRUS} </h3>
					<p>This is a false positive. Some antivirus programs read the exe as a threat. You can whitelist / add the game folder as an exclusion to your antivirus program.</p>
					<br></br>
					<p> To add the game as an exclusion to your Windows Defender you can open Windows Security by clicking Start and searching for Windows Security. </p>
					<br></br>
					<p> Click on 'Virus & thread protection' on the left hand menu and then click on 'Manage settings' for 'Virus & threat protection settings' </p>
					<img 
						src={require(`../../../images/guide/virus1.PNG`)}
						alt="control settings"
						className="w-full guide-img nmb-5"
						loading="lazy"
					/>
					<br></br><br></br>
					<p> Scroll down until you find the 'Exclusions' and click 'Add or remove exclusions' </p>
					<div className="text-center">
						<img 
							src={require(`../../../images/guide/virus2.PNG`)}
							alt="control settings"
							className="guide-img nmb-5"
							loading="lazy"
						/>
					</div>
					<br></br><br></br>
					<p> Now you can add the FOLDER that the .zip file is in as an exclusion and Windows Defender will stop deleting the game! </p>

					<h3 id="side_error"> {SIDE_ERROR} </h3>
					<p> You will need to download and install "Microsoft Visual C++ 2005 SP1 Redistributable Package (x86)." </p>
					<p> Pick from one of the following links: </p>
					<ul> 
						<li> 
							<a target="blank" href="https://www.lf-empire.de/downloads/offversions/vcredist_x86.zip"> Link from LFE mainsite </a> 
						</li> 
						<li> 
							<a target="blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=26347\"> Link from Microsoft </a> 
						</li> 
					</ul>
				</div>

				</div>
			</div>
		);
	}
}

export default Start;
