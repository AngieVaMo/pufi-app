import React from "react";
import pufiCart2 from "../assets/pufiCart2.png";


export default function PufiCart(){

    const verMas = "< VER MAS"

    return(
        <div id="pufiCart">
        <div>
            <button>SHOP</button>
        </div>

        <div>
            <div>
                <img src={pufiCart2} alt="" />
            </div>
            <div>
                <span>Pufi CART</span>
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