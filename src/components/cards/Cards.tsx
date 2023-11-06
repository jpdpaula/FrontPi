import React, {useEffect, useState} from "react";
import './Cards.css';
import getInfo from "../../services/api";


function Cards() {
    useEffect(() => {
        var divId = document.getElementById("mainCard") as HTMLDivElement;
        getInfo.getInfo(divId);
    },[])
    return(
        <div className="container-card">
        <div className="container-productname">
            <h1>NOME DOS PRODUTOS</h1>
        </div>

            <div id="mainCard"className="cards-products">
                
            </div>
        </div>
        
        
    );
}

export default Cards;