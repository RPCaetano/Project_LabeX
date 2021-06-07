import React from "react";
import { Link } from "react-router-dom";
import investigate from "../../../src/assets/investigate.png";
import * as S from "./styles";
import PageTitle from "../../components/PageTitle";
import { useTripslist } from "../../hooks/useTripslist";
import { useProtectPage } from "../../hooks/useProtectPage";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const trips = useTripslist();
  const history = useHistory();
  useProtectPage();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  const goToCreate = () => {
    history.push("/viagens/criar");
  };

  return (
    <S.Container>
      <S.Buttom>
        <span></span>
        <button onClick={goToCreate}>Criar viagem </button>
        <button onClick={logout}>Logout</button>
      </S.Buttom>

      <PageTitle title={"Lista de viagens"} />
      <S.List>
        {trips.map((trip) => {
          return (
            <Link to={`/viagens/detalhe/${trip.id}`}>
              <p>
                <img src={investigate} alt="viagem"></img>
                {trip.name}
              </p>
            </Link>
          );
        })}
      </S.List>
    </S.Container>
  );
};
export default ListTripsPage;
