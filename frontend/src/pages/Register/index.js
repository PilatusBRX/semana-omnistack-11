import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);
      alert(` Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro. Tente novamente.');
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.{' '}
          </p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size='16px' color='#e02041' />
            Já tenho cadastro
          </Link>
          <form onSubmit={handleRegister}>
            <input
              placeholder='Nome da ONG'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type='email'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              placeholder='Whatsapp'
              onChange={(e) => setWhatsapp(e.target.value)}
              value={whatsapp}
            />
            <div className='input-group'>
              <input
                placeholder='Cidade'
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <input
                placeholder='UF'
                style={{ width: 80 }}
                onChange={(e) => setUf(e.target.value)}
                value={uf}
              />
            </div>
            <button className='button' type='submit'>
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
