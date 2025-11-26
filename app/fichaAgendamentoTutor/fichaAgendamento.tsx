import './fichaAgendamento.css';

export default function FichaAgendamento() {
  return (
    <div className="ficha-container">

  <div className="ficha-content">
    <div className="ficha-header-left">
      <img src="/images/logo.png" alt="logo" />
      <h1 className="titulo">Ficha de Agendamento</h1>
    </div>

    <div className="protocolo">
      Protocolo <strong>XXXXXXXXX</strong>
    </div>
  </div>

  {/* ------------------- DADOS DO ANIMAL ------------------- */}
  <div className="row">
    <div className="campo">
      <label>Nome do Animal</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Raça</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Data de Nascimento</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Espécie</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Sexo</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>RGA</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Nome Tutor</label>
      <input className="input-readonly" />
    </div>

    <div className="campo descricao-animal">
      <label>Descrição do Animal</label>
      <textarea className="input-readonly"></textarea>
    </div>
  </div>

  {/* ------------------- TÍTULO DA SEÇÃO ------------------- */}
  <h2 className="titulo-secao">Dados da Consulta</h2>

  {/* ------------------- DADOS DA CONSULTA ------------------- */}
  <div className="row">
    <div className="campo">
      <label>Veterinário(a)</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Hospital</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Especialidade</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Data</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Hora</label>
      <input className="input-readonly" />
    </div>

    <div className="campo">
      <label>Status</label>
      <select className="select-status">
        <option>Pendente</option>
        <option>Confirmado</option>
        <option>Cancelado</option>
      </select>
    </div>
  </div>

  {/* ------------------- BOTÕES ------------------- */}
  <div className="ficha-actions">
    <button className="btn-salvar">Salvar</button>
    <button className="btn-voltar">Voltar</button>
  </div>

</div>

  );
}
