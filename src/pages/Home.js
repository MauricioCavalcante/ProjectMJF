import React from "react";
import depoimento1 from '../assets/imagens/relato-1-1.jpg';
import depoimento2 from '../assets/imagens/relato-1-2.jpg';
import depoimento3 from '../assets/imagens/relato-1-3.jpg';
import depoimento4 from '../assets/imagens/relato-1-4.jpg';
import depoimento5 from '../assets/imagens/relato-1-5.jpg';
import depoimento6 from '../assets/imagens/relato-1-6.jpg';
import depoimento7 from '../assets/imagens/relato-1-7.jpg';
import depoimento8 from '../assets/imagens/relato-1.jpeg';
import depoimento9 from '../assets/imagens/relato-2.jpeg';
import depoimento10 from '../assets/imagens/relato-3.jpeg';
import depoimento11 from '../assets/imagens/relato-4.jpeg';
import depoimento12 from '../assets/imagens/relato-5.jpeg';
import depoimento13 from '../assets/imagens/relato-6.jpeg';
import depoimento14 from '../assets/imagens/relato-7.jpeg';
import depoimento15 from '../assets/imagens/relato-8.jpeg';

import FAQSection from "../components/FAQSection";
import Carousel from "../components/Carousel";
import HomeButton from "../components/HomeButton";

function Home() {
  const images = [
    { src: depoimento1, alt: "Depoimento 1" },
    { src: depoimento2, alt: "Depoimento 2" },
    { src: depoimento3, alt: "Depoimento 3" },
    { src: depoimento4, alt: "Depoimento 4" },
    { src: depoimento5, alt: "Depoimento 5" },
    { src: depoimento6, alt: "Depoimento 6" },
    { src: depoimento7, alt: "Depoimento 7" },
    { src: depoimento8, alt: "Depoimento 8" },
    { src: depoimento9, alt: "Depoimento 9" },
    { src: depoimento10, alt: "Depoimento 10" },
    { src: depoimento11, alt: "Depoimento 11" },
    { src: depoimento12, alt: "Depoimento 12" },
    { src: depoimento13, alt: "Depoimento 13" },
    { src: depoimento14, alt: "Depoimento 14" },
    { src: depoimento15, alt: "Depoimento 15" },
  ];

  return (
    <div>
      <header>
        <section className="d-flex justify-content-center align-items-end container-topo mb-2">
          <img src={require("../assets/imagens/logo-white.png")} alt="logo-maju" />
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