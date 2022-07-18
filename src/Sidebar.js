import React from "react";
import Sugestoes from './Sugestoes';

const listaSugestoes = [{nome: "bad.vibes.memes", razao: "Segue você", img:"assets/img/bad.vibes.memes.svg"},
  {nome: "chibirdart", razao: "Segue você", img:"assets/img/chibirdart.svg"},
  {nome: "razoesparaacreditar", razao: "Novo no Instagram", img:"assets/img/razoesparaacreditar.svg"},
  {nome: "adorable_animals", razao: "Segue você", img:"assets/img/adorable_animals.svg"},
  {nome: "smallcutecats", razao: "Segue você", img:"assets/img/smallcutecats.svg"}];

function Sidebar (props) {
    return(
    <div class="sidebar">
          <div class="usuario">
            <img src={"assets/img/"+props.nomeUsuario+".svg"} />
            <div class="texto">
              <strong>{props.nomeUsuario}</strong>
              {props.nome}
            </div>
          </div>
          
          <Sugestoes dados={listaSugestoes}/>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>);
}

export default Sidebar;