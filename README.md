<p align="center"><a href="https://majuferreira.com" target="_blank"><img src="https://github.com/MauricioCavalcante/ProjectMJF/blob/main/imagens/readme-image.png" width="400" alt="Maju Logo"></a></p>

# Maju Ferreira | Consultas

Este projeto consiste em um site para Maju Ferreira, focado na gestão de consultas médicas através de um formulário de lista de espera. O site possui duas páginas principais:

- **Página Inicial:** Fornece informações sobre Maju Ferreira e inclui um link para a página do formulário de lista de espera.
- **Página do Formulário:** Permite aos usuários se inscreverem na lista de espera para consultas, coletando dados pessoais e preferências de consulta.

## Funcionalidade do Projeto

### Página Inicial

- Objetivo: Apresentar Maju Ferreira e fornecer um link para a página de formulário.
- Elementos Interativos: Links para a lista de espera e carrossel de depoimentos.

### Página com o Formulário

- Objetivo: Coletar informações dos usuários para a lista de espera.
- Funcionalidade do Formulário:
  - Submissão: O formulário é enviado para um endpoint específico do Google Apps Script.
  - Exibição de Mensagens: Após o envio, exibe uma mensagem de sucesso, um vídeo e o total de formulários enviados.
  - Carregamento Dinâmico: As opções de país são carregadas dinamicamente.

### Script JavaScript para o Formulário

- Envio do Formulário: O formulário é enviado via Fetch API para um endpoint específico.
- Gerenciamento de Estado: Impede múltiplos envios simultâneos e atualiza a interface do usuário.
- Atualização da Contagem: Atualiza a contagem de formulários enviados.

### Google Apps Script

- Receber e Processar Dados: Adiciona os dados do formulário à planilha do Google Sheets.
- Enviar Notificações por E-mail: Envia um e-mail com as informações do formulário e a contagem total.
- Atualizar Contagem de Formulários: Retorna o número total de formulários preenchidos.

## Tecnologias Utilizadas

- HTML5: Estrutura básica do documento.
- CSS: Estilos personalizados e Bootstrap.
- JavaScript: Funcionalidade de formulário e manipulação de DOM.
- Google Apps Script: Processamento de dados e envio de e-mails.
- Bootstrap: Framework CSS para design responsivo.