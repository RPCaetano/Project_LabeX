import React from 'react';
import styles from '../LoginPage/styles.css'
import {useForm} from '../../hooks/useForm'
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/login', body).then((response) => {
      window.localStorage.setItem('token', response.data.token)
      history.push('/viagens')
    })
    .catch((err) => {
      alert("Login inválido, tente novamente ou realize seu cadastro", err);
    });
  }

  return (
    <section class="form-section">
      <PageTitle title={'Area do administrador'}/>
     
      <div class="form-wrapper">
        <form onSubmit={onSubmitLogin}>
          <div class="input-block">
          <label for="email">Email</label>
            <input
              onChange={onChangeInput}
              value={form["email"]}
              name={"email"}
            />
           
          </div>
          <div class="input-block">
          <label for="senha">Senha</label>
            <input
              onChange={onChangeInput}
              value={form["password"]}
              name={"password"}
            />
          </div>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
    </section>
);
}

