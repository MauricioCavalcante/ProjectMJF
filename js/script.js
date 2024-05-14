// script formulário urgência ------------------------------------------------------------------

var radioSim = document.getElementById('opcaoSim');
var radioNao = document.getElementById('opcaoNao');
var caixaTexto = document.getElementById('caixaTexto');
var labelTexto = document.getElementById('textoUrgencia');

radioSim.addEventListener('change', function() {
    if (this.checked) {
    caixaTexto.style.display = 'block'; // Mostra a caixa de texto se "Sim" estiver marcado
    labelTexto.style.display = 'block';
    }
});

radioNao.addEventListener('change', function() {
    if (this.checked) {
    caixaTexto.style.display = 'none'; // Oculta a caixa de texto se "Não" estiver marcado
    labelTexto.style.display = 'none';
    }
});

var enviado = false; // Variável para rastrear se o formulário já foi enviado

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verifica se o formulário já foi enviado
    if (enviado) {
        return; // Sai da função se o formulário já foi enviado
    }

    enviado = true; // Marca o formulário como enviado

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
    fetch('https://script.google.com/macros/s/AKfycbxybaLNJU7yDbsHNTVLSH90LOs3yQWg_7rITjhD_UIOWtZVS_bLDXHfaFsl_SgInQI/exec', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            mensagem.textContent = 'Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!';
            // Após o envio bem-sucedido, atualiza o número de linhas
            atualizarNumeroLinhas();
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
    fetch('https://script.google.com/macros/s/AKfycbxybaLNJU7yDbsHNTVLSH90LOs3yQWg_7rITjhD_UIOWtZVS_bLDXHfaFsl_SgInQI/exec?rowCount=true')
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Erro ao obter número de linhas');
            }
        })
        .then(count => {
            var contagem = document.getElementById('numeroLinhas');
            contagem.textContent = `Total de formulários enviados até o momento: ${count}`;
        })
        .catch(error => {
            console.error('Erro ao obter número de linhas:', error);
        });
}
