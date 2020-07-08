import React, { useState } from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

const Logon = ({ history }) => {
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (err) {
      alert('Falha no login. Tente novamente.');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be The Heroes' />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type='text'
            placeholder='Sua ID...'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Entrar
          </button>
          <Link className='back-link' to='/register'>
            <FiLogIn size='16px' color='#e02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
};

export default Logon;
