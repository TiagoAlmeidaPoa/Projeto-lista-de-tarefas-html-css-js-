const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput+" ";
    tarefas.appendChild(li);
    limpaInput();
    li.appendChild(criaBotaoApagar());
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar() {
    const btn = document.createElement('button');
    btn.innerText = 'apagar';
    btn.setAttribute('class', 'apagar');
    btn.setAttribute('title', 'apagar essa tarefa');
    return btn;
}