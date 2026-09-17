
import { useState } from "react";

function FormCalculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("+");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let n1 = Number(numero1);
    let n2 = Number(numero2);
    let resultadoFinal;

    if (operacao === "+") {
      resultadoFinal = n1 + n2;
    } else if (operacao === "-") {
      resultadoFinal = n1 - n2;
    } else if (operacao === "*") {
      resultadoFinal = n1 * n2;
    } else {
      resultadoFinal = n1 / n2;
    }

    setResultado(resultadoFinal);
  }

  function limpar() {
    setNumero1("");
    setNumero2("");
    setOperacao("+");
    setResultado("");
  }

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>

      <label>Primeiro número:</label>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <label>Segundo número:</label>
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <label>Operação:</label>
      <select
        value={operacao}
        onChange={(e) => setOperacao(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <br />
      <br />

      <button onClick={calcular}>Calcular</button>
      <button onClick={limpar}>Limpar</button>

      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default FormCalculadora;
