import RenderizaIcons from './RenderizaIcons';

function Stories () {
    return (
        <div class="stories">

            <Storie dados={["9gag","meowed","barked","nathanwpylestrangeplanet",
"wawawicomics","respondeai","filomoderna","memeriagourmet"]}/>

            <RenderizaIcons class = "setinha" icons = {["chevron-forward-circle"]} />
          </div>
    );
}

function Storie (props){
  return(
    props.dados.map((storie) =>
    <div class="story">
      
        <div class="imagem">
          <img src={"assets/img/"+storie+".svg"} />
        </div>
        <div class="usuario">
            {storie}
        </div>
    </div>)
  );
}

export default Stories;