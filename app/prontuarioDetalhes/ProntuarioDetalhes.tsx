export default function ProntuarioDetalhes() {
  return (
    <div className="detalhe-pagina">

      <button className="btnVoltar">
        ← Voltar
      </button>

      <div className="detalhe-card">
        <div className="detalhe-card-conteudo">

          <header className="detalhe-header">
            <img src="/images/logo.png" alt="Vet+ Logo" className="logo" />

            <div className="detalhe-titulo-protocolo">
              <h1 className="detalhe-titulo">Prontuário</h1>
              <div className="detalhe-protocolo">
                <span>Protocolo</span>
                <span className="detalhe-protocolo-numero">01</span>
              </div>
            </div>
          </header>

          <section className="detalhe-secao-flex">
            <div className="detalhe-grupo-coluna">
              <label>Nome do Animal</label>
              <span>Nome Exemplo</span>

              <label>Espécie</label>
              <span>Cachorro</span>

              <label>Nome Tutor</label>
              <span>João Silva</span>

              <label>Descrição do Animal</label>
              <span>Animal dócil e saudável.</span>
            </div>

            <div className="detalhe-grupo-coluna">
              <label>Sexo</label>
              <span>Macho</span>

              <label>Raça</label>
              <span>Labrador</span>

              <label>RA</label>
              <span>123456</span>
            </div>

            <div className="detalhe-grupo-coluna">
              <label>Data de Nascimento</label>
              <span>10/01/2021</span>
            </div>
          </section>

          <h2 className="detalhe-titulo-secao">Dados da Consulta</h2>

          <section className="detalhe-secao-flex">
            <div className="detalhe-grupo-coluna">
              <label>Veterinário(a)</label>
              <span>Dra. Maria Souza</span>
            </div>

            <div className="detalhe-grupo-coluna">
              <label>Data</label>
              <span>05/02/2025</span>
            </div>

            <div className="detalhe-grupo-coluna">
              <label>Hora</label>
              <span>14:30</span>
            </div>

            <div className="detalhe-grupo-coluna">
              <label>Hospital</label>
              <span>Hospital VetMais</span>
            </div>
          </section>

          <section className="detalhe-secao-inline">
            <div className="detalhe-inline-grupo">
              <label>Sintomas</label>
              <span>Febre e falta de apetite.</span>
            </div>

            <div className="detalhe-inline-grupo">
              <label>Diagnóstico</label>
              <span>Infecção viral leve.</span>
            </div>

            <div className="detalhe-inline-grupo">
              <label>Tratamento</label>
              <span>Medicação por 7 dias.</span>
            </div>

            <div className="detalhe-inline-grupo">
              <label>Observações</label>
              <span>Retorno em 10 dias.</span>
            </div>
          </section>

          <footer className="detalhe-footer">
            <a href="#" className="download-icon" title="Baixar PDF">
              ⤓
            </a>
          </footer>

        </div>
      </div>
    </div>
  );
}
