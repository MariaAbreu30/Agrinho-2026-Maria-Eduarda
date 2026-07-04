const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.classList.add("mostrar");

}

});

});

elementos.forEach((secao)=>{

secao.classList.add("animar");

observer.observe(secao);

});