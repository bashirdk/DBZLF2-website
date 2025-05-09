import "./Tools.css";

import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Helmet from "react-helmet";


class Tools extends Component {


	render() {	


		return (
			<div>
				<Helmet>
					<title>Tools - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="Tools for different tasks." />
					<link rel="canonical" href="https://dbzlf2.com/tools/" />
				</Helmet>

				<h1 className="text-white">Tools</h1>

				<div className="text-white">

				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
						<h2 className="mb-5">Battle Mode Balancer</h2>
						<section className="sm:pr-5 inline-block align-top w-full sm:w-1/3">
							<div className="border-2 lf2-border-blue lf2-bg-blue rounded">
								<img 
									src={require(`../../images/tools/battle-mode-balancer.PNG`)}
									alt={`battle mode balancer tool`}
									className=""
								/>
							</div>
						</section>

						<section className="inline-block w-full sm:w-2/3 relative">
							<div className="inline-block border-2 lf2-border-blue lf2-bg-blue rounded p-5">
								This tool is designed to help you adjust defense levels in Battle Mode so you can have balanced fights between different characters. 
								It can also be used to adjust defense values so you can have weaker characters become stronger than strong characters by looking at the new power level calculations.
							</div>

							<div className="text-center">
							<NavLink to="/tools/battle-mode-balancer" className="nav-logo">
								<button className="download-button">
										<span className="mx-2">ACCESS BATTLE MODE BALANCER</span>
									</button>
								</NavLink>
								</div>

						</section>


					</div>
				</section>


				<section className="inline-block align-top w-full">
					<div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 pt-5 pb-10 mx-0">
						<h2 className="mb-5">Rect32 Calculator</h2>
						<section className="sm:pr-5 inline-block align-top w-full sm:w-1/3">
							<div className="border-2 lf2-border-blue lf2-bg-blue rounded">
								<img 
									src={require(`../../images/tools/rect32.png`)}
									alt={`battle mode balancer tool`}
									className=""
								/>
							</div>
						</section>

						<section className="inline-block w-full sm:w-2/3 relative">
							<div className="inline-block border-2 lf2-border-blue lf2-bg-blue rounded p-5">
								This tool is designed to help you get the Rect32 value based on RGB values that are inputted. Useful for adjusting colours in darkfiren's amazing EXE for things such as bpoint.
							</div>

							<div className="text-center">
							<NavLink to="/tools/rec32-calculator" className="nav-logo">
								<button className="download-button">
										<span className="mx-2">ACCESS RECT32 CALCULATOR</span>
									</button>
								</NavLink>
								</div>

						</section>
					</div>
				</section>

				</div>
			</div>
		);
	}
}

export default Tools;
