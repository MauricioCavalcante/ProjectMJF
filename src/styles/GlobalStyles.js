import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  /* Estilo da página inicial */
  .borda {
    border: 2px solid red;
  }

  .container-topo {
    height: 200px;
    background-size: cover;
    background-position: 50% 40%;
    background-image: url('./imagens/imagem-3.jpeg');
    filter: brightness(90%);
    & img {
      opacity: 0;
      animation: animar-logo 3s forwards, animar-opacidade 3s forwards;
      background-size: cover;
      max-width: 800px;
      width: 100%;
    }
  }

  .container-box {
    max-width: 800px;
    opacity: 0;
    animation: animar-texto 2s forwards, animar-opacidade 2s forwards;
    & h1 {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  }

  .imagem-logo {
    max-height: 150px;
  }

  details {
    border: 1px solid #ccc;
    & p {
      border-left: 3px solid gray;
      padding: 5px;
      margin-left: 3.5px;
    }
  }

  .button-home {
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 350px;
    background: #9E6849;
    color: white;
    border-radius: 30px;
    padding: 8px;
    transition: 0.3s ease-in-out;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .button-home:hover {
    background: #794f37;
    color: white;
    scale: 1.05;
  }

  .carousel {
    max-width: 500px;
    & .carousel-prev {
      width: 40px;
      left: -20px;
    }
    & .carousel-next {
      width: 40px;
      right: -20px;
    }
    & .carousel-ind {
      bottom: -40px;
    }
    & .grid-item {
      border: 2px solid #706661;
      box-shadow: 50px 50px inset gray;
    }
  }

  /* Estilo da página formulário */
  .container-topo-form {
    height: 150px;
    background-size: cover;
    background-position: center;
    background-image: url('./imagens/imagem-1.jpeg');
  }

  .imagem-topo-dark-form {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .imagem-topo-form {
    width: 100%;
  }

  .imagem-topo-logo-form {
    opacity: 0;
    animation: animar-logo 3s forwards, animar-opacidade 3s forwards;
  }

  .container-form {
    max-width: 450px;
    & .code-ddi {
      background: transparent;
      border: 1px solid grey;
    }
    & .text-area,
    & input[type="text"],
    & input[type="email"] {
      background-color: transparent;
      border: 2px solid grey;
    }
    & .button-form {
      font-size: small;
      display: flex;
      border: none;
      justify-content: center;
      text-decoration: none;
      width: 250px;
      background: #9E6849;
      color: white;
      border-radius: 30px;
      padding: 8px;
      margin-bottom: 60px;
      transition: 0.3s ease-in-out;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
    & .button-form:hover {
      background: #794f37;
      color: white;
      scale: 1.05;
    }
  }

  .imagem-topo-form {
    background-size: cover;
    max-width: 800px;
  }

  /* Configuração radio */
  .container-radio label {
    display: flex;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  .container-radio label input {
    position: absolute;
    left: -9999px;
  }

  .container-radio label input:checked + span:before {
    animation: animar-logo 0.3s forwards, animar-opacidade 0.3s forwards;
    background-color: #9E6849;
    border: 1px solid #9E6849;
  }

  .container-radio label span {
    display: flex;
    align-items: center;
    border-radius: 99em;
    transition: 0.25s ease;
  }

  .container-radio label span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #ffffff;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid grey;
    border-radius: 50%;
    margin-right: 0.375em;
  }

  /* Configuração select */
  .select-input {
    border: 2px solid grey;
    color: rgb(34, 34, 34);
    background-color: white;
    border-radius: 15px;
    padding-left: 5px;
  }

  option {
    color: rgb(34, 34, 34);
    background-color: white;
  }

  /* Animações */
  @keyframes animar-texto {
    from {
      opacity: 0;
      transform: translateX(-15%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes animar-logo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .total-form {
    max-width: 400px;
    border: 2px solid gray;
    border-radius: 10px;
    font-size: medium;
  }

  video {
    max-width: 400px;
    animation: animar-texto 2s forwards, animar-opacidade 2s forwards;
    border: 2px solid gray;
    border-radius: 10px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .tocofobia {
    max-width: 600px;
    font-size: small;
    justify-content: center;
    & h1 {
      font-size: medium;
    }
  }

  #loader {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #9E6849 white;
    animation: loader 0.8s linear reverse infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  #principal a {
    text-decoration: none;
  }
    .link-instagram {
  color: #e1306c; /* Cor típica do Instagram */
  text-decoration: none; /* Remove sublinhado */
  font-weight: bold;
}

.link-instagram:hover {
  text-decoration: underline; /* Adiciona sublinhado no hover */
  opacity: 0.8; /* Leve opacidade ao passar o mouse */
}

`;

export default GlobalStyles;