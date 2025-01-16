import React, { useState } from 'react';
import FormComponent from "../components/Formulario";
import FinalSection from "../components/FinalSection";

const WaitingList = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Formulário enviado:', formData);
    setIsFormSubmitted(true);
  };


  return (
    <div>
      <header>
        <section className="container-topo-form mb-2">
          <div className="imagem-topo-dark-form">
            <div className="imagem-topo-logo-form">
              <img
                src="./imagens/logo-white.png"
                className="imagem-topo-form"
                alt="logo-maju"
              />
            </div>
          </div>
        </section>
      </header>
      <main>
        <section id="principal" className="container-fluid container-box mt-1" style={{ display: isFormSubmitted ? 'none' : 'block' }}>
          <p>
            Se você chegou até aqui, isso significa que você tem interesse em
            uma consulta! Como nosso whatsapp é muito congestionado, trabalhamos
            com uma lista de espera pra que possamos chamar vocês pela ordem de
            envio.
            <br />
            <br />
            <strong>
              Ao ser chamada, você será contatada via Whatsapp por algum de
              nossos números oficiais (escritos na página anterior) pela Mari
              (minha secretária)!
            </strong>
            <br />
            <br />
            <strong>
              Se sua consulta for urgente por algum motivo, contate a 
              <a
                href="https://www.instagram.com/marisecretariavirtual/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-instagram px-2"
              >
                @marisecretariavirtual
              </a> 
              no direct que ela tentará te ajudar, dependendo da disponibilidade
              do mês
            </strong>
            <br />
            <br />
            Não esqueça de preencher os seus dados corretamente, porque
            precisamos deles para realizar o contato, ok? ❤️
            <br />
            <br />
            Maju Ferreira <br />
            Médica <br />
            CRM-DF 31351
          </p>
        <FormComponent onSubmit={handleFormSubmit} />
        </section>
        <section id="finalSection" style={{ display: isFormSubmitted ? 'block' : 'none' }}>
          <FinalSection />
        </section>
      </main>
    </div>
  );
};

export default WaitingList;