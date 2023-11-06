import React from "react";
import './Main.css'
import { AiOutlineShoppingCart, AiOutlineArrowRight } from 'react-icons/ai';

function Main() {

    
    return(
        <div className="container-main">
            <div className="main-img">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png" />

            </div>

            <div className="main-desc">
                <h2>POKEMON FODA</h2>
                    <div className="div-buy">
                        <AiOutlineShoppingCart size={30} color=""/>
                        <h4>Compre aqui !</h4>
                        <AiOutlineArrowRight size={20}/>
                    </div>
            </div>
        </div>

    );
}

export default Main;