import React, { useState, useRef } from "react";
import PhoneFormatter from "./PhoneFormatter";
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
  
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
  
    const FORM_ACTION_URL = process.env.REACT_APP_FORM_ACTION;
  
    try {
      // Envia os dados para o Google Sheets
      const response = await fetch(FORM_ACTION_URL, {
        method: "POST",
        body: formDataToSend,
      });
  
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.warn("A resposta não é um JSON válido:", jsonError);
      }
  
      if (response.ok && data?.status === "success") {
        // Envia o email de agradecimento
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
                    ser minha paciente, to ansiosa pra cuidar de você, caso essa seja sua
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
  
        document.getElementById("mensagem").textContent =
          "Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!";
      } else {
        console.warn("Resposta inesperada do servidor:", data);
        document.getElementById("mensagem").textContent =
          "Seu formulário foi enviado. Caso não receba confirmação por e-mail, tente novamente.";
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
        <div className="form-floating mb-3">
          <input
            type="text"
            name="nome"
            className="form-control"
            id="floatingName"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <label htmlFor="floatingName" className="form-label">
            Nome
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="sobrenome"
            className="form-control"
            id="floatingLname"
            placeholder="Sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
          />
          <label htmlFor="floatingLname" className="form-label">
            Sobrenome
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email*</label>
        </div>

        <PhoneFormatter setPais={setPais} setTelefone={setTelefone} />

        <div>
          <label htmlFor="type">Você deseja:*</label>
          <div className="container-radio p-2">
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="tipoConsulta"
                value="Online"
                className="radio-input"
                required
                checked={formData.tipoConsulta === "Online"}
                onChange={handleChange}
              />
              <span>Consulta on-line</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="tipoConsulta"
                value="Presencial"
                className="radio-input"
                required
                checked={formData.tipoConsulta === "Presencial"}
                onChange={handleChange}
              />
              <span>Consulta presencialmente (Brasília)</span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="type">Qual o motivo principal do atendimento?*</label>
          <div className="container-radio p-2">
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Contracepção"
                className="radio-input"
                required
                checked={formData.motivoAtendimento === "Contracepção"}
                onChange={handleChange}
              />
              <span>Contracepção</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Colocar DIU (Brasília)"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "Colocar DIU (Brasília)"
                }
                onChange={handleChange}
              />
              <span>Colocar DIU (Brasília)</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Colocar Implanon (Brasília)"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "Colocar Implanon (Brasília)"
                }
                onChange={handleChange}
              />
              <span>Colocar Implanon (Brasília)</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Colocar Implanon (São Paulo)"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "Colocar Implanon (São Paulo)"
                }
                onChange={handleChange}
              />
              <span>Colocar Implanon (São Paulo)</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="SOP | ovário policístico"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "SOP | ovário policístico"
                }
                onChange={handleChange}
              />
              <span>SOP | ovário policístico</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Endometriose | adenomiose"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "Endometriose | adenomiose"
                }
                onChange={handleChange}
              />
              <span>Endometriose | adenomiose</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Emagrecimento | obesidade"
                className="radio-input"
                required
                checked={
                  formData.motivoAtendimento === "Emagrecimento | obesidade"
                }
                onChange={handleChange}
              />
              <span>Emagrecimento | obesidade</span>
            </label>
            <label className="mt-1 mb-1">
              <input
                type="radio"
                name="motivoAtendimento"
                value="Outro"
                className="radio-input"
                required
                checked={formData.motivoAtendimento === "Outro"}
                onChange={handleChange}
              />
              <span>Outro</span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="type">
            Deixe aqui um pequeno resumo do por quê você gostaria de uma
            consulta.
          </label>
          <textarea
            className="text-area form-control mt-1"
            name="motivoConsulta"
            placeholder="Escreva em poucas palavras o motivo."
            id="caixaTexto"
            value={formData.motivoConsulta}
            onChange={handleChange}
          ></textarea>
        </div>

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
