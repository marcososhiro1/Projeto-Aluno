const perfil = document.querySelector('perfil');
perfil.addEventListener('click',aparecerbtnsair)
function aparecerbtnsair(){
    perfil.style.removeproperty('hidden');
    perfil.style.addpropertty('block');
}
