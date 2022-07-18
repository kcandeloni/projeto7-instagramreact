import React from "react";
import RenderizaIcons from './RenderizaIcons';
import Sidebar from './Sidebar';
import Stories from './Stories';
import Posts from './Posts';

function Conteudo() { //fica aqui enquanto eu vou componentizando
    return (
      <div class="root">
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <RenderizaIcons class = "logo-mobile" icons = {["logo-instagram"]} />


          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <RenderizaIcons class = "icones" icons = {["paper-plane-outline","compass-outline","heart-outline","person-outline"]}/>

          <RenderizaIcons class = "icones-mobile" icons = {["paper-plane-outline"]} />

        </div>
      </div>

      <div class="corpo">
        <div class="esquerda">
          
          <Stories />

          <Posts />
        </div>

        <Sidebar nomeUsuario="catanacomics" nome="catana"/>
      </div>

      <RenderizaIcons class = "fundo-mobile" icons = {["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]} />
      </div>
    );
  }


  export default Conteudo;