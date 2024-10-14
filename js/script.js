function enviar(event) {
  event.preventDefault(); 

  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let telefone = document.getElementById('telefone').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  let turnos = document.querySelectorAll('input[name="turno"]:checked');
  let data = document.getElementById('data').value;

  if (nome === '' || sobrenome === '' || telefone === '' || email === '' || mensagem === '' || turnos.length === 0 || data === '') {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
  }

  document.getElementById('mensagemEnviar').innerHTML = 'Formulário enviado com sucesso!';

  
  setTimeout(function() {
      document.getElementById('mensagemEnviar').innerHTML = '';
  }, 5000);

  return true; 
}
