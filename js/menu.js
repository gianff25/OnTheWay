const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.Categorias');


hamburguesa.addEventListener('click', () => {
    menu.classList.toggle("spread")
    hamburguesa.classList.toggle("hamburguesa1")
})
