
function mostrarDisplay(valor) {
    let elemento = document.getElementById('display')
    elemento.innerText= elemento.innerText+valor;
}

function clearDisplay() {
    const elemento = document.getElementById('display');
    if (!elemento) return;
    elemento.innerText = '';
}

function backspace() {
    const elemento = document.getElementById('display');
    if (!elemento) return;
    elemento.innerText = elemento.innerText.slice(0, -1);
}

function sumar() {
    const elemento = document.getElementById('display');
    if (!elemento) return;
    const expr = elemento.innerText.trim();
    if (!expr) return;
    const cleaned = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
    elemento.innerText = String(eval(cleaned))
}


