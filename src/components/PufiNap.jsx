import React from "react";
import pufiNap2 from "../assets/pufiNap2.png";


export default function PufiNap(){

    const verMas = "< VER MAS"

    return(
        <div id="pufiNap" className="pufiNapContainer">
        <div className="pufiNapText">
            <div>
                <img src={pufiNap2} alt="" />
            </div>
            <div>
                <span>Pufi NAP</span>
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

        <div className="pufiNapBtn">
            <button>SHOP</button>
        </div>
        </div>
    )
}