import React from 'react';
import PageTitle from '../../components/PageTitle';
import styles from './styles.css';

function CreateTripPage() {
    return (
        <section class="form-section">
      <PageTitle title={'Criar viagem'}/>
     
      <div class="form-wrapper">
        <form action="">
          <div class="input-block">
            <label for="name">Nome</label>
            <input type="text" id="name" />
          </div>
          <div class="input-block">
            <label for="planet">Planeta</label>
            <input type="text" id="planet" />
          </div>
          <div class="input-block">
            <label for="date">Data</label>
            <input type="date" id="date" />
          </div>
          <div class="input-block">
            <label for="description">Descrição</label>
            <input type="text" id="description" />
          </div>
          <div class="input-block">
            <label for="time">Duração em dias</label>
            <input type="text" id="time" />
          </div>
          <button type="submit" class="btn-login">Criar</button>
        </form>
      </div>
    </section>
);
}

export default CreateTripPage;