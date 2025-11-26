import './Prontuarios.css';

export default function Prontuarios() {
  return (
    <div className="prontuarios-pagina">
      
      <aside className="sidebar-prontuarios">
        <img src="/images/logo.png" alt="Vet+ Logo" className="logo" />
        
        <nav className="sidebar-nav">
          <a href="/infoPessoal">Perfil</a>
          <a href="/prontuarioAnimal">Prontuários</a>
          <a href="/agenda">Agenda</a>
          <a href="/">Sair</a>
        </nav>
      </aside>

      <main className="main-content-prontuarios">
        <h1 className="titulo-prontuarios">Prontuários</h1>
        
        <div className="prontuario-tabela">
          
          <div className="prontuario-header">
            <span>Número de protocolo</span>
            <span>Nome</span>
            <span>Espécie</span>
            <span>Sexo</span>
            <span></span>
          </div>

          {/* Exemplo de linha — você pode duplicar ou substituir depois */}
          <div className="prontuario-linha">
            <span><strong>01</strong></span>
            <span>Animal Exemplo</span>
            <span>Cachorro</span>
            <span>Macho</span>
            <span className="ver-mais-btn">Ver mais</span>
          </div>

          <div className="prontuario-linha">
            <span><strong>02</strong></span>
            <span>Animal Exemplo 2</span>
            <span>Gato</span>
            <span>Fêmea</span>
            <span className="ver-mais-btn">Ver mais</span>
          </div>
        </div>
        
        <div className="paginacao">
          <a href="#" className="page-link active">1</a>
          <a href="#" className="page-link">2</a>
          <a href="#" className="page-link">3</a>
        </div>
      </main>
    </div>
  );
}
