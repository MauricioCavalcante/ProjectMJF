const axios = require("axios");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    const brevoKey = process.env.REACT_APP_BREVO_KEY;

    if (!brevoKey) {
      throw new Error("Chave da API da Brevo não encontrada");
    }

    if (!data.email || !data.nome) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Campos obrigatórios ausentes" }),
      };
    }

    const emailPayload = {
      sender: {
        email: "majuferreira.site@gmail.com",
        name: "MajuFerreira.com",
      },
      to: [{ email: data.email, name: data.nome }],
      subject: "Obrigada pela sua solicitação!",
      htmlContent: `
        <html>
          <body>
            <div style="font-family: Arial, sans-serif; color: #333;">
              <p style="font-size: 18px; font-weight: bold; color: #794f37; margin-bottom: 20px;">
                Seu cadastro foi recebido com sucesso!
              </p>
              <p>Oi, <strong>${data.nome}</strong>!</p>
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

    await axios.post("https://api.brevo.com/v3/smtp/email", emailPayload, {
      headers: {
        "api-key": brevoKey,
        "Content-Type": "application/json",
      },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Email enviado com sucesso" }),
    };
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error.message);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Erro ao enviar o e-mail" }),
    };
  }
};
