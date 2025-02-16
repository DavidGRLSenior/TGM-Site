function MostrarMenu(){

    let Mobilemenu = document.querySelector('.mobile-menu');

    if(Mobilemenu.classList.contains('abrir')){
        Mobilemenu.classList.remove('abrir');
        document.querySelector('.icon').src = "Itens do arquivo/Abrir_menu.svg"
    }
    else
    {
        Mobilemenu.classList.add('abrir');
        document.querySelector('.icon').src = "Itens do arquivo/Fechar_menu.svg"
    }
}

function atualizarLogin() {
    const user = localStorage.getItem("user");
    const loginButton = document.querySelector(".botao-login");

    if (!loginButton) return; // Se não houver botão, sai da função

    if (window.location.pathname.includes("login.html")) {
        loginButton.style.display = "none"; // Oculta na página de login
        return;
    }

    if (user) {
        loginButton.innerHTML = `<span>Bem-vindo, ${user}!</span> <button onclick="logout()">Sair</button>`;
    } else {
        loginButton.innerHTML = `<a href="login.html">Login</a>`;
    }
}

// Monitora mudanças no `localStorage` em todas as guias
window.addEventListener("storage", function(event) {
    if (event.key === "user") {
        atualizarLogin(); // Atualiza o login em tempo real
    }
});

function logout() {
    localStorage.removeItem("user");
    atualizarLogin();
}

// Atualiza o login ao carregar a página
window.onload = atualizarLogin;
