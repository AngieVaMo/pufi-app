import React from "react";
import pufiFooter from "../assets/footerIcons/pufiFooter.png";
import purchase1 from "../assets/footerIcons/purchase1.png";
import purchase2 from "../assets/footerIcons/purchase2.png";
import facebook from "../assets/footerIcons/facebook.png";
import twiter from "../assets/footerIcons/twiter.png";
import instagram from "../assets/footerIcons/instagram.png";
import brandlive from "../assets/footerIcons/brandlive.png";


export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="footerInfoContainer">
            <div>
               <img src={pufiFooter} alt='pufi app logo' />
            </div>

            <div className="pufisDiv">
                <a href="">PUFI RAIN</a>
                <a href="">PUFI PUFF</a>
                <a href="">PUFI CART</a>
                <a href="">PUFI NAP</a>
            </div>

            <div className="pufisDiv">
            <a href="">CONTACTO</a>
            <a href="">AYUDA</a>
            <a href="">CÓMO COMPRAR</a>
            <a href="">TÉRMINOS & CONDICIONES</a>
            </div>

            <div>
                <div className="safePurchase">
                    <span>COMPRA 100% SEGURA</span>
                </div>

                <div className="safePurchase">
                    <img src={purchase1} alt="" />
                    <img src={purchase2} alt="" />
                    <h4>COMPRÁ CON LA GARANTÍA DE PUFI</h4>
                </div>
            </div>

            <div className="socialMediaIcons">
                <h4>SEGUINOS EN</h4>
                <a href=""><img src={facebook} alt="facebook logo" /></a>
                <a href=""><img src={twiter} alt="twiter logo" /></a>
                <a href=""><img src={instagram} alt="instagram logo" /></a>
            </div>
            </div>

            <div className="copyRightContainer">
            <h5> PUFI Copryright 2017 - Todos los derechos reservados</h5>
            <img src={brandlive} alt="brandlive logo" />
            </div>

        </div>
        
    )
}