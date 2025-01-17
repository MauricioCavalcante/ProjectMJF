import React from "react";
import FAQSection from "../components/FAQSection";
import Carousel from "../components/Carousel";
import HomeButton from "../components/HomeButton";

function Home() {
  const images = [
    { src: "./imagens/relato-1-1.jpg", alt: "Depoimento 1" },
    { src: "./imagens/relato-1-2.jpg", alt: "Depoimento 2" },
    { src: "./imagens/relato-1-3.jpg", alt: "Depoimento 3" },
    { src: "./imagens/relato-1-4.jpg", alt: "Depoimento 4" },
    { src: "./imagens/relato-1-5.jpg", alt: "Depoimento 5" },
    { src: "./imagens/relato-1-6.jpg", alt: "Depoimento 6" },
    { src: "./imagens/relato-1-7.jpg", alt: "Depoimento 7" },
    { src: "./imagens/relato-1.jpeg", alt: "Depoimento 8" },
    { src: "./imagens/relato-2.jpeg", alt: "Depoimento 9" },
    { src: "./imagens/relato-3.jpeg", alt: "Depoimento 10" },
    { src: "./imagens/relato-4.jpeg", alt: "Depoimento 11" },
    { src: "./imagens/relato-5.jpeg", alt: "Depoimento 12" },
    { src: "./imagens/relato-6.jpeg", alt: "Depoimento 13" },
    { src: "./imagens/relato-7.jpeg", alt: "Depoimento 14" },
    { src: "./imagens/relato-8.jpeg", alt: "Depoimento 15" },
  ];

  return (
    <div>
      <header>
        <section className="d-flex justify-content-center align-items-end container-topo mb-2">
          <img src="./imagens/logo-white.png" alt="logo-maju" />
        </section>
      </header>

      <main>
        <section className="container-fluid container-box mb-4 mt-4">
          <div className="row text-nowrap">
            <div className="col">
              <h1 className="display-3">Quem é Maju?</h1>
              <ul>
                <li>Médica (CRMDF-31351)</li>
                <li>Criadora de conteúdo</li>
                <li>Natural de Brasília-DF</li>
              </ul>
              <p className="m-3">
                Números oficiais <br />
                (61) XXXXX-5672 <br />
                (61) XXXXX-5608
              </p>
            </div>
          </div>
          <HomeButton />
        </section>
        <FAQSection />
        <section className="container-fluid mb-3">
          <div className="text-center">
            <h4 className="p-3">
              Clique aqui para entrar na lista de espera para consultas on-line
              ou presencial:
            </h4>
          </div>
          <HomeButton />
        </section>
        <Carousel images={images} interval={5000} />
      </main>
    </div>
  );
}

export default Home;