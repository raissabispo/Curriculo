function enviar(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Capturando valores dos campos
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let telefone = document.getElementById('telefone').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  let lingua = document.getElementById('lingua').value;
  let linguagens = document.getElementById('linguagens').selectedOptions;
  let banco = document.querySelector('input[name="banco"]:checked');
  let turnos = document.querySelectorAll('input[name="turno"]:checked');
  let horario = document.getElementById('horario').value;
  let data = document.getElementById('data').value;

  // Verificação dos campos obrigatórios
  if (nome === '' || sobrenome === '' || telefone === '' || email === '' || mensagem === '' || turnos.length === 0 || data === '') {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
  }

  // Se tudo estiver correto, exibe a mensagem de sucesso
  document.getElementById('mensagemEnviar').innerHTML = 'Formulário enviado com sucesso!';

  // Limpa a mensagem após 5 segundos
  setTimeout(function() {
      document.getElementById('mensagemEnviar').innerHTML = '';
  }, 5000);

  return true; // Validação concluída com sucesso
}
