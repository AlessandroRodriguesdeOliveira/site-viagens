/*create a constant within the menu_show(button menu)*/
const menu = document.getElementById('menu_show');

menu.addEventListener('click', Show);

/*function of click action in the button*/
function Show(){
    menu.classList.toggle('show');

}