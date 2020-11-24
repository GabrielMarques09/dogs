import React from 'react';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../../api';
import Error from '../../Helper/Error';
import { Link } from 'react-router-dom';
import styles from '../../Forms/Button.module.css'
import Head from '../../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if(login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value, 
        url: window.location.href.replace('recuperar', 'resetar')
      });
      const { json } = await request(url, options)
    }
  }
  return (
    <section>
      <Head title="Recuperar senha" />
      <h1 className="title">
          Perdeu a senha?
      </h1>
      {data ? 
        <div>
          <p style={{color: '#4c1', marginBottom: '1.5rem'}}>{data}</p>
          <Link className={styles.button} to="/login">Voltar</Link>
        </div>
        : 
        <form onSubmit={handleSubmit}>
          <Input 
            label="Email / Usuário" 
            type="text" 
            name="email" {...login} 
          />
          {loading ? 
            <Button disabled>Enviando...</Button> 
            : 
            <Button>Enviar Email</Button> 
          }
        </form>
      }
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
