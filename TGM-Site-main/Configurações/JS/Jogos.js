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