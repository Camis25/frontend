"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

interface Pessoa {
  nm_pessoa: string;
  cpf_pessoa: string;
  rg_pessoa: string;
  dt_nasc_pessoa: string;
  tel_pessoa: string;
  email_pessoa: string;
}

interface Tutor {
  id: number;
  pessoa: Pessoa;
}

export default function EdtInfoPessoais() {
  const router = useRouter();
  const searchParams = useSearchParams(); // para pegar query string
  const tutorId = searchParams.get("tutorId");

  const [tutor, setTutor] = useState<Tutor | null>(null);

  useEffect(() => {
    if (!tutorId) return;

    axios
      .get<Tutor>(`http://localhost:8080/tutores/${tutorId}`)
      .then((res) => setTutor(res.data))
      .catch((err) => {
        console.error(err);
        alert("Erro ao carregar informações do tutor.");
      });
  }, [tutorId]);

  const handleSave = async () => {
    if (!tutorId || !tutor) return;

    try {
      await axios.put(`http://localhost:8080/tutores/${tutorId}`, tutor);
      alert("Dados atualizados com sucesso!");
      router.push(`/infoPessoais?tutorId=${tutorId}`);
    } catch (err) {
      console.error(err);
      alert("Erro ao atualizar dados.");
    }
  };

  if (!tutor) return <p>Carregando informações...</p>;

  return (
    <div>
      <h1>Editar Informações do Tutor</h1>
      <label>Nome</label>
      <input
        value={tutor.pessoa.nm_pessoa}
        onChange={(e) =>
          setTutor({ ...tutor, pessoa: { ...tutor.pessoa, nm_pessoa: e.target.value } })
        }
      />
      <label>E-mail</label>
      <input
        value={tutor.pessoa.email_pessoa}
        onChange={(e) =>
          setTutor({ ...tutor, pessoa: { ...tutor.pessoa, email_pessoa: e.target.value } })
        }
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}
