import "./Guide.css";

import React, { Component } from "react";
import Helmet from "react-helmet";


// import Accordion from "./Accordion/Accordion"

class Guide extends Component {

	render() {	

		return (
			<div>
				<Helmet>
					<title>Game Guide - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Learn how the game plays and works." />
					<link rel="canonical" href="https://dbzlf2.com/guide/" />
				</Helmet>

				<h1 className="text-white">DBZ LF2 Game Guide</h1>

				<div className="text-white guide-contents border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-7 py-5 mx-5">
					<ul>
						<li><a href="#controls">Controls </a></li>
						<li><a href="#ui">UI</a></li>
						<ul>
							<li><a href="#characer_select">Character Select</a></li>
							<li><a href="#hud">HUD</a></li>
						</ul>
						<li><a href="#game_modes">Game Modes</a></li>
						<ul>
							<li><a href="#vs_mode">VS Mode</a></li>
							<li><a href="#stage_mode">Stage Mode</a></li>
							<li><a href="#1v1">1 on 1 Championship</a></li>
							<li><a href="#2v2">2 on 2 Championship</a></li>
							<li><a href="#battle_mode">Battle Mode</a></li>
						</ul>
						<li><a href="#gameplay_mechanics">Gameplay Mechanics</a></li>
						<ul>
							<li><a href="#stats">Stats</a></li>
							<li><a href="#normal_attack">Normal Attack</a></li>
							<li><a href="#heavy_attack">Heavy Attack (Super Punch)</a></li>
							<li><a href="#stagger">Stagger (Dance of Pain)</a></li>
							<li><a href="#grab">Grab (Catching)</a></li>
							<li><a href="#counter_attack">Counter Attack</a></li>
							<li><a href="#air_recover">Air Recover</a></li>
							<li><a href="#ki_charge">Ki Charge</a></li>
							<li><a href="#ki_blast">Ki Blast</a></li>
							<li><a href="#special_moves">Special Moves</a></li>
						</ul>
					</ul>
				</div>

				<div className="text-white guide-page">
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
						<h2 id="controls" className="text-center"> Controls</h2>
						<p>You can setup the Key Configuration by choosing "Control Settings" in the main menu. <i>But the following setup is superior:</i></p>
						<img 
							src={require(`../../images/guide/controls.PNG`)}
							alt="control settings"
							className="w-full guide-img"
						/>
						<p> Above are the default controls the game comes with. </p>
						<p>"A" stands for Attack button, "J" stands for Jump button, "D" stands Defend button</p>
						<p>"^" stands for the Up button, "v" stands for the down button, "&lt;" stands for the left button, ">" stands for the right button</p>

						<h3> Special Function Keys</h3>
						<p><b>F1:</b> Pause/Unpause the game</p>
						<p><b>F2:</b> Pause and skip a frame</p>
						<p><b>F3:</b> Lock Function Keys: F6 and F7</p>
						<p><b>F4:</b> Quit game and go back to menu</p>
						<p><b>F5:</b> Speed up the game</p>
						<p><b>F6:</b> Unlimited Ki (VS Mode only)</p>
						<p><b>F7:</b> Set All HP and MP to 500 (fully heal) (VS Mode only)</p>
						<p><b>F11:</b> Lower volume</p>
						<p><b>F12:</b> Raise volume</p>
						<br></br>



					</div>
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
						<h2 id="ui" className="text-center"> UI </h2>
						<h3 id="character_select">Character Select</h3>
						<p>Press 'Attack' button to join the battle.</p>
						<p>You can only press Left and Right to move. The Character Grid on the bottom is only for visual purposes only. Pressing Down doesn't do anything and pressing Up button will take you back to Random.</p>
						<p>After picking all the human players, you will be given the option to pick the number of COM players.</p>
						<img 
							src={require(`../../images/guide/charselect.PNG`)}
							alt="control settings"
							className="w-full guide-img nmb-5"
						/>
						<h4>Stats</h4>
						<p>You can see the stats of each character. To get more details on each stat check <a href="#stats">HERE.</a> </p>
						<h4>Team</h4>
						<p>Here you can select the team the character is on. There are 4 different teams and also independent if you want to play by yourself. </p>

						<hr></hr>

						<h3 id="hud">HUD</h3>
						<img 
							src={require(`../../images/guide/hud.png`)}
							alt="control settings"
							className="w-full guide-img nmb-5"
						/>
						<h4>HP Gauge</h4>
						<h5>HP</h5>
						<p>This is the characters current HP. This HP naturally regenerates over time till it reaches the Dark HP.</p>
						<h5>Dark HP</h5>
						<p>This is the characters max HP that they can heal to. Most characters cannot regenerate Dark HP; however, some characters like Majin Buu can also regenerate Dark HP.</p>

						<h4>Ki Gauge</h4>
						<p>The colour of the ki bar is dependent on the colour of the characters ki; however 30+ bars are always a light blue colour. </p>
						<p>Characters with natural ki regeneration will only automatically regenerate to 10 ki bars.</p>
						<p>You can overcharge your ki as much as you want, but visually you will only see up to 50 bars of ki </p>
						
						<h4>Power Level</h4>
						<p>This is the characters power level which is based on the characters stats. The higher the power level the stronger the character.</p>

						<h4>Scouter</h4>
						<h5>Glass</h5>
						<p>The colour of the glass on the scouter is based on the character and if they wear scouters. Default colour is green (for characters that don't wear scouters).</p>
						<h5>Button</h5>
						<p>The button of the scouter on the side is used to indicate the team of the character. Grey is for independent (no team).</p>

						<h4>Time</h4>
						<p>Used to determine how much time has elapsed in the battle. You can hide it by clicking on it.</p>

						<h4>Game Mode</h4>
						<p>This is the current game mode being played.</p>
						
						<h4>Difficulty</h4>
						<p> This is the current game difficulty, in general the AI/com player differently depending on the difficulty selected.</p>
					</div>

					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
						<h2 id="game_modes" className="text-center"> Game Modes </h2>
						<h3 id="vs_mode">VS Mode</h3>
						<p>This is the main fighting mode. You can have up to 8 fighters. (minimum 1 player, maximum 4 players, minimum 1 COM and maximum 7 COMs).</p>
						<p></p>
						<h3 id="stage_mode">Stage Mode</h3>
						<p>This mode you advance through different phases fighting weak </p>
						<h3 id="1v1">1 on 1 Championship</h3>
						<p>Fight in 1 on 1 battles to determine who is the World Chanpion!</p>
						<p>There are a total of 7 matches. 4 quarter-final matches, 2 semi-final matches and 1 final match.</p>
						<p>You always start every match with a full HP bar, however your Max HP is based on your Dark HP from the previous match. </p>
						<p>The default background is the World Tournament Stage (Ringout) however you can change it any other background.</p>
						<h3 id="2v2">2 on 2 Championship</h3>
						<p>Fight in 1 on 1 battles to determine who are the Tag-team World Chanpions!</p>
						<p>There are a total of 3 matches. 2 semi-final matches and 1 final match.</p>
						<p>You always start every match with a full HP bar, however your Max HP is based on your Dark HP from the previous match. </p>
						<p>The default background is the World Tournament Stage (Ringout) however you can change it any other background.</p>
						<h3 id="battle_mode">Battle Mode</h3>
						<p> Battle mode is currently not available and will cause the game to crash.</p>
					</div>

					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
						<h2 id="gameplay_mechanics" className="text-center">Gameplay Mechanics</h2>
						<h3 id="stats">Stats</h3>
						<div className="text-center">
						<img 
							src={require(`../../images/guide/stats.png`)}
							alt="control settings"
							className="guide-img stats-img"
						/>
						</div>

						<p> Each character has their own unique stats which are determined by their power and abilities based on the manga and anime </p>
						<ol>
							<li><b>Attack (ATK) </b> This increases the damage output of all attacks. </li>
							<li><b>Defense (DEF) </b> This increases the defense allowing you to take less damage.</li>
							<li><b>HP Regeneration (HP-R) </b> The higher the stat the faster HP regenerates over time. Dark HP can't be regenerated over time except by Buu. </li>
							<li><b>Ki Regeneration (KI-R) </b> Higher ki regeneration allows you to recover ki gradually over time. 
								Some characters don't have any ki regeneration so the only way to increase ki is to charge and some characters have negative ki regen so they gradually lose ki over time.</li>
							<li><b>Ki Charge Speed (KI-C) </b> Higher ki charge speed allows you to charge your ki faster using the DJA A input. </li>
						</ol>

						<h3>Normal Attack </h3>
						<h3>Heavy Attack (Super Punch)</h3>
						<h3 id="stagger">Stagger (Dance of Pain)</h3>
						<h3 id="grab">Grab (Catching)</h3>
						<h3 id="counter_attack">Counter Attack</h3>
						<h3 id="air_recover">Air Recover</h3>
						<h3 id="ki_charge">Ki Charge</h3>
						<div className="relative">
						<div className="guide-video-container ">
							<p>MP4 VIDEO:  528x298 resolution, Data rate: 784kbps, Total bitrate: 901kpbs, Frane rate: 29.97 fps</p>
							<p> FILE SIZE: 559 KB </p>
							<video className="guide-video " autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/ki_charge.mp4`)} />
							</video>
						</div>

						<br></br><br></br>
						<div className="guide-video-container ">
						<p>webp image: 528x298 resolution, Horizontal/Vertical resolution: 72 dpi, Frane rate: 33 fps</p>
						<p> FILE SIZE: 277 KB </p>
						<p>Made by converting the MP4 video above into webp</p>
						<img 
							src={require(`../../images/guide/kicharge.webp`)}
							alt="control settings"
							className="guide-video"
						/>
						</div>
						
						<br></br><br></br>
						<div className="guide-video-container ">
						<p>webp image: 600x338 resolution, Horizontal/Vertical resolution: 72 dpi, Frane rate: 33 fps</p>
						<p> FILE SIZE: 312 KB </p>
						<p>made by converting the original MP4 video 1920x1080 and reducing resolution to 600x338 webp</p>
						<img 
							src={require(`../../images/guide/kicharge2.webp`)}
							alt="control settings"
							className="guide-video"
						/>
						</div>
						</div>
						<p> You can charge your Ki bar by pressing DJA A and holding A. The higher your Ki Charge Speed the faster you will charge. </p>
						<h3 id="ki_blast">Ki Blast</h3>

						<h3 id="special_moves">Special Moves</h3>
						<img 
							src={require(`../../images/guide/kicharge.webp`)}
							alt="control settings"
							className="guide-img stats-img"
						/>
					</div>

				</div>
			</div>
		);
	}
}

export default Guide;
