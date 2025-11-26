import React from "react";
import "./horarios.css";

export default function Horarios() {
  return (
    <div className="prontuarios-pagina">
      {/* BARRA LATERAL */}
      <aside className="menu-lateral">
        {/* Conteúdo do Menu aqui */}
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content-prontuarios">
        {/* Título e botão Novo */}
        <div className="horarios-header">
          <h1 className="titulo-prontuarios">Horários Disponíveis</h1>
          <button type="button" className="btn-novo">Novo</button>
        </div>

        {/* Lista de horários */}
        <section className="horarios-grid">
          <article className="horario-card">
            <p className="horario-tutor">Camile Vitória</p>
            <p className="horario-especialidade">Ortopedia</p>

            <div className="horario-info">
              <span className="horario-icon">📅</span>
              <span>04/11/2025</span>
            </div>

            <div className="horario-info">
              <span className="horario-icon">⏰</span>
              <span>09h00</span>
            </div>
          </article>
        </section>

        {/* Paginação */}
        <nav className="paginacao" aria-label="Paginação de horários">
          <button type="button" className="page-link active">1</button>
          <button type="button" className="page-link">2</button>
          <button type="button" className="page-link">3</button>
        </nav>
      </main>
    </div>
  );
}