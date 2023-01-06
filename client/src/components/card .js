import React from 'react'
import img from "../images/arg.JPG"

const Card = ({team}) => {
     console.log("ddddd",team)
    return (
       
        <div className='team-card'>
            <div className='content'>
                <div>
                    <h2>{team.teamName}</h2>
                    <h4>captain:{team.captainName}</h4>
                    <p>{team.about}</p>
                </div>
            </div>
            <div className='teamimg' style={{right:team.per}}>
                <img src={team.image} alt="img" />
            </div>
        </div>
    )
}

export default Card 