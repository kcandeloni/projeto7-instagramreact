import React from "react";
import RenderizaIcons from './RenderizaIcons';

function Posts () {
    return(
        <div class="posts">
            <Post dados={[{nomeUsuario: "meowed", imagemPost: "gato-telefone", curtidasUsuario: "respondeai", quantCurtida: "101.523" },
        {nomeUsuario: "barked", imagemPost: "dog", curtidasUsuario: "adorable_animals", quantCurtida: "99.159"}]}/>
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
        props.dados.map((post) =>
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={"assets/img/"+post.nomeUsuario+".svg"} />
                  {post.nomeUsuario}
                </div>
                <RenderizaIcons class = "acoes" icons = {["ellipsis-horizontal"]}/>
              </div>

              <div class="conteudo">
                <img onClick={() => setCorBotao("corLike")} src={"assets/img/"+post.imagemPost+".svg"} />
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
                  <img src={"assets/img/"+post.curtidasUsuario+".svg"} />
                  <div class="texto">
                    Curtido por <strong>{post.curtidasUsuario}</strong> e <strong>outras {post.quantCurtida} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>)
    );
}

export default Posts;