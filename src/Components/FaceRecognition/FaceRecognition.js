import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, square }) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
        <img id='inputimage' alt='' src={imgUrl} width='720px' height='auto'></img>
        <div className='bounding-box' style={{top: square.topRow, right: square.rightCol, bottom: square.bottomRow, left: square.leftCol}}></div>
        </div>
        </div>
    )
}

export default FaceRecognition;