import React from "react";
import './Imageinput.css'

const Imageinput = ({InputChange,ButtonSubmit}) => {
    return(
        <div className="f3 tc">
        <p> This magic spell will detect faces ! Give it a try ! </p>
            <div className="center">
                <div className="form pa4 br3 shadow-3">
                <input placeholder="Bring your image URL here !" className="f4 pa2 w-70 tc" type='text' onChange={InputChange}/> 
                <button className="w-30 grow pointer f4 link ph3 pv2 dib purple bg-light-purple" onClick={ButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default Imageinput;