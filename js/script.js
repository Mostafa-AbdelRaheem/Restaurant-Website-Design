let my_menu = document.querySelector('#bar');
let my_nav =document.querySelector('ul');

my_menu.onclick = () =>{

    my_menu.classList.toggle('fa-times');
    my_nav.classList.toggle('active');
}

