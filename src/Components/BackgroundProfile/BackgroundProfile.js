import React, { Component } from "react";
import Helmet from "react-helmet";

import './BackgroundProfile.css'

import Backgrounds from "../../data/backgrounds.json";

class BackgroundProfile extends Component {
  constructor(props) {
    super(props);

    const { saga, name } = props.match.params;

    this.state = {
      background: Backgrounds.find(
        (background) =>
          background.saga.toLowerCase() === saga.toLowerCase() &&
          background.url_id.toLowerCase() === name.toLowerCase()
      ),
    };
  }

  render() {
    if (this.state.background)
    {    
      return (
        <div>
          <Helmet>
            <title>{this.state.background.name} - Dragon Ball Z Little Fighter 2</title>
            <meta name="description" content={"Background profile page of " + this.state.background.name + ": stats and moves. "} />
            <link rel="canonical" href={this.state.background.url_id} />
          </Helmet>
          <h1 className="text-white text-center md:text-left">Background Profile</h1>
          <h2 className="text-center text-white">{this.state.background.name}</h2>

          <section className="my-5 border-2 lf2-border-blue lf2-bg-blue rounded p-5">
            <img 
              src={require(`../../images/bgs/large/${this.state.background.url_id.toLowerCase()}.PNG`)}
              alt={`pic of ${this.state.background.name}`}
              className="w-full"
            />
            <table className="background-stats-table text-white">
              <tr>
                <th>Width</th>
                <th>Z Width</th>
              </tr>
              <tr>
                <td>{this.state.background.width}</td>
                <td>{this.state.background.zwidth}</td>
              </tr>
            </table>
          </section>

          {
            this.state.background.special ?
            <section className="sm:pr-5  inline-block align-top w-full ">
            <section className="mb-5">
              <div className="border-2 rounded border-yellow lf2-bg-blue px-5 py-5 text-white">
                <h3> SPECIAL BACKGROUND </h3>
                <p dangerouslySetInnerHTML={{ __html: this.state.background.special_desc }}></p>
              </div>
            </section>
          </section>
            :
            ""
          }

          <section className="sm:pr-5 inline-block align-top w-full sm:w-1/3">
            <section className="my-1">
              <div className="border-2 rounded lf2-bg-blue lf2-border-blue px-5 py-5 text-white">
                <h3> Fights </h3>
                <ul>
                  {
                    this.state.background.fights.map((background) => (
                      <li>{background}</li>
                    ))
                  }
                </ul>
              </div>
            </section>
          </section>
          
          <section className="inline-block align-top w-full sm:w-2/3">
            <section className="my-1">
              <div className="border-2 rounded lf2-bg-blue lf2-border-blue px-5 py-5 text-white">
                <h3> Description </h3>
                <p dangerouslySetInnerHTML={{ __html: this.state.background.desc }}></p>
              </div>
            </section>
          </section>

          <section className="inline-block w-full">
            {
            this.state.background.video ?
              <section className="my-5">
                <div className="border-2 lf2-border-blue lf2-bg-blue rounded p-5">
                  <div className="video-responsive">
                    <iframe title="trailer" width="100%" height="315" src={`https://www.youtube.com/embed/${this.state.background.video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <title> Background not found - Dragon Ball Z Little Fighter 2</title>
          </Helmet>
          <h1 className="text-white text-center my-24">Background not found.</h1>
        </div>
      )
    }
  }
}

export default BackgroundProfile;
