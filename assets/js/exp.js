let listaItemExperiencia = document.querySelectorAll(".experiencia_item");
let listaConteudoExperiencia = document.querySelectorAll(".experiencia_conteudo");
var atualAtivo = 0;

for (let i = 0; i < listaItemExperiencia.length; i++) {
    listaItemExperiencia[i].addEventListener('click', ativaConteudo);
}

function ativaConteudo() {
    verificaSlideAtual()
    listaItemExperiencia[atualAtivo].classList.remove('experiencia_item-ativo');
    listaConteudoExperiencia[atualAtivo].classList.remove('experiencia_conteudo-ativo');
    this.classList.add('experiencia_item-ativo');
    verificaSlideAtual();
    listaConteudoExperiencia[atualAtivo].classList.add('experiencia_conteudo-ativo');
}

function verificaSlideAtual() {
    for (let i = 0; i < listaItemExperiencia.length; i++) {
        if (listaItemExperiencia[i].classList.contains('experiencia_item-ativo')) {
            atualAtivo = i;
        }
    }
}