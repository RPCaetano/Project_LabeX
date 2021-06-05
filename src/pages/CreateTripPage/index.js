import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import styles from './styles.css';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import useProtectPage from '../../hooks/useProtectPage';
import axios from 'axios';

const CreateTripPage=()=> {
  

  const[form,onChangeInput]=useForm({
name:'',
planet:'',
description:'',
duration:''
  })
  useProtectPage()

  const history = useHistory()

  const [date] = useState(new Date())

  const onSubmitForm=(event)=>{
    event.preventDefault()

    const formattedDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    const body={
      name:form.name,
      planet:form.planet,
      date:formattedDate,
      description:form.description,
      durationInDays:form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trips',body,{
headers:{
  auth: window.localStorage.getItem('token'),

},
  }).then(()=>{
    alert("Viagem criada com sucesso");
    history.push("/viagens");
      })
      .catch(() => {
        window.alert("Tente novamente, viagem não criada!!(");
      });
  };


    return (
        <section class="form-section">
      <PageTitle title={'Criar viagem'}/>
     
      <div class="form-wrapper">
        <form onSubmit={onSubmitForm}>
          <div class="input-block">
            <label for="name">Nome</label>
            <input 
            type="text" 
            id="name" 
            onChange={onChangeInput}
            name={'name'}
            value={form['name']}
            />
          </div>
          <div class="input-block">
            <label for="planet">Planeta</label>
            <input
             type="text" 
             id="planet" 
             onChange={onChangeInput}
             name={'planet'}
             value={form['planet']}
             />
          </div>
          <div class="input-block">
            <label for="date">Data</label>
            <input 
            type="date" 
            id="date" 
            // name={'date'}
            // value={form[date]}
            // onChange={date=>setDate(date)}
            onChange={onChangeInput}
            />
          </div>
          <div class="input-block">
            <label for="description">Descrição</label>
            <input 
            type="text" 
            id="description"
            onChange={onChangeInput}
            name={'description'}
            value={form['description']}
            />
          </div>
          <div class="input-block">
            <label for="durationInDays">Duração em dias</label>
            <input
             type="number" 
             id="duration" 
             onChange={onChangeInput}
             name={'duration'}
             value={form['duration']}
             />
          </div>
          <button type="submit" class="btn-login">Criar</button>
        </form>
      </div>
    </section>
);
}

export default CreateTripPage;