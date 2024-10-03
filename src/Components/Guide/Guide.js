import "./Guide.css";

import { NavLink } from "react-router-dom";
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


				{/* <div className="text-white guide-contents border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-7 py-5 mx-0 lg:mx-3 guide-page">
					<ul>
						<li><h2><a href="#controls" className="guide-blue">Controls </a></h2></li>
						<li><a href="#ui" className="guide-blue">UI</a></li>
						<ul>
							<li><a href="#characer_select">Character Select</a></li>
							<li><a href="#hud">HUD</a></li>
						</ul>
						<li><a href="#game_modes" className="guide-blue">Game Modes</a></li>
						<ul>
							<li><a href="#vs_mode">VS Mode</a></li>
							<li><a href="#stage_mode">Stage Mode</a></li>
							<li><a href="#1v1">1 on 1 Championship</a></li>
							<li><a href="#2v2">2 on 2 Championship</a></li>
							<li><a href="#battle_mode">Battle Mode</a></li>
						</ul>
						<li><a href="#gameplay_mechanics" className="guide-blue">Gameplay Mechanics</a></li>
						<ul>
							<li><a href="#stats">Stats</a></li>
							<li><a href="#normal_attack">Normal Attack</a></li>
							<li><a href="#heavy_attack">Heavy Attack (Super Punch)</a></li>
							<li><a href="#stagger">Stagger (Dance of Pain)</a></li>
							<li><a href="#grab">Grab (Catching)</a></li>
							<li><a href="#counter_attack">Counter Attack</a></li>
							<li><a href="#air_recover">Air Recover</a></li>
							<li><a href="#air_recover_dash">Air Recover Dash</a></li>
							<li><a href="#basic_combo">Basic Combo</a></li>
							<li><a href="#ki_charge">Ki Charge</a></li>
							<li><a href="#ki_blast">Ki Blast</a></li>
							<li><a href="#special_moves">Special Moves</a></li>
						</ul>
					</ul>
				</div> */}

				<div className="guide-summary text-white guide-contents border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-7 pr-5 pt-5 pb-10 mx-0 lg:mx-3">
					<ul>
						<li><h2><a href="#controls" className="guide-blue">Controls </a></h2></li>
						<ul>
							<li><h3><a href="#function_keys">Special Function Keys</a></h3></li>
							<li><h3><a href="#unlocks">Special Unlocks</a></h3></li>
						</ul>
						<li><h2><a href="#ui" className="guide-blue">UI</a></h2></li>
						<ul>
							<li><h3><a href="#characer_select">Character Select</a></h3></li>
							<li><h3><a href="#hud">HUD</a></h3></li>
						</ul>
						<li><h2><a href="#game_modes" className="guide-blue">Game Modes</a></h2></li>
						<ul>
							<li><h3><a href="#vs_mode">VS Mode</a></h3></li>
							<li><h3><a href="#stage_mode">Stage Mode</a></h3></li>
							<li><h3><a href="#1v1">1 on 1 Championship</a></h3></li>
							<li><h3><a href="#2v2">2 on 2 Championship</a></h3></li>
							<li><h3><a href="#battle_mode">Battle Mode</a></h3></li>
						</ul>
						<li><h2><a href="#gameplay_mechanics" className="guide-blue">Gameplay Mechanics</a></h2></li>
						<ul>
							<li><h3><a href="#stats">Stats</a></h3></li>
							<li><h3><a href="#normal_attack">Normal Attack</a></h3></li>
							<li><h3><a href="#heavy_attack">Heavy Attack (Super Punch)</a></h3></li>
							<li><h3><a href="#stagger">Stagger (Dance of Pain)</a></h3></li>
							<li><h3><a href="#grab">Grab (Catching)</a></h3></li>
							<li><h3><a href="#counter_attack">Counter Attack</a></h3></li>
							<li><h3><a href="#air_recover">Air Recover</a></h3></li>
							<li><h3><a href="#air_recover_dash">Air Recover Dash</a></h3></li>
							<li><h3><a href="#basic_combo">Basic Combo</a></h3></li>
							<li><h3><a href="#ki_charge">Ki Charge</a></h3></li>
							<li><h3><a href="#ki_blast">Ki Blast</a></h3></li>
							<li><h3><a href="#special_moves">Special Moves</a></h3></li>
						</ul>
					</ul>
				</div>

				<div className="text-white guide-page">
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
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

						<h3 id="function_keys"> Special Function Keys</h3>
						<p><b>F1:</b> Pause/Unpause the game</p>
						<p><b>F2:</b> Pause and skip a frame</p>
						<p><b>F3:</b> Lock Function Keys: F6 and F7</p>
						<p><b>F4:</b> Quit game and go back to menu</p>
						<p><b>F5:</b> Speed up the game</p>
						<p><b>F6:</b> Unlimited Ki (VS Mode only)</p>
						<p><b>F7:</b> Set All HP and MP to 500 (fully heal) (VS Mode only)</p>
						<p><b>F11:</b> Lower volume</p>
						<p><b>F12:</b> Raise volume</p>

						<h3 id="unlocks">Special Unlocks</h3>
						<p>Type in "lf2.net" when in game to unlock the "CRAZY!" difficulty and all the locked characters. </p>
					</div>
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 mb-1 px-6 pt-5 pb-10 mx-0">
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
						<p>You can see the stats of each character. To get more details on each stat check <NavLink to="#stats" >HERE.</NavLink> </p>
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
						<p>The colour of the ki bar is dependent on the colour of the characters ki; however 30+ bars are always a light blue colour.
						Characters with natural ki regeneration will only automatically regenerate to 10 ki bars.
						You can overcharge your ki as much as you want, but visually you will only see up to 50 bars of ki </p>
						
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
						<p> This is the current game difficulty, in general the AI/com player differently depending on the difficulty selected. To unlock CRAZY! difficulty type in "lf2.net" in the character select screen.</p>
					</div>

					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
						<h2 id="game_modes" className="text-center"> Game Modes </h2>

						<h3 id="vs_mode">VS Mode</h3>
						<p>This is the main fighting mode. You can have up to 8 fighters. (minimum 1 player, maximum 4 players, minimum 1 COM and maximum 7 COMs).
							Each fighter can be either independent, or in 1 of 4 teams. 
						</p>
						<p><b> "Training Mode"</b> - Select any fighter (preferably Super Vegito) as a 2nd human player and you can fight against him as a training dummy with no COM fighters.</p>
						
						<h3 id="stage_mode">Stage Mode</h3>
						<div className="text-center">
							<img 
								src={require(`../../images/guide/stagemode.PNG`)}
								alt="control settings"
								className="guide-img"
							/>
						</div>
						<p>This mode you advance through different phases fighting weak enemies. There are several phases per sub-stage. 
							Occasionally you will come across some boss fights. If there are any minions with the boss they generally will continually respawn till the boss has been defeated.
							In Easy difficulty, the enemies have 25% less HP and in CRAZY! difficulty the enemies have 50% more HP. 
							After completion of a sub-stage, HP is healed and you get bonus health depending on difficulty.
							Easy: 200, Normal: 150, Difficult: 100 and CRAZY!: 50.
						</p>
						
						<h3 id="1v1">1 on 1 Championship</h3>
						<div className="text-center">
							<img 
								src={require(`../../images/guide/1v1.PNG`)}
								alt="control settings"
								className="guide-img"
							/>
						</div>
						<p>Fight in 1 on 1 battles to determine who is the World Champion!
						There are a total of 7 matches. 4 quarter-final matches, 2 semi-final matches and 1 final match.
						You always start every match with a full HP bar, however your Max HP is based on your Dark HP from the previous match.
						The default background is the World Tournament Stage (Ringout) however you can change it to any other background.</p>
						
						<h3 id="2v2">2 on 2 Championship</h3>
						<p>Fight in 2 on 2 battles to determine who are the Tag-team World Champions!
						There are a total of 3 matches. 2 semi-final matches and 1 final match.
						You always start every match with a full HP bar, however your Max HP is based on your Dark HP from the previous match.
						The default background is the World Tournament Stage (Ringout) however you can change it to any other background.</p>
						
						<h3 id="battle_mode">Battle Mode</h3>
						<p> Battle mode is currently not available and will cause the game to crash.</p>
					</div>

					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
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

						<h3 id="normal_attack">Normal Attack </h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>Press the <b>Attack</b> button. </p>

						<h3 id="heavy_attack">Heavy Attack (Super Punch)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>Pressing the <b>Attack</b> button near an enemy that is <i>staggered</i> or has their <i>Defense Broken</i> will result in a <i>Heavy Attack.</i> </p>

						<h3 id="stagger">Stagger (Dance of Pain)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>Generally it takes about 3 uninterrupted consective <i>Normal Attacks</i> to cause an enemy to be <i>Staggered</i> and enter into a dance of pain leaving them wide open to attacks for about 1 second.  </p>

						<h3 id="grab">Grab (Catching)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>To grab an enemy simply press the <b>Direction</b> key to <i>Walk</i> into them when they are <i>Staggered.</i> </p>

						<h3 id="counter_attack">Counter Attack</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>To perform a <i>Counter Attack</i> you must press the <b>Attack</b> button when <b>Defending</b> an attack that doesn't break your guard. 
						Counter attacks can only land on an enemy if you are close to them, however, characters with Teleportation techniques such as the Instant Transmission can <i>Counter Attack</i> no matter how far the enemy is.</p>

						<h3 id="air_recover">Air Recover</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p> When the character is <i>Falling</i> and they are in a horizontal position parallel to the ground you can press to <b>Jump</b> button to do an <i>Air Recovery</i> which costs <u>3 bars of ki</u>.  </p>

						<h3 id="air_recover_dash">Air Recover Dash</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>After performing an <i>Air Recovery</i> hold the <b>Left</b> or <b>Right</b> button to perform a dash in mid-air. You can also hold <b>Up</b> or <b>Down</b> to move on the z-axis.</p>

						<h3 id="basic_combo">Basic Combo</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>After performing a <i>Heavy Attack</i> press the <b>Jump</b> button to initiate a basic combo. Some characters can continue to combo further by pressing the <b>Attack</b> or <b>Jump</b> button.</p>

						<h3 id="ki_charge">Ki Charge</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/ki_charge.mp4`)} />
							</video>
						</div>
						<p> You can charge your Ki bar by pressing <b>DJA A</b> and <b>holding A</b>. The higher your <i>Ki Charge Speed</i> the faster you will charge. </p>

						<h3 id="ki_blast">Ki Blast</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>Can be performed with the key inputs <b>Defend Forwards Attack</b> and keep pressing <b>Attack</b> button to continuously shoot ki blasts.</p>

						<h3 id="special_moves">Special Moves</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src="../../images/guide/ki_charge.mp4" />
							</video>
						</div>
						<p>Can be performed by pressing the <b>Defend</b> button followed by any <b>Directional</b> key and then by either pressing the <b>Attack</b> or <b>Jump</b> button. </p>
						<p>The list of potential moves are: </p>
						<ul>
							<li>D > A --- D > AJ --- D > AD</li>
							<li>D > J --- D > JA </li>
							<li>D ^ A </li>
							<li>D ^ J </li>
							<li>D v A </li>
							<li>D v J </li>
						</ul>
					</div>

				</div>
			</div>
		);
	}
}

export default Guide;
