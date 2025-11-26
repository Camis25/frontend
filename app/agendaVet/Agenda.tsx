import React from "react";
import "./agenda.css";

export default function Agenda() {
    return (
        <div className="prontuarios-pagina">
            
            {/* MENU — substitua pelo componente ou HTML que desejar */}
            <div className="menu">
                {/* Conteúdo do Menu */}
            </div>

            <main className="main-content-prontuarios">

                <div className="horarios-header">
                    <h1 className="titulo-prontuarios">Agendamentos</h1>
                    <a href="/novo-agendamento" className="btn-novo">Novo</a>
                </div>

                <div className="prontuario-tabela">
                    <table className="prontuario-table">
                        <thead>
                            <tr className="prontuario-header">
                                <th>Nome do Animal</th>
                                <th>Espécie</th>
                                <th>Sexo</th>
                                <th>Especialidade</th>
                                <th>Data</th>
                                <th>Hora</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="prontuario-linha">
                                <td>Animal Exemplo</td>
                                <td>Canino</td>
                                <td>Macho</td>
                                <td>Clínico Geral</td>
                                <td>01/01/2024</td>
                                <td>14:00</td>
                                <td style={{ color: "green" }}>Confirmado</td>
                                <td>
                                    <a href="/fichaagendamento" className="ver-mais-link">
                                        Ver mais
                                    </a>
                                </td>
                            </tr>

                            <tr className="prontuario-linha">
                                <td>Gatinho Azul</td>
                                <td>Felino</td>
                                <td>Fêmea</td>
                                <td>Vacinação</td>
                                <td>02/01/2024</td>
                                <td>10:00</td>
                                <td style={{ color: "orange" }}>Pendente</td>
                                <td>
                                    <a href="/fichaagendamento" className="ver-mais-link">
                                        Ver mais
                                    </a>
                                </td>
                            </tr>

                            <tr className="prontuario-linha">
                                <td>Bruce</td>
                                <td>Canino</td>
                                <td>Macho</td>
                                <td>Cirurgia</td>
                                <td>03/01/2024</td>
                                <td>09:30</td>
                                <td style={{ color: "red" }}>Cancelado</td>
                                <td>
                                    <a href="/fichaagendamento" className="ver-mais-link">
                                        Ver mais
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
