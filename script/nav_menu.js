function prpr(){
    const button = document.getElementById('button_nav_menu');
    const сloseNavMenu = document.getElementById('nav_menu_phone')

    if(button.style.backgroundColor === 'rgb(151, 151, 151)'){
        button.style.backgroundColor = 'black';
        button.style.borderRadius = '0';
        сloseNavMenu.style.display = 'none';
        document.getElementById('menu_icon').style.display = 'grid';
        document.getElementById('close_nav_menu').style.display = 'none';
    } 
    else{
        button.style.backgroundColor = 'rgb(151, 151, 151)';
        button.style.borderRadius = '50%';
        сloseNavMenu.style.display = 'block';
        document.getElementById('menu_icon').style.display = 'none';
        document.getElementById('close_nav_menu').style.display = 'flex';
    }
}