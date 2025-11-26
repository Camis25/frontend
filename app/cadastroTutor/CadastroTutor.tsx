"use client";

import { ChangeEvent, useState } from "react";
import "./CadastroTutor.css";
import React from "react";
import axios from "axios";

export default function CadastroTutor() {
  const [formData, setFormData] = useState({
    nm_pessoa: "",
    dt_nasc_pessoa: "",
    tel_pessoa: "",
    rg_pessoa: "",
    cpf_pessoa: "",
    email_pessoa: "",
    senha_pessoa: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload = {
      pessoa: {
        nm_pessoa: formData.nm_pessoa,
        dt_nasc_pessoa: formData.dt_nasc_pessoa,
        tel_pessoa: formData.tel_pessoa,
        rg_pessoa: formData.rg_pessoa,
        cpf_pessoa: formData.cpf_pessoa,
        email_pessoa: formData.email_pessoa,
        senha_pessoa: formData.senha_pessoa,
      },
    };

    try {
      const response = await axios.post("http://localhost:8080/tutores", payload);
      alert("Tutor cadastrado com sucesso!");
      console.log(response.data);
      window.location.replace("/infoPessoaisTutor");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar tutor!");
    }
  }

  return (
    <section>
      <div className="imagens">
        <img className="cao" src="/images/cao-cadastro.jpg" alt="cao" />

        <div className="form-cadastro">
          <img className="fundo-cadastro" src="/images/Group 82.png" alt="fundo" />

          <form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <input
              type="text"
              name="nm_pessoa"
              placeholder="Nome Completo"
              value={formData.nm_pessoa}
              onChange={handleChange}
              required
            />

            <div className="inputs-form">
              <input
                type="date"
                name="dt_nasc_pessoa"
                value={formData.dt_nasc_pessoa}
                onChange={handleChange}
                required
              />

              <input
                className="input-margin"
                type="tel"
                name="tel_pessoa"
                placeholder="Telefone"
                value={formData.tel_pessoa}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputs-form">
              <input
                type="text"
                name="rg_pessoa"
                placeholder="RG"
                value={formData.rg_pessoa}
                onChange={handleChange}
                required
              />

              <input
                className="input-margin"
                type="text"
                name="cpf_pessoa"
                placeholder="CPF"
                value={formData.cpf_pessoa}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email_pessoa"
              placeholder="Email"
              value={formData.email_pessoa}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="senha_pessoa"
              placeholder="Senha"
              value={formData.senha_pessoa}
              onChange={handleChange}
              required
            />

            <div className="botao-link">
              <button type="submit">Cadastrar</button>

              <a href="#">Seja nosso colaborador</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
