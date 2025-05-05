//sistema de login basico
//sistema de cadastro basico
function cadastrarUsuario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Criptografar a senha (ou hash)
  const senhaCriptografada = criptografarSenha(senha);

  const usuario = { nome, email, senha: senhaCriptografada };

  // Pegar a lista de usuários ou criar uma nova
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Adicionar o novo usuário à lista
  usuarios.push(usuario);

  // Armazenar a lista atualizada no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Limpar o formulário
  document.getElementById('cadastroForm').reset();
}
function realizarLogin() {
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  // Recupere a lista de usuários
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Encontre o usuário com o email correspondente
  const usuario = usuarios.find(u => u.email === email);

  if (usuario && criptografarSenha(senha) === usuario.senha) {
    // Login bem-sucedido
    // ...
  } else {
    // Login inválido
    // ...
  }
}