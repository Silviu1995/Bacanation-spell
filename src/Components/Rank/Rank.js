import React from "react";

const Rank = ({name,entries}) => {
    return(
        <div className="tc">
        <div className="white f2">
           <strong>{`Hello there, ${name} !`} </strong> 
        </div>
        <div className="white f2">
        <srong>{`Your current entry count is ...`}</srong>
        </div>
        <div className="br2 center shadow-1 white f1" style={{ height: 50, width: 90}}>
       <strong>{entries}</strong>
        </div>
        </div>
    )
}

export default Rank;