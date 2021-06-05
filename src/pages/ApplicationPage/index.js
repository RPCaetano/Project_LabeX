import React from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useTripslist } from "../../hooks/useTripslist";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const ApplicationPage = () => {
  const trips = useTripslist();
  const history = useHistory();

  const [form, onChangeInput, resetState] = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: null,
  });

  const onSubmitApplication = (e) => {
    e.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trips/${form.trip.id}/apply`,
        body
      )
      .then(() => {
        resetState();
        alert("Cadastro efetuado com sucesso");
        history.push("/");
      })
      .catch((err) => {
        alert("Erro!!! tente novamente.", err);
      });
  };

  return (
    <section class="form-section">
      <PageTitle title={"Quero me candidatar"} />

      <div class="form-wrapper">
        <form onSubmit={onSubmitApplication}>
          <div class="input-block">
            <label for="name">Nome</label>
            <input
              onChange={onChangeInput}
              value={form["name"]}
              name={"name"}
            />
          </div>
          <div class="input-block">
            <label for="age">Idade</label>
            <input onChange={onChangeInput} value={form["age"]} name={"age"} />
          </div>
          <div class="input-block">
            <label for="text">Texto de aplicação</label>
            <input
              onChange={onChangeInput}
              value={form["applicationText"]}
              name={"applicationText"}
            />
            "Explique porque você é uma boa pessoa para esta viagem"
          </div>
          <div class="input-block">
            <label for="profission">Profissão</label>
            <input
              onChange={onChangeInput}
              value={form["profession"]}
              name={"profession"}
            />
          </div>
          <div class="input-block">
            <label for="country">País de origem</label>
            <p></p>
            <select
              onChange={onChangeInput}
              value={form["country"]}
              name={"country"}
            >
              <option value={"brs"}>Brasil</option>
              <option value={"arg"}>Argentina</option>
              <option value={"eua"}>Estados Unidos</option>
              <option value={"jpn"}>Japão</option>
              <option value={"esp"}>Espanha</option>
              <option value={"pot"}>Portugal</option>
              <option value={"afr"}>Africa</option>
            </select>
          </div>
          <div class="input-block">
            <label for="">Viagens</label>
            <p></p>

            <select onChange={onChangeInput} value={form["trip"]} name={"trip"}>
              {trips.map((trip) => {
                return <option value={trip}>{trip.name}</option>;
              })}
            </select>
          </div>

          <button type={"submit"} class="btn-login">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplicationPage;
