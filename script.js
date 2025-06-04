const spinBtn = document.getElementById('spinBtn');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const result = document.getElementById('result');
const banca = document.getElementById('banca');

const symbols = ["🍒", "🍋", "7️⃣", "🍉", "🍓"];

let saldo = 10000;

function atualizarInfoJogador() {
  banca.textContent = `Banca Atual: $${saldo}`;
}

function spin() {
  if (saldo < 500) {
    result.textContent = "Você quebrou a banca!";
    result.style.color = "red";
    return;
  }

  saldo -= 500;
  atualizarInfoJogador();
  result.textContent = "";
  spinBtn.disabled = true;

  // Resultados já definidos antes da animação
  const res1 = symbols[Math.floor(Math.random() * symbols.length)];
  const res2 = symbols[Math.floor(Math.random() * symbols.length)];
  const res3 = symbols[Math.floor(Math.random() * symbols.length)];

  let completos = 0;

  function pararSlot(elemento, resultadoFinal) {
    completos++;
    elemento.textContent = resultadoFinal;

    if (completos === 3) {
      verificarResultado(res1, res2, res3);
      atualizarInfoJogador();
      spinBtn.disabled = false;
    }
  }

  // Função que inicia o giro de cada slot
  function iniciarAnimacao(elemento, vezes, delay, resultadoFinal, callback) {
    let count = 0;
    const intervalo = setInterval(() => {
      const simboloAleatorio = symbols[Math.floor(Math.random() * symbols.length)];
      elemento.textContent = simboloAleatorio;
      count++;
      if (count >= vezes) {
        clearInterval(intervalo);
        callback(elemento, resultadoFinal);
      }
    }, delay);
  }

  // Inicia todos os slots ao mesmo tempo
  iniciarAnimacao(slot1, 5, 100, res1, pararSlot);
  iniciarAnimacao(slot2, 10, 100, res2, pararSlot);
  iniciarAnimacao(slot3, 15, 100, res3, pararSlot);
}

function verificarResultado(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) {
    saldo += 10000;
    result.textContent = "Você ganhou!";
    result.style.color = "green";
  } else {
    result.textContent = "Tente novamente!";
    result.style.color = "red";
  }
}

spinBtn.addEventListener('click', spin);
atualizarInfoJogador();
