import React from "react";
import "./index.css";
import men from "../../images/men.png";
import women from "../../images/women.png";

const Card = ({ name, type, title, gender, birth, birthPlace, death, deathPlace  }) => {
 
    let gen = gender === "male" ? men : women;

    switch(type){
        case "large":
            return (
                <div className="card-large">
                    <div className="card-pic-large">
                        <img src={gen} alt="card-pic-large" className="card-img-large" />
                    </div>
                    <div className="card-content-large">
                        <div className="card-name-large text-overflow">{name}</div>
                        <div className="card-birth-time-large text-overflow">{`B: ${birth}`}</div>
                        <div className="card-location-large text-overflow">{`${birthPlace}`}</div>
                    </div>
                </div>
            )
            
        case "medium":
            return (
                <div className="card-medium">
                    <div className="card-pic-medium">
                        <img src={gen} alt="card-pic-medium" className="card-img-medium"/>
                    </div>
                    <div className="card-content-medium">
                        <div className="card-name-medium text-overflow">{name}</div>
                        <div className="card-time-period-medium text-overflow">{`${birth} - ${death}`}</div>
                    </div>
                </div>
            )

        case "small":
            return (
                <div className="card-small">
                    <div className="card-content-small">
                        <div className="card-name-small text-overflow">{name}</div>
                        <div className="card-time-period-small text-overflow">{`${birth} - ${death}`}</div>
                    </div>
                </div>
            )

        case "tiny":
            return (
                <div className="card-tiny">
                    <div className="card-content-tiny">
                        <div className="card-name-tiny text-overflow">{name}</div>
                    </div>
                </div>
            )

        case "empty":
            return (
                <div className="card-empty">
                    <div className="card-pic-empty"/>
                    <div className="card-content-empty">
                        <div className="card-name-empty text-overflow card-empty-text">{title}</div>
                    </div>
                </div>
            )

        default: 
            return (
                <div className="card-tiny">
                    <div className="card-content-tiny">
                        <div className="card-name-tiny text-overflow">{name}</div>
                    </div>
                </div>
            )
    }
}

export default Card;