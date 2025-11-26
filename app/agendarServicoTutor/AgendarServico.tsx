import React from "react";
import "./agendarServico.css";

export default function AgendarServico() {
  return (
    <section className="agendar-servico">
      <div className="agendar-servico-container">

        <header className="agendar-header">
          <img src="/images/logo.png" alt="Vet+ Logo" className="logo" />
          <div className="titulo-container">
            <h1 className="titulo-agendar">Agendar Serviço</h1>
          </div>
        </header>

        <form className="form-agendamento">

          <div className="form-row-inputs">

            <div className="form-grupo">
              <label htmlFor="procedimento">Selecione o procedimento:</label>
              <select id="procedimento">
                <option value="">Todos</option>
                <option value="Vacinação">Vacinação</option>
                <option value="Clinica geral">Clinica geral</option>
                <option value="Ortopedia">Ortopedia</option>
                <option value="Castração">Castração</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Exames Laboratoriais">Exames Laboratoriais</option>
                <option value="Cardiologista">Cardiologista</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Oftalmologista">Oftalmologista</option>
                <option value="Cirurgia">Cirurgia</option>
              </select>
            </div>

            <div className="form-grupo">
              <label htmlFor="cep">Digite seu CEP:</label>
              <input 
                type="text" 
                id="cep"
                placeholder="Ex: 01310-100"
              />
            </div>

          </div>

          <h2 className="secao-titulo">Selecione o PET:</h2>

          <div className="pet-list">
            <div className="pet-card">
              <h3>🐶 Nome do Pet</h3>
              <p>Espécie - Raça</p>
            </div>

            <div className="pet-card">
              <h3>🐱 Outro Pet</h3>
              <p>Espécie - Raça</p>
            </div>
          </div>

          <h2 className="secao-titulo">Horários disponíveis:</h2>

          <div className="horario-list-container">
            <div className="horario-list">

              <div className="horario-card">
                <h3>👩‍⚕️ Veterinário Exemplo</h3>
                <p>🩺 Procedimento</p>
                <p>📅 01/01/2024</p>
                <p>⏰ 14:00</p>
                <p>📍 São Paulo</p>
              </div>

              <div className="horario-card">
                <h3>👩‍⚕️ Médico 2</h3>
                <p>🩺 Outro Serviço</p>
                <p>📅 02/01/2024</p>
                <p>⏰ 09:00</p>
                <p>📍 Campinas</p>
              </div>

            </div>
          </div>

          <footer className="agendar-footer">
            <button type="button" className="btn btn-cancelar-ag">
              Cancelar
            </button>

            <button type="submit" className="btn btn-agendar-ag">
              Agendar
            </button>
          </footer>

        </form>

      </div>
    </section>
  );
}
