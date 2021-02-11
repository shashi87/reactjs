import React from "react";
import "./index.css";
import men from "../../images/men.png";

const Card = ({ type, title, subtitle }) => {

    switch(type){
        case "large":
            return (
                <div className="card-large">
                    <div className="card-pic-large">
                        <img src={men} alt="card-pic-large" className="card-img-large" />
                    </div>
                    <div className="card-content-large">
                        <div className="card-name-large text-overflow">{title}</div>
                        <div className="card-birth-time-large text-overflow">{subtitle}</div>
                        <div className="card-location-large text-overflow">{subtitle}</div>
                    </div>
                </div>
            )
            
        case "medium":
            return (
                <div className="card-medium">
                    <div className="card-pic-medium">
                        <img src={men} alt="card-pic-medium" className="card-img-medium"/>
                    </div>
                    <div className="card-content-medium">
                        <div className="card-name-medium text-overflow">{title}</div>
                        <div className="card-time-period-medium text-overflow">{subtitle}</div>
                    </div>
                </div>
            )

        case "small":
            return (
                <div className="card-small">
                    <div className="card-content-small">
                        <div className="card-name-small text-overflow">{title}</div>
                        <div className="card-time-period-small text-overflow">{subtitle}</div>
                    </div>
                </div>
            )

        default: 
            return (
                <div className="card-tiny">
                    <div className="card-content-tiny">
                        <div className="card-name-tiny text-overflow">{title}</div>
                    </div>
                </div>
            )
    }
}

export default Card;