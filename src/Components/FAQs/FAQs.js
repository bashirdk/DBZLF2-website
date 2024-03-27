import "./FAQs.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import FAQsJSON from "../../data/faqs.json";

import Accordion from "./Accordion/Accordion"

class FAQs extends Component {

	render() {	
		var faqsData = FAQsJSON.map((faq) => (
			<div className="downloads-section"  key={faq.question}>

			<Accordion 			 
				question={faq.question}
				answer={faq.answer}
			/>

			</div>
		));

		return (
			<div>
				<Helmet>
					<title>FAQs - Dragon Ball Z Little Fighter 2</title>
					<meta name="description" content="List of frequently asked questions." />
					<link rel="canonical" href="https://dbzlf2.com/faqs/" />
				</Helmet>
				<h1 className="text-white">Frequently Asked Questions</h1>
				<div>{faqsData}</div>
			</div>
		);
	}
}

export default FAQs;
