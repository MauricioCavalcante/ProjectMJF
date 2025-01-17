import React from "react";

const FAQSection = () => {
  return (
    <section className="container container-box mx-auto px-4">
      <h4 className="p-3 text-lg font-bold">FAQ: PERGUNTAS FREQUENTES</h4>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          1 - Como funciona a lista de espera?
        </summary>
        <p className="mt-2">
          A lista de espera foi criada pelo volume de mensagens que recebíamos
          no nosso antigo WhatsApp (que foi banido por excesso de contatos 🤡).
          Sendo assim, a Mari analisa a lista e te chama conforme for possível,
          tendo em vista o volume de pessoas, quantas já agendaram,
          disponibilidade de horários, etc!
          <br />
          <br />
          Não temos como garantir em quanto tempo você será chamada! Se for
          urgente, por favor deixe uma mensagem no espaço da lista que contém
          essa opção!
          <br />
          <br />
          Você encontra mais informações sobre as minhas consultas no meu
          destaque do Instagram: “consultas” e “depoimentos” ❤️
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          2 - Maju, você trabalha com plano de saúde?
        </summary>
        <p className="mt-2">
          Não trabalhamos com consultas pelo plano, mas, para os planos que
          trabalham com reembolso, emitimos a nota fiscal normalmente para que
          você entre com o pedido para reembolsar!
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          3 - Como funciona a consulta online?
        </summary>
        <p className="mt-2">
          Toda a anamnese (entrevista médica) é feita normalmente e, caso
          precise de exames complementares, eles são solicitados normalmente com
          receituário eletrônico.
          <br />
          <br />
          As receitas são enviadas via e-mail para o paciente, também com
          assinatura digital. Você pode ver mais sobre como as consultas
          funcionam no destaque do meu Instagram: “consultas”!
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          4 - Onde são os atendimentos presenciais?
        </summary>
        <p className="mt-2">
          No consultório Ilitia, no Edifício Multiclinicas, Asa Norte, Brasília.
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          5 - Como vão entrar em contato comigo?
        </summary>
        <p className="mt-2">
          Quando você for ser chamada, a Mari (nossa secretária maravilha) irá
          te chamar pelo nosso WhatsApp de marcações!
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          6 - Você é especialista?
        </summary>
        <p className="mt-2">
          Não. Sou médica generalista, inscrita no CRM-DF 31351 e escolhi atuar,
          principalmente, com saúde da mulher. Você pode ter acesso a
          informações mais específicas sobre este assunto nos meus destaques do
          Instagram: “consultas” e “medicina”! ❤️
        </p>
      </details>

      <details className="p-2 mb-2">
        <summary className="cursor-pointer font-semibold">
          7 - Tenho tocofobia Maju, o que eu faço?
        </summary>
        <p className="mt-2">
          Se a razão pela qual você entrará na lista de espera é tocofobia,
          muito medo de engravidar ou insegurança em relação a métodos
          contraceptivos e gravidez,{" "}
          <a
            href="https://mjferreira.com.br/tocofobia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            clique aqui
          </a>
          , tendo em vista que para ser chamada na lista de espera, pode demorar
          um pouquinho.
        </p>
      </details>
    </section>
  );
};

export default FAQSection;