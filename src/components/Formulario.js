import React, { useState, useRef } from "react";
import PhoneFormatter from "./formulario/PhoneFormatter";
import NomeInput from "./formulario/NomeInput";
import EmailInput from './formulario/EmailInput'
import MotivoAtendimento from "./formulario/MotivoAtendimento";
import TipoConsulta from "./formulario/TipoConsulta";
import MotivoConsulta from './formulario/MotivoConsulta';


const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    pais: "+55",
    telefone: "",
    tipoConsulta: "",
    motivoAtendimento: "",
    motivoConsulta: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const setTelefone = (telefone) => {
    setFormData((prevData) => ({
      ...prevData,
      telefone,
    }));
  };

  const setPais = (ddi) => {
    setFormData((prevData) => ({
      ...prevData,
      pais: ddi,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    document.getElementById("principal").style.display = "none";
    document.getElementById("finalSection").style.display = "block";
    document.getElementById("mensagem").textContent = "Enviando...";

    if (!formData.nome || !formData.email || !formData.telefone) {
      document.getElementById("mensagem").textContent = "Preencha todos os campos obrigatórios!";
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const FORM_ACTION_URL = process.env.REACT_APP_FORM_ACTION;

    try {
      const response = await fetch(FORM_ACTION_URL, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
  
        document.getElementById("mensagem").textContent =
          "Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!";

        await fetch("/.netlify/functions/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
          }),
        });

        
      } else {
        console.warn("Erro na resposta:", data);
        document.getElementById("mensagem").textContent =
          "Seu formulário foi enviado, mas algo deu errado. Tente novamente.";
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      document.getElementById("mensagem").textContent =
        "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.";
    } finally {
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <section className="container-fluid container-form p-4">
      <form ref={formRef} onSubmit={handleSubmit}>
        <NomeInput nome={formData.nome} sobrenome={formData.sobrenome} onChange={handleChange} />
        <EmailInput email={formData.email} onChange={handleChange} />
        <PhoneFormatter setPais={setPais} setTelefone={setTelefone} />
        <TipoConsulta tipoConsulta={formData.tipoConsulta} onChange={handleChange} />
        <MotivoAtendimento motivoAtendimento={formData.motivoAtendimento} onChange={handleChange} />
        <MotivoConsulta motivoConsulta={formData.motivoConsulta} onChange={handleChange} />

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="button-form mb-0">
            ENTRAR NA LISTA DE ESPERA
          </button>
        </div>
      </form>

      <div className="text-center mt-2">
        <span style={{ fontSize: "small", lineHeight: 0 }}>
          Ao enviar você receberá um email com a confirmação do seu cadastro.
        </span>
      </div>
    </section>
  );
};

export default Formulario;
