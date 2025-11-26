import './controlDispo.css';

export default function ControlDispo() {
  return (
    <div className="layout">
      <main className="content">
        <h1 className="pageTitle">Controlar Vagas</h1>

        <button className="btnVoltar" aria-label="Voltar">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M14 18L8 11L14 4"
              stroke="#f68b1f"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <section className="card cardControlar">
          <div className="row">
            <div className="fieldGroup">
              <label htmlFor="dia">Dia:</label>
              <input id="dia" type="date" />
            </div>

            <div className="fieldGroup reservarPor">
              <span className="fieldLabel">Reservar vagas por:</span>
              <label>
                <input type="radio" name="tipoReserva" defaultChecked />
                <span>Procedimento</span>
              </label>
              <label>
                <input type="radio" name="tipoReserva" />
                <span>Especialidade</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className="fieldGroup fieldGroupFull">
              <label htmlFor="proc">Procedimento / Especialidade:</label>
              <input
                type="text"
                id="proc"
                placeholder="Digite o procedimento ou especialidade"
              />
            </div>
          </div>

          <div className="row">
            <div className="fieldGroup quantidade">
              <label htmlFor="qtd">Aplicar quantidade de vagas padrão:</label>
              <input id="qtd" type="number" min="0" defaultValue="1" />
            </div>

            <div className="fieldGroup aplicarCustomizar">
              <label>
                <input type="radio" name="modoVaga" defaultChecked />
                <span>Aplicar</span>
              </label>
              <label>
                <input type="radio" name="modoVaga" />
                <span>Customizar</span>
              </label>
            </div>
          </div>

          <div className="horariosWrapper">
            <div className="horarioCard">10:00</div>
          </div>

          <div className="actions">
            <button className="btn btnSecondary">Cancelar</button>
            <button className="btn btnPrimary">Salvar</button>
          </div>
        </section>
      </main>
    </div>
  );
}
