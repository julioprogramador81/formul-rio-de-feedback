
import React, { useState } from 'react';

function FeedbackForm() {

  // Criando os estados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  // Função para enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação dos campos
    if (!nome || !email || !comentario) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Exibindo os dados
    alert(
      `Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
    );

    // Limpando os campos
    setNome('');
    setEmail('');
    setComentario('');
  };

  return (
    <div className="feedback-container">
      <h2>Formulário de Feedback</h2>

      <form onSubmit={handleSubmit}>

        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />

        <label>Comentário:</label>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Digite seu comentário"
        />

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default FeedbackForm;
