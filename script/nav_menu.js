function prpr(){
    const button = document.getElementById('button_nav_menu');
    const сloseNavMenu = document.getElementById('nav_menu_phone')

    if(button.style.backgroundColor === 'rgb(151, 151, 151)'){
        button.style.backgroundImage = 'url(../img/menu-icon.png)';
        button.style.backgroundColor = 'black';
        button.style.borderRadius = '0';
        сloseNavMenu.style.display = 'none';
    } 
    else{
        button.style.backgroundImage = 'url(../img/сlose_nav_menu.png)';
        button.style.backgroundColor = 'rgb(151, 151, 151)';
        button.style.borderRadius = '50%';
        сloseNavMenu.style.display = 'block';
    }
}