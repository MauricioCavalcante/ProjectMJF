
const formularioActionURL = 'https://script.google.com/macros/s/AKfycbxnD014g_iqp1TfaaWRE_XobIOyzfaf-4q9ImL9WTtqZ7j85t1KGTrNLYGDXx_-kN1X/exec';

var enviado = false; // Variável para rastrear se o formulário já foi enviado
let numeroFormulariosEnviados = 8826;

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
    fetch('https://script.google.com/macros/s/AKfycbxnD014g_iqp1TfaaWRE_XobIOyzfaf-4q9ImL9WTtqZ7j85t1KGTrNLYGDXx_-kN1X/exec', {
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
            // Atualiza a contagem exibida na página com o número atualizado de formulários enviados
            numeroFormulariosEnviados = parseInt(count); // Atualiza o número de formulários enviados com o valor obtido da planilha
            contagem.textContent = `Total de formulários enviados até o momento: ${numeroFormulariosEnviados}`;
        })
        .catch(error => {
            console.error('Erro ao obter número de linhas:', error);
        });
}
