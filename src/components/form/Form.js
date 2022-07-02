import React from "react";
import './Form.css'

const Form = () => {
    return(
        <div>
            <form className="form">
                <input type="text" placeholder = "Enter Todo"></input>
                <button className="btn">Add Todo</button>
            </form>
        </div>
    )
}



export default Form;

