function criptografarCesar(texto, chave) {
    let textoCriptografado = "";
  
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
  
      if (char.match(/[a-z]/)) {
        const code = char.charCodeAt(0);
        const newCode = ((code - 97 + chave) % 26) + 97;
        textoCriptografado += String.fromCharCode(newCode);
      } else if (char.match(/[A-Z]/)) {
        const code = char.charCodeAt(0);
        const newCode = ((code - 65 + chave) % 26) + 65;
        textoCriptografado += String.fromCharCode(newCode);
      } else {
        textoCriptografado += char;
      }
    }
  
    return textoCriptografado;
  }
  
  document.getElementById("crpt").addEventListener("click", () => {
    const textoEntrada = document.getElementById("textoEntrada").value;
    const chaveEntrada = parseInt(document.getElementById("chaveEntradaCript").value);
  
    const textoCriptografado = criptografarCesar(textoEntrada, chaveEntrada);
    document.getElementById("textoResultado").value = textoCriptografado;
  });
  
  document.getElementById("dcrpt").addEventListener("click", () => {
    const textoEntrada = document.getElementById("textoEntradaDecript").value;
    let chaveEntrada = parseInt(document.getElementById("chaveEntradaDecript").value);
  
    if (chaveEntrada < 0) {
      chaveEntrada = 0;
      document.getElementById("chaveEntradaDecript").value = 0;
    }
  
    const textoDescriptografado = criptografarCesar(textoEntrada, 26 - (chaveEntrada % 26));
    document.getElementById("textoDescriptografado").value = textoDescriptografado;
  });