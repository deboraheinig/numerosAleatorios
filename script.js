
const lista = document.querySelector("#lista");
const botao = document.querySelector("#inserir");


const inserirNumeroAleatorio = () => {
   

        const numero = Math.round(Math.random() * 50);

        const item = document.createElement('li');
        item.textContent = numero;

        lista.appendChild(item);
    
}

botao.addEventListener("click", inserirNumeroAleatorio);