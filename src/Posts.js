import React from "react";
import RenderizaIcons from './RenderizaIcons';

function Posts () {
  const listaPost = [{nomeUsuario: "meowed", imagemPost: "gato-telefone", curtidasUsuario: "respondeai", quantCurtida: "101.523" },
  {nomeUsuario: "barked", imagemPost: "dog", curtidasUsuario: "adorable_animals", quantCurtida: "99.159"}];

    return(
        <div class="posts">
            {listaPost.map(post => <Post nomeUsuario={post.nomeUsuario} imagemPost={post.imagemPost} curtidasUsuario={post.curtidasUsuario} quantCurtida={post.quantCurtida}/>)}
        </div>
    );
}

function Post (props) {
    const [corBotao, setCorBotao] = React.useState("");
    let iconHeart = "heart";
    if(corBotao === ""){
        iconHeart = "heart-outline";
    }

    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={"assets/img/"+props.nomeUsuario+".svg"} />
                  {props.nomeUsuario}
                </div>
                <RenderizaIcons class = "acoes" icons = {["ellipsis-horizontal"]}/>
              </div>

              <div class="conteudo">
                <img onClick={() => setCorBotao("corLike")} src={"assets/img/"+props.imagemPost+".svg"} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <span className ={corBotao}>
                        <ion-icon onClick={() => {if(corBotao === ""){setCorBotao("corLike")}else{setCorBotao("")}}} name={iconHeart} ></ion-icon>
                    </span>
                    {["chatbubble-outline","paper-plane-outline"].map((icon) => <ion-icon name={icon}></ion-icon>)}
                </div>
                <RenderizaIcons class = "" icons = {["bookmark-outline"]}/>
                </div>

                <div class="curtidas">
                  <img src={"assets/img/"+props.curtidasUsuario+".svg"} />
                  <div class="texto">
                    Curtido por <strong>{props.curtidasUsuario}</strong> e <strong>outras {props.quantCurtida} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default Posts;