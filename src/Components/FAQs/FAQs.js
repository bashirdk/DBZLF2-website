import "./FAQs.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import FAQsJSON from "../../data/faqs.json";

import Accordion from "./Accordion/Accordion"
import AdComponent from ".././AdComponent/AdComponent"

class FAQs extends Component {

	render() {	
		var faqsData = FAQsJSON.map((faq) => (
			<div className="downloads-section"  key={faq.question}>

			<Accordion
				id={faq.id}
				ad={faq.ad}
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
				<p className="text-white my-4">Click or Tap a question to see the answer.</p>
				<div>{faqsData}</div>
				<div className="text-white text-center">
            <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
            <AdComponent />
            <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
          </div>
			</div>
		);
	}
}

export default FAQs;
