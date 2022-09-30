import React from "react";
import puffCollage from "../assets/collage/puffCollage.jpeg";
import puffCollage1 from "../assets/collage/puffCollage.jpg";
import puffCollage2 from "../assets/collage/puffCollage2.jpg";
import rainCollage from "../assets/collage/rainCollage.jpg";
import cartCollage from "../assets/collage/cartCollage.jpg";
import napCollage from "../assets/collage/napCollage.jpg";
import Form from "./SubscriptionForm"

export default function Subscription(){
    return(
        <div className="subsContainer">
            <div className="instagram">
                <h5>INSTAGRAM</h5>
                <p>#ESPUFI</p>
            </div>

            <div className="images">
                <img src={puffCollage} alt="" />
                <img src={puffCollage1} alt="" />
                <img src={puffCollage2} alt="" />
                <img src={rainCollage} alt="" />
                <img src={cartCollage} alt="" />
                <img src={napCollage} alt="" />
            </div>

            <div className="newsletter">
                <h5>NEWSLETTER</h5>
                <p>SUSCRIBITE</p>
                <h6>Y enterate de todas las novedades</h6>
                <Form/>
            </div>
        </div>
    )
}