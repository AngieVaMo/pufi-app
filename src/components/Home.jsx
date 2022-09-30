import React from "react";
import NavBar from "./NavBar";

export default function Home(){
    return(
        <div className="homeContainer">
            <div>
                <NavBar/>
            </div>

            <div className="homeText">
                <h3>ESTAR CÓMODO,</h3>
                <h3>NUNCA FUE TAN FÁCIL.</h3>
            </div>

            <div className="btnContainer">
                <button>SHOP</button>
            </div>

            <div className="paging">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}