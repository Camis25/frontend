"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <- IMPORT CORRETO
import axios from "axios";
import './LoginEntrar.css';

export default function LoginEntrar() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        senha: senha
      });

      const tutor = response.data; // supondo que o backend retorne o tutor com ID
      console.log("Tutor logado:", tutor);

      // Navega para a página de edição passando o tutorId
      router.push(`/edtInfoPessoaisTutor?tutorId=${tutor.id}`);
    } catch (error) {
      console.error(error);
      alert('Usuário inválido!');
    }
  };

  return (
    <main>
      <div className="login-container">
        <div className="image-panel">
          <img alt="Imagem de Login" />
        </div>
        <div className="form-panel">
          <form onSubmit={handleLogin}>
            <h2>Entrar</h2>

            <label htmlFor="usuario">Usuário (E-mail)</label>
            <input 
              type="text" 
              id="usuario"
              name="usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />

            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
            />

            <button type="submit" className="btn-primary">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
