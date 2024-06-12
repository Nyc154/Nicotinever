function selecionaMenu(posicao) {
    const select = document.querySelector(".select");
    select.style.left = `${posicao}%`;
}

function selecionaConteudo(elemento) {
    var li = elemento.parentNode;
    const elementosLi = document.querySelectorAll(".reset-border");
    elementosLi.forEach(e => {
        e.style.border = "none";
    })

    li.style.borderBottom = "2px solid #28C892"
}