import React from "react";
import pufiLogo from '../assets/pufiLogo.png';
import puffLogo from '../assets/puffLogo.png';
import rainLogo from '../assets/rainLogo.png';
import cartLogo from '../assets/cartLogo.png';
import napLogo from '../assets/napLogo.png';
import downArrow from '../assets/downArrow.png';


export default function NavBar(){
    return(
        <div className="navbarContainer">
            <div>
                <img src={pufiLogo} alt="pufi app logo" />
            </div>

            <div className="navbarLinks">
            <div>
                <a href="#pufiPuff">
                    <img src={puffLogo} alt="puff logo" />
                    <h4>PUFI PUFF</h4>
                </a>
            </div>

            <div className="navbarRain">
                <a href="#pufiRain">
                    <img src={rainLogo} alt="rain logo" />
                    <h4>PUFI RAIN</h4>
                </a>
            </div>

            <div className="navbarCart">
                <a href="#pufiCart">
                    <img src={cartLogo} alt="cart logo" />
                    <h4>PUFI CART</h4>
                </a>
            </div>

            <div>
                <a href="#pufiNap">
                    <img src={napLogo} alt="nap logo" />
                    <h4>PUFI NAP</h4>
                </a>
            </div>
            </div>

            <div className="userProfile">
                <a href=""
                className="userAccount">
                    MI CUENTA
                    <img src={downArrow} alt="" />
                </a>
                <a href="">MI COMPRA</a> 
            </div>
        </div>
    )
}