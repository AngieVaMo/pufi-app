import React from "react";
import pufiPuff2 from "../assets/pufiPuff2.png";


export default function PufiPuff(){

    const verMas = "< VER MAS"

    return(
        <div id="pufipuff">
        <div>
            <button>SHOP</button>
        </div>

        <div>
            <div>
                <img src={pufiPuff2} alt="" />
            </div>
            <div>
                <span>Pufi PUFF</span>
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