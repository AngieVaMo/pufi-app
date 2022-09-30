import React from "react";
import pufiRain2 from "../assets/pufiRain2.png";


export default function PufiRain(){

    const verMas = "< VER MAS"

    return(
        <div id="pufiRain">
        <div>
            <button>SHOP</button>
        </div>

        <div>
            <div>
                <img src={pufiRain2} alt="" />
            </div>
            <div>
                <span>Pufi RAIN</span>
            </div>
            <div>
                <p> Descripción del producto. Este es un texto simulado.</p>
            </div>
            <div>
                <button>{verMas}</button>
            </div>
        </div>
        </div>
    )
}