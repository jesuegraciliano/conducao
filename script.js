// Função para calcular condução: Q = k · A · ΔT / L
document.getElementById('btn-calcular').addEventListener('click', () => {
  const k = parseFloat(document.getElementById('material').value);
  const L = parseFloat(document.getElementById('espessura').value.replace(',', '.'));
  const deltaT = parseFloat(document.getElementById('deltaT').value.replace(',', '.'));
  const A = parseFloat(document.getElementById('area').value.replace(',', '.'));

  // Validação básica
  if (isNaN(k) || isNaN(L) || isNaN(deltaT) || isNaN(A) || L <= 0) {
    document.getElementById('resultado').textContent = 'Preencha todos os campos corretamente.';
    return;
  }

  // Cálculo de Q em Watts
  const Q = k * A * deltaT / L;
  const Qformat = Q.toFixed(1).replace('.', ',');

  document.getElementById('resultado').textContent = `Q = ${Qformat} W`;
});
