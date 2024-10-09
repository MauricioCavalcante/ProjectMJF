const formularioActionURL = 'https://script.google.com/macros/s/AKfycbzXFjmjL6OeBShPuCqNMMvgjgj07QCDAaCqAwoIom-J3B_kt3vC3oTWhHOi7FsyWLDM/exec';
const atualizarLinhas = 'https://script.google.com/macros/s/AKfycbx-iqaKTlVJ6kjL8-7kZdgVD2dAzfsioF3WCqdsYN6ucPdVwZhWmJ6iatle2wCxNRlb/exec';

var enviado = false;

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (enviado) {
        return; 
    }

    var principal = document.getElementById('principal');
    var final = document.getElementById('final');
    principal.style.display = 'none';
    final.style.display = 'block';

    var mensagem = document.getElementById('mensagem');
    var contagem = document.getElementById('numeroLinhas');
    mensagem.textContent = 'Enviando formulário...';
    contagem.style.display = 'block';

    enviarFormulario(); 
    atualizarNumeroLinhas(); 
});


function enviarFormulario() {
    var formData = new FormData(document.getElementById('meuFormulario'));

    fetch(formularioActionURL, {
        method: 'POST',
        body: formData
    }).then(response => {
        var mensagem = document.getElementById('mensagem');
        if (response.ok) {

            mensagem.textContent = 'Obrigada! Seu formulário foi enviado com sucesso, em breve a Mari vai te chamar!';

        } else {

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
        document.getElementById('meuFormulario').reset();
    });
}


function atualizarNumeroLinhas() {
    fetch(atualizarLinhas)
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Erro ao obter número de linhas');
            }
        })
        .then(data => {
            var contagem = document.getElementById('numeroLinhas');
            var contagemMensal = document.getElementById('formularioMensal');

            contagem.textContent = `Total de formulários enviados até o momento: ${data.totalRowCount}`;

            if (contagemMensal) {
                contagemMensal.textContent = `Total de formulários enviados nos últimos 30 dias: ${data.recentRowCount}`;
            }
        })
        .catch(error => {
            console.error('Erro ao obter número de linhas:', error);
        });
}

