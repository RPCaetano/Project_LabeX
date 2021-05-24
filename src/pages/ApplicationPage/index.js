import React from 'react';
import PageTitle from '../../components/PageTitle';

// import { Container } from './styles';

function ApplicationPage() {
    return (
        <section class="form-section">
      <PageTitle title={'Quero me candidatar'}/>
     
      <div class="form-wrapper">
        <form action="">
          <div class="input-block">
            <label for="name">Nome</label>
            <input type="text" id="name" />
          </div>
          <div class="input-block">
            <label for="year">Idade</label>
            <input type="number" id="year" />
          </div>
          <div class="input-block">
            <label for="text">Texto de aplicação</label>
            <input type="text"  id="text" />"Explique porque você é uma boa pessoa para esta viagem"            
        </div>
        <div class="input-block">
            <label for="profission">Profissão</label>
            <input type="text" id="prof" />
          </div>
          <div class="input-block">
            <label for="contained">País</label>
            <input type="text" id="pais" />
          </div>
         
          <button type="submit" class="btn-login">Enviar</button>
        </form>
      </div>
    </section>
);
}

export default ApplicationPage;