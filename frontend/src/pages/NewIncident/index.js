import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

const NewIncident = ({ history }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const ongId = localStorage.getItem('ongId');

  async function handleCreateIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar incidente. Tente novamente.');
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleCreateIncident}>
          <input
            placeholder='Título do caso'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder='Valor em reais'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;