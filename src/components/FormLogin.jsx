import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '123@gmail.com' && senha === '123') {
      alert('Login realizado com sucesso!');
      navigate('/dashboard');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <main id="main__container">
      <section className="form_container">
        <form id="login_form" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="input_container">
            <div className="input">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required placeholder="Digite seu email"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" required placeholder="Digite sua senha"
                value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
          </div>
          <button type="submit" id="botao_submit">Entrar</button>
        </form>
      </section>
    </main>
  );
};

export default FormLogin;