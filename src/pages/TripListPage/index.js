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
        <p>Viagem para Marte<img src={lupa} alt="lupa"></img></p> 
        <p>Viagem para Lua<img src={detail} alt="lupa"></img></p> 
        <p>Viagem para Sol</p> 
        <p>Viagem para Jupter<img src={lupa} alt="lupa"></img></p> 
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
