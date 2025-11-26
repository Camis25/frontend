"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import "./InfoPessoais.css";

interface Pessoa {
  nm_pessoa: string;
  cpf_pessoa: string;
  rg_pessoa: string;
  dt_nasc_pessoa: string;
  tel_pessoa: string;
  email_pessoa: string;
}

interface Tutor {
  id: number;
  pessoa: Pessoa;
}

export default function InfoPessoais() {
  const router = useRouter();
  const { tutorId } = router.query; // pega o tutorId da query
  const [tutor, setTutor] = useState<Tutor | null>(null);

  useEffect(() => {
    if (!tutorId) return;

    axios
      .get<Tutor>(`http://localhost:8080/tutores/${tutorId}`)
      .then((res) => setTutor(res.data))
      .catch((err) => {
        console.error(err);
        alert("Erro ao carregar informações do tutor.");
      });
  }, [tutorId]);

  if (!tutor) {
    return <p>Carregando informações do tutor...</p>;
  }

  const handleEdit = () => {
    router.push(`/edtInfoPessoaisTutor?tutorId=${tutor.id}`);
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <img src="logo.png" alt="VET+ Logo" className="logo" />
        <nav>
          <a href="#" className="active">Perfil</a>
          <a href="#">Meus Pets</a>
          <a href="#">Agenda</a>
          <a href="#">Prontuários</a>
          <a href="#">Sair</a>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Informações Pessoais</h1>
        </header>

        <div className="content-body">
          <div className="form-container">
            <div className="form-grid">
              <div className="form-group">
                <label>Nome</label>
                <p>{tutor.pessoa.nm_pessoa}</p>
              </div>

              <div className="form-group">
                <label>CPF</label>
                <p>{tutor.pessoa.cpf_pessoa}</p>
              </div>

              <div className="form-group">
                <label>RG</label>
                <p>{tutor.pessoa.rg_pessoa}</p>
              </div>

              <div className="form-group">
                <label>Data de Nascimento</label>
                <p>{tutor.pessoa.dt_nasc_pessoa}</p>
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <p>{tutor.pessoa.tel_pessoa}</p>
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <p>{tutor.pessoa.email_pessoa}</p>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-edit" onClick={handleEdit}>
                Editar
              </button>
            </div>
          </div>
        </div>

        <div className="deco-circle"></div>
        <div className="deco-line-1"></div>
        <div className="deco-line-2"></div>
      </main>
    </div>
  );
}
