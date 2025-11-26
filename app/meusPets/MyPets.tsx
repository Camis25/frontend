import "./MyPets.css";


export default function MyPets() {
  return (
    <div className="layout mypets-layout">
    

      <div className="pets-container">
        <h1 className="pets-title">Meus PETS</h1>

        <div className="pets-header">
          <h2 className="pets-subtitle">Pets cadastrados</h2>
          <button  className="btn-cadastrar">
            Cadastrar Novo
          </button>
        </div>

        <div className="pets-grid">
          <div className="pet-card">
            <p className="pet-name">Nome do Pet</p>

            <div className="pet-info">
              <p>
               Espécie
              </p>
              <p>
                Gênero
              </p>
              <p>
               
              </p>
              <p>
                 Data de Nascimento
              </p>
            </div>

            <div className="pet-actions">
              <button  className="edit-icon">
            
              </button>

              <button className="delete-icon">
              
              </button>
            </div>
          </div>
        </div>

        {/* Paginação */}
        <div className="pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}
