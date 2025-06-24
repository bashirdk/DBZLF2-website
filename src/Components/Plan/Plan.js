import "./Plan.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import planJSON from "../../data/plans.json";

// import Accordion from "./Accordion/Accordion"

class Plan extends Component {

	// console.log(planJSON);

	renderTableData(data) {
		return data.sort((a, b) => a.pl - b.pl).map((plan) => (
			<tr className={`plan-${plan.race} ${plan.whatif ? 'plan-what-if' : ''}`}  key={plan.character}>
				<td>{plan.character}</td>
				<td>{this.numberWithCommas(plan.pl)}</td>
			</tr>
		));
	}

	renderBGTableData(data) {
		return data.sort((a, b) => a.pl - b.pl).map((plan) => (
			<tr className={``}  key={plan.bg}>
				<td>{plan.bg}</td>
			</tr>
		));
	}

	numberWithCommas(x) {
		if (x===0) { return ''; }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

	render() {	
		let characters  = planJSON[0].characters;
		let backgrounds = planJSON[1].backgrounds;

		// var planData = characters.saiyan.map((plan) => (
		// 	<tr className={"plan-"+plan.race}  key={plan.character}>
		// 		<td>{plan.character}</td>
		// 		<td>{plan.pl}</td>
		// 	</tr>
		// ));

		return (
			<div>
				<Helmet>
					<title>Planned List - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of planned and possible characters." />
					<link rel="canonical" href="https://dbzlf2.com/guide/" />
				</Helmet>

				<h1 className="text-white mb-5">Plans</h1>

				<h2 className="text-white">Planned Characters</h2>
				<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
				
				<div className="text-white mb-5">
					<p> These are a list of planned and potential characters that will be added into the game. </p>
					<p> There is no planned order, so they will come when they come </p>
				</div>

				<p className="text-white"> Race Legend: </p>
				<ul>
					<li className="plan-human"> Human </li>
					<li className="plan-saiyan"> Saiyan </li>
					<li className="plan-namek"> Namek </li>
					<li className="plan-frieza"> Frieza </li>
					<li className="plan-alien"> Alien/Other </li>
					<li className="plan-android"> Android/Cyborg </li>
					<li className="plan-bio-android" style={{maxWidth: "120px"}}> Bio-Android Cell </li>
					<li className="plan-buu"> Majin Buu </li>
					<li className="plan-saiyan plan-what-if"> What If </li>
				</ul>

				<br></br>

				<table className="plan-table text-white font-semibold">
					<thead>
						<tr>
							<th>Saiyan</th><th>Namek</th><th>Android</th><th>Buu</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Character</th><th>PL</th></tr></thead>
									<tbody>{this.renderTableData(characters.saiyan)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Character</th><th>PL</th></tr></thead>
									<tbody>{this.renderTableData(characters.namek)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Character</th><th>PL</th></tr></thead>
									<tbody>{this.renderTableData(characters.android)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Character</th><th>PL</th></tr></thead>
									<tbody>{this.renderTableData(characters.buu)}</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>

				<table className="plan-table text-white font-bold">
					<thead>
						<tr>
							<th>Movies</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Character</th><th>PL</th></tr></thead>
									<tbody>{this.renderTableData(characters.movies)}</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>


				</div>

				<h2 className="text-white">Planned Backgrounds</h2>
				<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">

				<table className="plan-table text-white font-semibold">
					<thead>
						<tr>
							<th>Saiyan</th><th>Namek</th><th>Android</th><th>Buu</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Background</th></tr></thead>
									<tbody>{this.renderBGTableData(backgrounds.saiyan)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
									<thead><tr><th>Background</th></tr></thead>
									<tbody>{this.renderBGTableData(backgrounds.namek)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
								<thead><tr><th>Background</th></tr></thead>
									<tbody>{this.renderBGTableData(backgrounds.android)}</tbody>
								</table>
							</td>
							<td>
								<table className="plan-saga-table">
								<thead><tr><th>Background</th></tr></thead>
									<tbody>{this.renderBGTableData(backgrounds.buu)}</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>


				</div>

				

			</div>
		);
	}
}

export default Plan;
