import React, { Component } from "react";

import { Link } from "react-router-dom";

const CharacterCard = ({ data }) => <div><Link to={`/characters/${data.saga}/${data.url_id}`}>{data.name}</Link></div>;

export default CharacterCard;
