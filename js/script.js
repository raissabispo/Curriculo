function enviar(event) {
    
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let lingua = document.getElementById('lingua').value;
    let prototipo = document.getElementById('prototipo').value;
    let linguagens = document.getElementById('linguagens').selectedOptions;
    let banco = document.querySelector('input[name="banco"]:checked');
    let turno = document.getElementById('turno').value;
    let horario = document.getElementById('horario').value;
    let data = document.getElementById('data').value;

      if (nome === '' || sobrenome === '' || telefone === '' || email === '' || mensagem === '' || turno === ''|| data === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
      }

      document.getElementById('mensagemEnviar').innerHTML = 'Formulário enviado com sucesso!';
      setTimeout(function() {
        document.getElementById('mensagemEnviar').innerHTML = '';
      }, 5000);
    }
