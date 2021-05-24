import React from "react";
import { Link } from "react-router-dom";
import lupa from "../../../src/assets/lupa.png";
import detail from "../../../src/assets/detail.png";
import * as S from "./styles";
import PageTitle from "../../components/PageTitle";

function TripListPage() {
  return (
    <S.Container>
      <PageTitle title={"Lista de viagens"} />
     
      <section>
        
        <Link to={"/viagens/detalhe"}>
        <p><img src={detail} alt="lupa"></img>Viagem para Marte</p> 
        <p><img src={detail} alt="lupa"></img>Viagem para Lua</p> 
        <p><img src={detail} alt="lupa"></img>Viagem para Sol</p> 
        <p><img src={detail} alt="lupa"></img>Viagem para Jupter</p> 
        </Link>
      </section>
      <section>
        <Link to={"/viagens/criar"}>
          <button>Criar viagem</button>
        </Link>
      </section>
    </S.Container>
  );
}

export default TripListPage;
