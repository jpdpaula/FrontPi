import React from "react";
import axios from "axios";

async function getInfo(divId: HTMLDivElement) {
    const salesPersonUrl = "http://localhost:8080/api/vendedor";

    await axios.get(salesPersonUrl).then((response) => {
        const dataSalesPerson : Record<string,{pImg:string,pName:string,pDescri:string,pPrice:string}> = response.data;

        const dataSalesPersonArray = Object.entries(dataSalesPerson).map(([key, value]) => ({
            key,
            ...value
        }));

        var content = "";
        dataSalesPersonArray.forEach((dados) => {
            content += `<div class="container-carde">
            <div class="img-card">
                <img src="${dados.pImg}"/>
            </div>

            <div class="description-cards">
                <span>${dados.pName}</span>
                <span>${dados.pDescri}</span>
                <strong>${dados.pPrice}</strong>
            </div>
        </div>`;

            
        })
        divId.innerHTML = content;
    }).catch((error) => {
        console.log("ERRO AQUI", error)
    })
};


function postInfo() {
    console.log("teste")
}

export default {getInfo , postInfo};