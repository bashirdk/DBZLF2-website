import "./CharacterList.css";

import React, { Component, Suspense } from "react";
import Helmet from "react-helmet";

import Characters from "../data/characters.json";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const CharacterGroup = React.lazy(() => import('./CharacterGroup'));

class CharacterList extends Component {
  constructor(props) {
    super(props);

    const groups = ["Saiyan", "Namek", "Android", "Buu"].map((saga) => ({
      name: `${saga} Saga`,
      characters: Characters.filter((character) => character.saga === saga),
    }));

    this.state = {
      groups,
    };
  }

  render() {
    const groups = this.state.groups.map((group) => (     
      <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
      <Suspense fallback={ <div className="text-center"><LoadingSpinner/></div> }>       
      <CharacterGroup key={group.name} data={group} />
      </Suspense>
      </div>
    ));

    return (
      <div>
        <Helmet>
          <title>Characters - Dragon Ball Z Little Fighter 2</title>
          <meta name="description" content="List of Characters in DBZ LF2." />
        </Helmet>
        <h1 className="text-white">Character List</h1> 
        <div>{groups}</div>
      </div>
    );
  }
}

export default CharacterList;
