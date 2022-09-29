import React from "react";
import pufiNap2 from "../assets/pufiNap2.png";


export default function PufiNap(){

    const verMas = "< VER MAS"

    return(
        <div>
        <div>
            <button>SHOP</button>
        </div>

        <div>
            <div>
                <img src={pufiNap2} alt="" />
            </div>
            <div>
                <span>Pufi NAP</span>
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