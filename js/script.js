const formularioActionURL = 'https://script.google.com/macros/s/AKfycbx483Hqp-tX---Q_JAjeBic0czfru3EkrJQf7UM48DY4Z0lo8SSef5Wybe5StUBjxzo/exec';
const atualizarLinhas = 'https://script.google.com/macros/s/AKfycbytLJ-0huo_LxCD6rfdpE3JAh_sRPVIQUb1pAh0ACgMHO_bD5J6sMB9mzH4Pfv7WhzS/exec';

var enviado = false; // Variável para rastrear se o formulário já foi enviado

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

    // Chama as funções separadas
    enviarFormulario(); // Função para enviar o formulário
    atualizarNumeroLinhas(); // Função para atualizar o número de linhas
});

// Função para enviar o formulário
function enviarFormulario() {
    var formData = new FormData(document.getElementById('meuFormulario'));

    fetch(formularioActionURL, {
        method: 'POST',
        body: formData
    }).then(response => {
        var mensagem = document.getElementById('mensagem');
        if (response.ok) {
            // Se o envio foi bem-sucedido
            mensagem.textContent = 'Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!';
        } else {
            // Se houve um erro no envio
            mensagem.textContent = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.';
            response.text().then(errorMessage => {
                console.error('Erro ao enviar o formulário:', errorMessage);
            }).catch(error => {
                console.error('Erro ao enviar o formulário:', error);
            });
        }
    }).catch(error => {
        var mensagem = document.getElementById('mensagem');
        mensagem.textContent = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.';
        console.error('Erro ao enviar o formulário:', error);
    }).finally(() => {
        enviado = false;    
        document.getElementById('meuFormulario').reset(); // Limpa o formulário
    });
}

// Função para atualizar o número total de linhas na planilha
function atualizarNumeroLinhas() {
    fetch(atualizarLinhas)
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
            contagem.textContent = `Total de formulários enviados até o momento: ${data.totalLines}`;

            // Atualiza a contagem de linhas dos últimos 30 dias
            contagemMensal.textContent = `Total de formulários enviados nos últimos 30 dias: ${data.linesLast30Days}`;
        })
        .catch(error => {
            console.error('Erro ao obter número de linhas:', error);
        });
}
