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

				<p className="text-white"> THIS GUIDE IS CURRENTLY OUTDATED AND WILL BE UPDATED SOON TO REFLECT THE CHANGES IN v0.6.9</p>

				<div className="guide-summary text-white guide-contents border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-7 pr-5 pt-5 pb-10 mx-0 lg:mx-3">
					<ul>
						<li><h2><a href="#controls" className="guide-blue">Controls </a></h2></li>
						<ul>
							<li><h3><a href="#function_keys">Special Function Keys</a></h3></li>
							<li><h3><a href="#unlocks">Special Unlocks</a></h3></li>
							<li><h3><a href="#commands">Special Commands</a></h3></li>
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
						<li><h2><a href="#multiplayer" className="guide-blue">Multiplayer (Online)</a></h2></li>
						<ul>
							<li><h3><a href="#parsec"> Parsec </a></h3></li>
							<li><h3><a href="#lobby"> LF2 Lobby </a></h3></li>
						</ul>
					</ul>
				</div>

				<div className="text-white guide-page">
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
						<h2 id="controls" className="text-center"> Controls</h2>
						<p>You can setup the Key Configuration by choosing "Control Settings" in the main menu. <i>But the following setup is superior:</i></p>
						<img 
							src={require(`../../images/guide/controlsettings.png`)}
							alt="control settings"
							className="w-full guide-img"
							loading="lazy"
						/>
						<p> Above are the default controls the game comes with. </p>
						<p>The following abbreviations will be used all over the website for different inputs, moves and commands. Learn and understand them!</p>
						<ul>
							<li>"A" = <b>Attack</b> button</li>
							<li>"J" = <b>Jump</b> button</li>
							<li>"D" = <b>Defend</b> button</li>
							<li>"^" = <b>Up</b> button</li>
							<li>"v" = <b>Down</b> button</li>
							<li>"&lt;" = <b>Left</b> button</li>
							<li>"&gt;" = <b>Right</b> button </li>
						</ul>

						<h3 id="function_keys"> Special Function Keys</h3>
						<p><b>F1:</b> Pause/Unpause the game</p>
						<p><b>F2:</b> Pause and skip a frame</p>
						<p><b>F3:</b> Lock Function Keys: F6 and F7</p>
						<p><b>F4:</b> Quit game and go back to menu</p>
						<p><b>F5:</b> Speed up the game</p>
						<p><b>F6:</b> Unlimited Ki (VS Mode only)</p>
						<p><b>F7:</b> Set All HP and MP to 500 (fully heal) (VS Mode only)</p>
						<p><b>F8:</b> Drop Weapons (doesn't do anything) </p>
						<p><b>F9:</b> Destroy Weapons (Namek arms, capes, staffs, rocks) </p>
						<p><b>F11:</b> Lower volume</p>
						<p><b>F12:</b> Raise volume</p>

						<h3 id="unlocks">Special Unlocks</h3>
						<p>Type in "lf2.net" when in game to unlock the "CRAZY!" difficulty and all the locked characters. </p>
						<br></br>
						<p>There's also a secret code that you can get by beating Arcade 5 which will unlock 2 bonus characters! </p>

						<h3 id="commands">Special Commands</h3>
						<div className="text-center p-2">
							<img 
								src={require(`../../images/guide/commands.png`)}
								alt="control settings"
								className="text-center"
								loading="lazy"
							/>
						</div>

						<p>You can command your COM allies on your team with the following  </p>
						<ul>
							<li>Move!: DADA</li>
							<li>Come!: DJDJ</li>
							<li>Stay!: DDDD</li>
						</ul>
					</div>
					
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 mb-1 px-6 pt-5 pb-10 mx-0">
						<h2 id="ui" className="text-center"> UI </h2>
						<h3 id="character_select">Character Select</h3>
						<p>Press 'Attack' button to join the battle.</p>
						<p>The Character Grid on the bottom is for visual purposes only. You can only press Left and Right to move. Pressing Down doesn't do anything and pressing Up button will take you back to Random.</p>
						<p>After picking all the human players, you will be given the option to pick the number of COM players.</p>
						<img 
							src={require(`../../images/guide/characterselection.png`)}
							alt="control settings"
							className="w-full guide-img nmb-5"
							loading="lazy"
						/>
						<h4>Stats</h4>
						<p>You can see the stats of each character. To get more details on each stat check <NavLink to="#stats" >HERE.</NavLink> </p>
						<h4>Team</h4>
						<p>Here you can select the team the character is on. There are 4 different teams and also independent if you want to play by yourself. </p>
						<h4>Skins</h4>
						<p> You can change the skin of the character by pressing D on them before selecting them. Skins are only available on a select few number of characters which are highlighted in a green box in the picture above. </p>

						<hr></hr>

						<h3 id="hud">HUD</h3>
						<img 
							src={require(`../../images/guide/hud.png`)}
							alt="control settings"
							className="w-full guide-img nmb-5"
							loading="lazy"
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
						<h4>Training Mode</h4>
						<p>Training mode can be selected in VS mode. To enter training mode you can use either player or COM enemies and pick the "TRAINING MODE" background. 
							In Training mode attacks do 0 damage and the only way to end is by pressing F4 special function key. 
							If you are fighting COM enemies then you can make them <i>stop</i> fighting with the <b>Stay!</b> command and you can also make them come to your location with the <b>Come!</b> command.
							To make them start fighting again you just use the <b>Move!</b> command.
							To see how to use special commands, check <a href="#commands"> HERE.</a>
							</p>
						
						<h3 id="stage_mode">Stage Mode</h3>
						<div className="text-center">
							<img 
								src={require(`../../images/guide/stagemode.PNG`)}
								alt="control settings"
								className="guide-img"
								loading="lazy"
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
								loading="lazy"
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
							loading="lazy"
						/>
						</div>

						<p> Each character has their own unique stats which are determined by their power and abilities based on the manga and anime </p>
						<ol>
							<li><b>Attack (ATK): </b> This increases the damage output of all attacks. </li>
							<li><b>Defense (DEF): </b> This increases the defense allowing the character to take less damage.</li>
							<li><b>HP Regeneration (HP-R): </b> This increases the speed HP regenerates gradually over time. Dark HP can't be regenerated over time except by some characters like Majin Buu. </li>
							<li><b>Ki Regeneration (KI-R): </b> This increases the speed Ki regenerates gradually over time.
								Some characters don't have any Ki Regeneration so the only way to increase Ki is to Charge Ki.
								Some characters have negative Ki Regeneration so they gradually lose Ki over time, to compensate, they have higher Ki Charge Speed.</li>
							<li><b>Ki Charge Speed (KI-C): </b> This increases the speed Ki Charges when using the DJA A input. </li>
						</ol>

						<h3 id="normal_attack">Normal Attack </h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/nattack.webm`)} />
							</video>
						</div>
						<p>Press the <b>Attack</b> button. </p>

						<h3 id="heavy_attack">Heavy Attack (Super Punch)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/hattack.webm`)} />
							</video>
						</div>
						<p>Pressing the <b>Attack</b> button near an enemy that is <i>staggered</i> or has their <i>Defense Broken</i> will result in a <i>Heavy Attack.</i> </p>

						<h3 id="stagger">Stagger (Dance of Pain)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/stagger.webm`)} />
							</video>
						</div>
						<p>Generally it takes about 3 uninterrupted consective <i>Normal Attacks</i> to cause an enemy to be <i>Staggered</i> and enter into a dance of pain leaving them wide open to attacks for about 1 second.  </p>

						<h3 id="grab">Grab (Catching)</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/grab.webm`)} />
							</video>
						</div>
						<p>To grab an enemy simply press the <b>Direction</b> key to <i>Walk</i> into them when they are <i>Staggered.</i> </p>

						<h3 id="counter_attack">Counter Attack</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/counterattack.webm`)} />
							</video>
						</div>
						<p>To perform a <i>Counter Attack</i> you must press the <b>Attack</b> button when <b>Defending</b> an attack that doesn't break your guard. 
						Counter attacks can only land on an enemy if you are close to them, however, characters with Teleportation techniques such as the Instant Transmission can <i>Counter Attack</i> no matter how far the enemy is.</p>

						<h3 id="air_recover">Air Recover</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
								<source src={require(`../../images/guide/airrecover.webm`)} />
							</video>
						</div>
						<p> When the character is <i>Falling</i> and they are in a horizontal position parallel to the ground you can press the <b>Jump</b> button to do an <i>Air Recovery</i> which costs <u>3 bars of ki</u>. 
						You are vulnerable after the rolling frames are over so be careful when you use it. If you are in the middle of being comboed and attempt to break free, it is possible to end up back inside the enemy's combo.
						It is also very dangerous to use when being attacked by a continous Ki Beam attack as it will continue to hit unless you also move Up or Down on the z-axis to dodge.   </p>

						<h3 id="air_recover_dash">Air Recover Dash</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
							<source src={require(`../../images/guide/airrecoverdash.webm`)} />
							</video>
						</div>
						<p>After performing an <i>Air Recovery</i> hold the <b>Left</b> or <b>Right</b> directional keys to perform a dash in mid-air. 
						You can also hold the <b>Up</b> or <b>Down</b> directional keys to move on the z-axis.
						This is particularly very useful in the World Tournament Stage (Ringout) battle stage to avoid being knocked out of bounds.</p>

						<h3 id="basic_combo">Basic Combo</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
							<source src={require(`../../images/guide/basiccombo.webm`)} />
							</video>
						</div>
						<p>After performing a <i>Heavy Attack</i> press the <b>Jump</b> button to initiate a basic combo. 
						Some characters can continue to combo further by pressing the <b>Attack</b> or <b>Jump</b> button.
						To see a complete combo list for each character check the characters page <a href="/characters">HERE</a></p>

						<h3 id="ki_charge">Ki Charge</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
							<source src={require(`../../images/guide/kicharge.webm`)} />
							</video>
						</div>
						<p> You can charge your Ki bar by pressing <b>DJA A</b> and <b>holding A</b>. The higher your <i>Ki Charge Speed</i> the faster you will charge. </p>

						<h3 id="ki_blast">Ki Blast</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
							<source src={require(`../../images/guide/kiblast.webm`)} />
							</video>
						</div>
						<p>Can be performed with the key inputs <b>Defend Forwards Attack</b> and keep pressing <b>Attack</b> button to continuously shoot ki blasts.</p>

						<h3 id="special_moves">Special Moves</h3>
						<div className="guide-video-container ">
							<video className="guide-video" autoPlay loop muted playsInline>
							<source src={require(`../../images/guide/specialmove.webm`)} />
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
						<p> <b><i><u>NOTE:</u></i></b> Not all moves are available to all characters. To see a complete movelist for each character check the characters page <a href="/characters">HERE</a></p>
					</div>

					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
						<h2 id="multiplayer" className="text-center"> Multiplayer (Online)</h2>

						<p> There are a few ways to play Little Fighter 2 online such as Parsec, LF2 Lobby, Hamachi, etc. We will only be focusing on Parsec and LF2 Lobby in this guide. </p>

						<h3 id="parsec"> Parsec</h3>
						<p>Parsec is a proprietary remote desktop application primarily used for playing games through video streaming. 
							Using Parsec, a user can stream video game footage through an Internet connection, allowing one to run a game on one computer but play it remotely through another device. 
							You can download Parsec <a href="https://parsec.app/downloads" target="_blank" rel="noreferrer">HERE.</a></p>
						<br></br>
						<p>Maximum: 4 players (since you are remote connecting into someone's computer)</p>

						<h4>Pros</h4>
						<ul>
							<li>Normal gameplay speed (30fps) <i>(THIS IS A HUGE PRO)</i></li>
						</ul>
						<h4>Cons</h4>
						<ul>
							<li>Because you are remote connecting into someone else's computer, you can't have controls that overlap with each other.</li>
							<li>Depending on latency, there can be some input delay</li>
						</ul>

						<h3 id="lobby"> LF2 Lobby</h3>
						<p>LF2 Lobby comes prepackaged with the game. 
							To learn more about LF2 Lobby and the development you can check the website <a href="http://www.lf2lobby.com/" target="_blank" rel="noreferrer">HERE</a> and 
							join the <a href="https://discord.gg/pEsXGkQ" target="_blank" rel="noreferrer">Discord Server</a> to get all the latest and greatest updates!</p>
							<br></br>
							<p>Maximum: 4 players (Special Mode: 8 players (check website))</p>
						<img 
							src={require(`../../images/guide/lobbyservers.png`)}
							alt="control settings"
							className="w-full guide-img"
							loading="lazy"
						/>
						<p> <b>IMPORTANT: </b> Pick the server where the ping is low for all players that are playing online.</p>
						<h4>Pros</h4>
						<ul>
							<li>You can use whatever controls you want.</li>
							<li>No input delay.</li>
						</ul>
						<h4>Cons</h4>
						<ul>
							<li>Depending on each persons connection to the server, the frame rate can be abysmal (as low as 5 fps) <i>(THIS IS A HUGE CON)</i></li>
						</ul>
					</div>

				</div>
			</div>
		);
	}
}

export default Guide;
