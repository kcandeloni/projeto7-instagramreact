import React from "react";

function RenderizaLike (props){
    const [corBotao, setCorBotao] = React.useState("");
    let iconHeart = "heart";
    if(corBotao === ""){
        iconHeart = props.like;
    }

    return (
        <div className ={props.class}>
            <span className ={corBotao}>
                <ion-icon onClick={() => {if(corBotao === ""){setCorBotao("corLike")}else{setCorBotao("")}}} name={iconHeart} ></ion-icon>
            </span>
            {props.icons.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

export default RenderizaLike;