import React from "react";
import anyRad from "../../../static/assets/images/bio/images.png";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + anyRad + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />

            <div className="right-column">
                <h1>Ethan Wilson</h1>
                <h2>The almighty Fishlord</h2>
                <h3>Goetian King</h3>
            </div>
        </div>
        
    );
}
