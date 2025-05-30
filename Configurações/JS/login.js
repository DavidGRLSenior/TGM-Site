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

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulando um banco de dados de usuários
    const users = {
        "Admin-Base": { password: "ADM_02162025", role: "admin" },
        "Dev-Senior": { password: "Dev_02162025", role: "dev" }
    };

    if (users[username] && users[username].password === password) {
        localStorage.setItem("user", username);
        sessionStorage.setItem("sessionActive", "true"); // Marca sessão ativa
        window.location.href = "login.html"; // Redireciona para a página do painel
    }  
});


function atualizarLogin() {
    const user = localStorage.getItem("user");
    const loginButton = document.querySelector(".botao-login");

    if (!loginButton) return; // Se não houver botão, sai da função

    if (window.location.pathname.includes("login.html")) {
        loginButton.style.display = "none"; // Oculta na página de login
        return;
    }

    if (user) {
        loginButton.innerHTML = `<span> ${user} </span> <button onclick="logout()">Sair</button>`;
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
