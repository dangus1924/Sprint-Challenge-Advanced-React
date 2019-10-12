import React from 'react';

function PlayerCard({playerData}) {
    return(
        <div>
            <h2>Name: {playerData.name} </h2>
            <h4>Searches: {playerData.searches}</h4>
            <h4>Country: {playerData.country}</h4>
        </div>
    )
}

export default PlayerCard;