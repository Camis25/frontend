import './EdtInfoPessoais.css';

export default function EdtInfoPessoais() {
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <img src="/logo.png" alt="VET+ Logo" className="logo" />

        <nav>
          <a href="/infoPessoais" className="active">Perfil</a>
          <a href="/MyPets">Meus Pets</a>
          <a href="/agenda">Agenda</a>
          <a href="/prontuarioAnimal">Prontuários</a>
          <a href="/">Sair</a>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Editar Informações Pessoais</h1>
        </header>

        <div className="content-body">
          <form className="form-container">
            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" />
              </div>

              <div className="form-group">
                <label htmlFor="rg">RG</label>
                <input type="text" id="rg" />
              </div>

              <div className="form-group">
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input type="text" id="nascimento" />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" />
              </div>

            </div>

            <div className="form-actions">
              <button type="submit" className="btn-edit">Salvar</button>
              <button type="button" className="btn-cancel">Cancelar</button>
            </div>
          </form>
        </div>

        <div className="deco-circle"></div>
        <div className="deco-line-1"></div>
        <div className="deco-line-2"></div>
      </main>
    </div>
  );
}
