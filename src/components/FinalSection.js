import React, { useState, useEffect } from 'react';

const COUNT_LINES_URL = process.env.REACT_APP_TOTAL_FORM;

const FinalSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalFormularios, setTotalFormularios] = useState(0);
  const [formulariosUltimos30Dias, setFormulariosUltimos30Dias] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setMensagem('Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!');
    atualizarNumeroLinhas();
  }, []);


  const atualizarNumeroLinhas = () => {
    fetch(COUNT_LINES_URL)
      .then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
          throw new Error('Erro ao obter número de linhas');
        }
      })
      .then(data => {
        setTotalFormularios(data.totalRowCount);
        setFormulariosUltimos30Dias(data.recentRowCount);
        setIsLoading(false);
        
      })
      .catch(error => {
        console.error('Erro ao obter número de linhas:', error);
        setIsLoading(false);
      });
  };

  return (
    <section className="container-fluid text-center p-4" >
      <div className="m-2" id="mensagem">
        <p>{mensagem}</p>
      </div>
      <div className="mt-4">
        <p className="fs-3"><strong>🚨IMPORTANTE 🚨</strong></p>
        <p>
          Veja o vídeo abaixo, nele contém informações sobre sua consulta e
          colocação na lista! Verifique sua caixa de email!
        </p>
      </div>
      <div className="mt-2">
      <video src="./videos/lista-de-espera.mp4" controls></video>
      </div>
      <div className="total-form me-auto ms-auto mt-4 p-2" id="numeroLinhas">
        <p>Total de formulários enviados até o momento:</p>
        <div className="m-0">
          {isLoading ? (
            <div className="me-auto ms-auto" id="loader"></div>
          ) : (
            <p>{totalFormularios}</p>
          )}
        </div>
      </div>
      <div className="total-form me-auto ms-auto mt-4 p-2" id="formularioMensal">
        <p>Total de formulários enviados nos últimos <u><strong>30 dias</strong></u>:</p>
        <div className="m-0">
          {isLoading ? (
            <div className="me-auto ms-auto" id="loader"></div>
          ) : (
            <p>{formulariosUltimos30Dias}</p>
          )}
        </div>
      </div>
      <div className="mt-5 me-auto ms-auto text-start tocofobia">
        <h1>TENHO TOCOFOBIA</h1>
        <p>
          Se a razão pela qual você entrou na lista de espera é tocofobia, muito
          medo de engravidar ou insegurança em relação a métodos contraceptivos
          e gravidez, <a href="https://mjferreira.com.br/tocofobia/" rel="noopener noreferrer">clique aqui</a>, tendo em
          vista o tempo necessário para ser chamada, por vezes, na lista de espera.
        </p>
      </div>
    </section>
  );
};

export default FinalSection;