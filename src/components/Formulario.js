import React, { useState, useRef } from "react";
import PhoneFormatter from "./formulario/PhoneFormatter";
import NomeInput from "./formulario/NomeInput";
import EmailInput from './formulario/EmailInput';
import MotivoAtendimento from "./formulario/MotivoAtendimento";
import TipoConsulta from "./formulario/TipoConsulta";
import MotivoConsulta from './formulario/MotivoConsulta';
import axios from "axios";

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

        const brevoKey = process.env.REACT_APP_BREVO_KEY;
        const brevoUrl = "https://api.brevo.com/v3/smtp/email";

        const emailPayload = {
          sender: { email: "majuferreira.site@gmail.com", name: "MajuFerreira.com" },
          to: [{ email: formData.email, name: formData.nome }],
          subject: "Obrigada pela sua solicitação!",
          htmlContent: `
            <html>
              <body>
                <div style="font-family: Arial, sans-serif; color: #333;">
                  <p style="font-size: 18px; font-weight: bold; color: #794f37; margin-bottom: 20px;">
                    Seu cadastro foi recebido com sucesso!
                  </p>
                  <p>Oi, <strong>${formData.nome}</strong>!</p>
                  <p>
                    Vim aqui te dizer que já recebemos seu cadastro na lista de espera pra
                    ser minha paciente, tô ansiosa pra cuidar de você, caso essa seja sua
                    escolha!
                  </p>
                  <p>
                    Lembrando que não sabemos de forma certa em quanto tempo você vai ser
                    chamada, porque isso depende do número de cadastros no mês, número de
                    agendamentos, minha disponibilidade, etc!
                  </p>
                  <p>Se for: 
                    <ul>
                      <li>Urgente</li>
                      <li>Inserção de Implanon</li>
                      <li>Inserção de DIU</li>
                      <li>Inserção em São Paulo</li>
                    </ul>
                  </p>
                  <p>
                    Sinta-se à vontade para avisar a 
                    <a href="https://www.instagram.com/marisecretariavirtual/" target="_blank">
                      @marisecretariavirtual
                    </a> no direct do Instagram pra gente tentar um encaixe.
                  </p>
                  <p>Espero você comigo ❤️</p>
                  <p style="font-size: 14px; color: #666; margin-top: 40px;">
                    Este é um e-mail automático. Por favor, não responda.
                  </p>
                </div>
              </body>
            </html>
          `,
        };

        await axios.post(brevoUrl, emailPayload, {
          headers: {
            "api-key": brevoKey,
            "Content-Type": "application/json",
          },
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
