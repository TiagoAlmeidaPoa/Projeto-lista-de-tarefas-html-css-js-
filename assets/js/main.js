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
    salvarTarefas();
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

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        apagarTarefa(el);
    }
});

function apagarTarefa(el) {
    el.parentElement.remove();
    salvarTarefas();
}

function salvarTarefas() {
    const tarefasLi = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of tarefasLi) {
        tarefa = tarefa.innerText.replace('apagar', '');
        listaDeTarefas.push(tarefa);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}