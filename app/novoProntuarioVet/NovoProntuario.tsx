
import './novoProntuario.css';
export default function NovoProntuario() {

 

  return (
    <section className="novo-prontuario-page">
      <div className="titulo-container">
        <h1 className="titulo-prontuario">Novo Prontuário</h1>
      </div>

      <form className="prontuario-forms-container" >

        {/* Coluna ESQUERDA */}
        <div className="form-esquerdo">

          <div className="input-garfield-container">
            <div className="imagem-garfield-container">
              <img className="garfield-imagem" src="/images/Garfield.png" alt="Garfield" />
            </div>

            <div className="inputs-bloco-1">
              <label htmlFor="nomeAnimal" className="label-prontuario">Nome do Animal:</label>
              <select id="nomeAnimal" className="input-prontuario"   />

              <label htmlFor="nomeTutor" className="label-prontuario">Nome do Tutor:</label>
              <select  id="nomeTutor" className="input-prontuario" />
            </div>
          </div>

          <div className="card-inputs-container">
            <div className="inputs-bloco-2">
              <label htmlFor="nomeEspecie" className="label-prontuario">Espécie:</label>
              <select id="nomeEspecie" className="input-prontuario"   />

              <label htmlFor="nascimento" className="label-prontuario">Data de Nascimento:</label>
              <input id="nascimento" className="input-prontuario" type="date"  />
            </div>

            <div className="inputs-bloco-2">
              <label htmlFor="raca" className="label-prontuario">Raça:</label>
              <select id="raca" className="input-prontuario"  />

              <label htmlFor="sexo" className="label-prontuario">Sexo:</label>
              <select id="sexo" className="input-prontuario" />
            </div>
          </div>

          <div className="textarea-container">
            <label htmlFor="descricaoAnimal" className="label-prontuario">Descrição do Animal:</label>
            <textarea id="descricaoAnimal" className="textarea-prontuario"  />

            <label htmlFor="sintomasAnimal" className="label-prontuario">Sintomas:</label>
            <textarea id="sintomasAnimal" className="textarea-prontuario" />
          </div>

        </div>

        {/* Coluna DIREITA */}
        <div className="form-direito">

          <div className="input-garfield-container">
            <div className="imagem-garfield-container">
              <img className="tutor-garfield-imagem" src="/images/tutor_Garfield.png" alt="Tutor Garfield" />
            </div>

            <div className="textarea-bloco-1">
              <label htmlFor="diagnostico" className="label-prontuario">Diagnóstico:</label>
              <textarea id="diagnostico" className="textarea-prontuario" />
            </div>
          </div>

          <div className="textarea-container-2">
            <div className="textarea-bloco-2">
              <label htmlFor="tratamento" className="label-prontuario">Tratamento:</label>
              <textarea id="tratamento" className="textarea-prontuario"  />

              <label htmlFor="observacoes" className="label-prontuario">Observações médicas:</label>
              <textarea id="observacoes" className="textarea-prontuario"  />
            </div>
          </div>

          <div className="inputs-final-container">
            <div className="formato-bloco">
              <label htmlFor="dataAtendimento" className="label-prontuario">Data do Atendimento:</label>
              <input id="dataAtendimento" className="input-prontuario" type="date"  />
            </div>

            <div className="formato-bloco">
              <label htmlFor="horaAtendimento" className="label-prontuario">Horário:</label>
              <input id="horaAtendimento" className="input-prontuario" type="time"  />
            </div>

            <div className="botoes-container">
              <button type="submit" className="btn-salvar">Salvar</button>
            </div>
          </div>

        </div>

      </form>
    </section>
  );
}
