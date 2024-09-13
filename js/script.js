
const formularioActionURL = 'https://script.google.com/macros/s/AKfycbwVwxSvlWho4uxk57T2cOP2yDx7KBbUjcpy10n7tT2QE4x72no1tqa6LxPYzDIkyARs/exec';

var enviado = false; // Variável para rastrear se o formulário já foi enviado
let numeroFormulariosEnviados = 10850;

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verifica se o formulário já foi enviado
    if (enviado) {
        return; // Sai da função se o formulário já foi enviado
    }

    // Retira o formulário
    var principal = document.getElementById('principal');
    var final = document.getElementById('final');
    principal.style.display = 'none';
    final.style.display = 'block';

    // Mostra uma mensagem de envio
    var mensagem = document.getElementById('mensagem');
    var contagem = document.getElementById('numeroLinhas');
    mensagem.textContent = 'Enviando formulário...';
    contagem.style.display = 'block';

    // Envia os dados do formulário para o Google Apps Script usando Fetch API
    var formData = new FormData(this);
    fetch(formularioActionURL, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            // Incrementa o número de formulários enviados
            numeroFormulariosEnviados++;

            // Atualiza o número de linhas após o envio bem-sucedido
            atualizarNumeroLinhas();

            // Mostra mensagem de sucesso
            mensagem.textContent = 'Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!';
        } else {
            mensagem.textContent = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.';
            // Adiciona detalhes específicos do erro, se disponível
            response.text().then(errorMessage => {
                console.error('Erro ao enviar o formulário:', errorMessage);
            }).catch(error => {
                console.error('Erro ao enviar o formulário:', error);
            });
        }
    }).catch(error => {
        mensagem.textContent = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.';
        console.error('Erro ao enviar o formulário:', error);
    }).finally(() => {
        enviado = false; // Reseta a variável enviado para permitir envios futuros        
        this.reset(); // Limpa o formulário
    });
});

// Função para atualizar o número de linhas na planilha
function atualizarNumeroLinhas() {
    fetch(formularioActionURL)
        .then(response => {
            if (response.ok) {
                return response.json(); // Processa a resposta JSON
            } else {
                throw new Error('Erro ao obter número de linhas');
            }
        })
        .then(data => {
            var contagem = document.getElementById('numeroLinhas');
            var contagemMensal = document.getElementById('formularioMensal');

            // Atualiza a contagem exibida na página com o número total de linhas
            var numeroFormulariosEnviados = data.totalLines;
            contagem.textContent = `Total de formulários enviados até o momento: ${numeroFormulariosEnviados}`;

            // Atualiza a contagem de linhas dos últimos 30 dias
            var formularioMensal = data.linesLast30Days;
            contagemMensal.textContent = `Total de formulários enviados nos últimos 30 dias: ${formularioMensal}`;
        })
        .catch(error => {
            console.error('Erro ao obter número de linhas:', error);
        });
}


