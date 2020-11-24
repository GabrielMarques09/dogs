import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from './LoginFunctions/LoginForm';
import LoginCreate from './LoginFunctions/LoginCreate';
import LoginPasswordLost from './LoginFunctions/LoginPasswordLost';
import LoginPasswordReset from './LoginFunctions/LoginPasswordReset';
import { UserContext } from '../../UserContext';

import styles from './Login.module.css'
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
};

export default Login;
