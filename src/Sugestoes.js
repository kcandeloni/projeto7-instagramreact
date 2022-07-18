function Sugestoes (props){
    return(
      <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {props.dados.map((sugestao) => <div class="sugestao">
              <div class="usuario">
                <img src={sugestao.img}/>
                <div class="texto">
                  <div class="nome">{sugestao.nome}</div>
                  <div class="razao">{sugestao.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
      </div>)}
      </div>
    );
}

export default Sugestoes;