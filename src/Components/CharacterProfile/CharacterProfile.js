import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";

import Characters from "../../data/characters.json";
import MoveList from "./MoveList/MoveList.js";
import ComboList from "./ComboList/ComboList.js";
import CharacterBio from "./CharacterBio/CharacterBio.js";
import CharacterStats from "./CharacterStats/CharacterStats.js";

const CharacterProfile = ( props ) => {
  // const { name } = useParams();

  // console.log('params name', name);

  console.log('props', props);
  console.log('props match', props.match);

  const [selCharacter, setCharacter] = useState();
  const { saga, name } = props.match.params;

  React.useEffect(() => {
    console.log('saga', saga);
    console.log('name', name);

    setCharacter(Characters.find(
      (character) =>
        character.saga.toLowerCase() === saga.toLowerCase() &&
        character.url_id.toLowerCase() === name.toLowerCase()
    ));
    
    // this.state = {
    //   character: Characters.find(
    //     (character) =>
    //       character.saga.toLowerCase() === saga.toLowerCase() &&
    //       character.url_id.toLowerCase() === name.toLowerCase()
    //   ),
    // };
  }, [name, saga])

  // console.log('character profile', character);
  // console.log('character state', character);
  // constructor(props) {
  //   super(props);

  //   const { saga, name } = props.match.params;

  //   this.state = {
  //     character: Characters.find(
  //       (character) =>
  //         character.saga.toLowerCase() === saga.toLowerCase() &&
  //         character.url_id.toLowerCase() === name.toLowerCase()
  //     ),
  //   };
  // }

//   componentWillReceiveProps(nextProps) {
//     var currentProductId = nextProps.match.params.productId;
//     var nextProductId = nextProps.match.params.productId; // from the new url

//     console.log('component will receive props');
// }

// componentDidUpdate(prevProps) {
//   console.log('prev state', this.state);
//   if (prevProps.match.params.name != this.props.match.params.name) {
//     const { saga, name } = this.props.match.params;

//     this.state = {
//       character: Characters.find(
//         (character) =>
//           character.saga.toLowerCase() === saga.toLowerCase() &&
//           character.url_id.toLowerCase() === name.toLowerCase()
//       ),
//     };
//     this.forceUpdate();
//   }  
//   console.log('current state', this.state);
// }

  // render() {
    if (selCharacter)
    {    
      return (
        <div>
          <Helmet>
            <title>{selCharacter.name} - Dragon Ball Z Little Fighter 2</title>
            <meta name="description" content={"Character profile page of " + selCharacter.name + ": stats and moves. "} />
            <link rel="canonical" href={selCharacter.url_id} />
          </Helmet>
          <h1 className="text-white text-center md:text-left">Character Profile</h1>
          <h2 className="text-center text-white">{selCharacter.name}</h2>

          <section className="sm:pr-5 my-5 inline-block align-top w-full sm:w-1/3" id="char-bio-section">
            <CharacterBio character={selCharacter} key={selCharacter.id} />
            {/* { selCharacter.power_up ? 
            <Link to={`/characters/${selCharacter.saga.toLowerCase()}/${selCharacter.power_up.toLowerCase()}`}> ^ </Link>
            :
            ''
            } */}
          </section>

          <section className="inline-block w-full sm:w-2/3 relative">
            <section className="my-5 relative">
              <CharacterStats character={selCharacter} key={selCharacter.id} />
            </section>

            <section className="my-5">
              <MoveList character={selCharacter} key={selCharacter.id}/>
            </section>

            {
              selCharacter && selCharacter.combos ?
              <section className="my-5">
                <ComboList character={selCharacter} key={selCharacter.id}/>
              </section>
              :
              <section className="my-5">
                <ComboList character={false} />
              </section>
            }

            {
            selCharacter.moveset_video ?
              <section className="my-5">
                <div className="border-2 lf2-border-blue lf2-bg-blue rounded p-5">
                  <div className="video-responsive">
                    <iframe title="trailer" width="100%" height="315" src={`https://www.youtube.com/embed/${selCharacter.moveset_video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </section>
            :
            ""
          }
          </section>

        </div>
      );
    }
    else {
      return (
        <div>
          <Helmet>
            <title> Character not found - Dragon Ball Z Little Fighter 2</title>
          </Helmet>
          <h1 className="text-white text-center my-24">Character not found.</h1>
        </div>
      )
    }
  // }
};

export default withRouter(CharacterProfile);
