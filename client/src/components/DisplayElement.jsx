import React from "react";
// import { useState, useEffect } from "react";

function DisplayElement({title, artist, album, artwork}) {

    return (<div>
        <img src={artwork} />
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <h5>{album}</h5>
    </div>)
}

export default DisplayElement;