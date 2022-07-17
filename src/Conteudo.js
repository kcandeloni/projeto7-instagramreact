import RenderizaIcons from './RenderizaIcons'
import RenderizaLike from './RenderizaLike'
import Sugestoes from './Sugestoes';

const SugestoesObj = [{nome: "bad.vibes.memes", razao: "Segue você", img: "assets/img/bad.vibes.memes"}];


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
          <div class="stories">
            <div class="story">
              <div class="imagem">
                <img src="assets/img/9gag.svg" />
              </div>
              <div class="usuario">
                9gag
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/meowed.svg" />
              </div>
              <div class="usuario">
                meowed
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/barked.svg" />
              </div>
              <div class="usuario">
                barked
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/nathanwpylestrangeplanet.svg" />
              </div>
              <div class="usuario">
                nathanwpylestrangeplanet
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/wawawicomics.svg" />
              </div>
              <div class="usuario">
                wawawicomics
              </div>
            </div>
            
            <div class="story">
              <div class="imagem">
                <img src="assets/img/respondeai.svg" />
              </div>
              <div class="usuario">
                respondeai
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/filomoderna.svg" />
              </div>
              <div class="usuario">
                filomoderna
              </div>
            </div>

            <div class="story">
              <div class="imagem">
                <img src="assets/img/memeriagourmet.svg" />
              </div>
              <div class="usuario">
                memeriagourmet
              </div>
            </div>

            <RenderizaIcons class = "setinha" icons = {["chevron-forward-circle"]} />
          </div>

          <div class="posts">
            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/meowed.svg" />
                  meowed
                </div>
                <RenderizaIcons class = "acoes" icons = {["ellipsis-horizontal"]}/>
              </div>

              <div class="conteudo">
                <img src="assets/img/gato-telefone.svg" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <RenderizaLike class = "" like = "heart-outline" icons = {["chatbubble-outline","paper-plane-outline"]}/>
                  <RenderizaIcons class = "" icons = {["bookmark-outline"]}/>
                </div>

                <div class="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/barked.svg" />
                  barked
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src="assets/img/dog.svg" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/adorable_animals.svg" />
                  <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" />
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
            
            <Sugestoes nome= "bad.vibes.memes" razao= "Segue você" img= "assets/img/bad.vibes.memes.svg"/>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/chibirdart.svg" />
                <div class="texto">
                  <div class="nome">chibirdart</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/razoesparaacreditar.svg" />
                <div class="texto">
                  <div class="nome">razoesparaacreditar</div>
                  <div class="razao">Novo no Instagram</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                  <div class="nome">adorable_animals</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/smallcutecats.svg" />
                <div class="texto">
                  <div class="nome">smallcutecats</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>

      <RenderizaIcons class = "fundo-mobile" icons = {["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]} />
      </div>
    );
  }


  export default Conteudo;