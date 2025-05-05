const spinBtn = document.getElementById('spinBtn');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const result = document.getElementById('result');

const symbols = ["🍒", "🍋", "🍊", "🍉", "🍓", "🍍"];

function spin() {
  const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
  const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];
  const randomSymbol3 = symbols[Math.floor(Math.random() * symbols.length)];

  slot1.textContent = randomSymbol1;
  slot2.textContent = randomSymbol2;
  slot3.textContent = randomSymbol3;

  checkResult(randomSymbol1, randomSymbol2, randomSymbol3);
}

function checkResult(symbol1, symbol2, symbol3) {
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    result.textContent = "Você ganhou!";
    result.style.color = "green";
  } else {
    result.textContent = "Tente novamente!";
    result.style.color = "red";
  }
}

spinBtn.addEventListener('click', spin);
