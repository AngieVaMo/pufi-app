import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import rightArrow from "../assets/rightArrow.png";
import { subscriptionAction } from "../redux/actions";

function validator(input){

    let errors = "";

    if (!input) {
        errors = "";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        errors = 'The email address is invalid';
    }

    return errors;
}


export default function Form(){
    const dispatch = useDispatch();
    const [input, setInput] = useState({ email: "" })
    const [errors, setErrors] = useState("")

    function handleChange(e){
        setInput({
            email: e.target.value
        })
        setErrors(validator(e.target.value))
    }

    function handleSubmit(e){
        e.preventDefault()

        if (input.email !== '') {
            dispatch(subscriptionAction(input))

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Succesful subscription :)',
                showConfirmButton: false,
                timer: 1000
              })            
            setInput({
                email: ''
            });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!!',
                text: 'You must enter an email address.'                
            })
        }

    }

    return(
        <div>
            <div className="form">
                <input 
                type="email" 
                placeholder="Ingresa tu email" 
                name="email" 
                value={input.email} 
                onChange={e => handleChange(e)}
                />

                <button 
                disabled={errors ? true : false}
                onClick={e => handleSubmit(e)}
                >
                <img src={rightArrow} alt="subscribe" />
                </button>
            </div>

            <div>
            {errors && (<p className="errors">{errors}</p>)}
            </div>

        </div>
    )
    
}
