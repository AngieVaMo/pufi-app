import React from "react";
import pufiPuff2 from "../assets/pufiPuff2.png";


export default function PufiPuff(){

    const verMas = "< VER MAS"

    return(
        <div id="pufiPuff" className="pufiPuffContainer">

        <div className="pufiPuffText">
            <div>
                <img src={pufiPuff2} alt="" />
            </div>
            <div>
                <span>Pufi PUFF</span>
            </div>
            <div className="linea">
            </div>
            <div>
                <p> Descripción del producto. Este es un texto simulado.</p>
            </div>
            <div>
                <button>{verMas}</button>
            </div>
        </div>

        <div className="pufiPuffBtn">
            <button>SHOP</button>
        </div>
        </div>
    )
}