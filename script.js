let menuVisible = false;
//funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que seleccio una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// Funcion que aplica las animaciones en las barritas

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("pythondjango");
        habilidades[3].classList.add("gitgithub");
        habilidades[4].classList.add("c");
        habilidades[5].classList.add("blender");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("teamwork");
        habilidades[8].classList.add("autodidacta");
        habilidades[9].classList.add("motivacion");
        habilidades[10].classList.add("dedicacion");
    }
}

//Aca se detecta el scrolling para aplicar la animacion en la barrita

window.onscroll = function(){
    efectoHabilidades();
}
