// Função para iniciar o formulário
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const music = document.getElementById("background-music");

    // Adiciona evento de envio ao formulário
    loginForm.addEventListener("submit", handleLogin);

    // Controle da música de fundo
    music.volume = 0.5; // Define o volume inicial
});

// Função para tratar o envio do formulário
function handleLogin(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Captura os valores inseridos
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação básica
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exemplo de mensagem de sucesso
    alert(`Bem-vindo, ${email}! Login realizado com sucesso.`);
    // Aqui você pode enviar os dados para o servidor ou realizar outras ações
}
