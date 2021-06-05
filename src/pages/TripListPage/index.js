import React from "react";
import { Link } from "react-router-dom";
import detail from "../../../src/assets/detail.png";
import * as S from "./styles";
import PageTitle from "../../components/PageTitle";
import {useTripslist} from '../../hooks/useTripslist'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const trips = useTripslist()
  const history = useHistory()
  useProtectPage()

  const logout = () => {
    localStorage.clear() 
    history.push("/");
}

return <S.Container>
      <PageTitle title={"Lista de viagens"} />


  {trips.map((trip) => {
    return <Link to={`/viagens/detalhe/${trip.id}`}  >
    
     <p><img src={detail} alt="lupa"></img>{trip.name}</p> 
     
    </Link>
  })}

<button onClick={logout}>Logout</button>

<br></br>
<Link to={'/viagens/criar'}>
  <button>Criar viagem</button>
  
</Link>

</S.Container>
}

export default ListTripsPage
