function calcular() {
    var valorBruto = parseFloat(document.getElementById('valorBruto').value);
    var taxa = parseFloat(document.getElementById('taxa').value);

    console.log('Valor Bruto:', valorBruto);
    console.log('Taxa da Categoria:', taxa);

    var valorTaxa = taxa / 100;
    var valorDataxa = valorBruto * valorTaxa;
    var valorFinal;

    if (valorBruto <= 79) {
        valorFinal = valorBruto + valorDataxa + 6 + (valorBruto * 0.01);
    } else {
        valorFinal = valorBruto + valorDataxa + 30 + (valorBruto * 0.01);
    }

    console.log(valorDataxa.toFixed(2));

    let valorBrutoTexto = document.getElementById('valorBrutoTexto');
    valorBrutoTexto.innerHTML = "Valor Bruto: " + valorBruto.toFixed(2);
    let taxaTexto = document.getElementById('taxaTexto');
    taxaTexto.innerHTML = "Taxa da categoria: " + taxa.toFixed(2) + "%";
    let taxaValorTexto = document.getElementById('valorTaxaTexto');
    taxaValorTexto.innerHTML = "Valor da Taxa: " + valorDataxa.toFixed(2);
    let final = document.getElementById('final');
    final.innerHTML = "Valor Final: " + valorFinal.toFixed(2);
}
