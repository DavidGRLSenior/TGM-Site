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

    // Se não existir o botão de login, sai da função
    if (!loginButton) return;

    // Se a página for "login.html", oculta o botão de login
    if (window.location.pathname.includes("login.html")) {
        loginButton.style.display = "none";
        return;
    }

    // Atualiza o botão de login nas outras páginas
    if (user) {
        loginButton.innerHTML = `<span>${user}!</span> <button onclick="logout()">Sair</button>`;
    } else {
        loginButton.innerHTML = `<a href="Login - TGM Site.html">Login</a>`;
    }
}



// Detecta quando todas as guias foram fechadas e remove o login
window.addEventListener("beforeunload", function() {
    sessionStorage.removeItem("sessionActive");
    setTimeout(() => {
        if (!sessionStorage.getItem("sessionActive")) {
            localStorage.removeItem("user");
        }
    }, 1000); // Aguarda um segundo antes de remover
});

// Função de Logout
function logout() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("sessionActive");
    atualizarLogin();
}

// Atualiza a interface sempre que a página carregar
window.onload = atualizarLogin;