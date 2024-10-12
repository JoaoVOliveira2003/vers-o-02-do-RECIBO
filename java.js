function escreverExtenso() {
  var numeroInput = document.getElementById('numero');
  var extensaoInput = document.getElementById('extensao');
  var numero = parseInt(numeroInput.value);
  var extensao = converterParaExtenso(numero);
  extensaoInput.value = extensao;
  document.getElementById('recibo_extensao').innerHTML = extensao;
}

function atualizarInputExtensao() {
  var extensaoInput = document.getElementById('extensao');
  var extensao = document.getElementById('recibo_extensao').textContent;
  extensaoInput.value = extensao;
}

function atualizarExtensao() {
  var extensaoInput = document.getElementById('extensao');
  var extensao = extensaoInput.value;
  extensaoInput.value = extensao;
  document.getElementById('recibo_extensao').innerHTML = extensao;
}


function mostrarCampoPersonalizado(select) {
var campoPersonalizado = document.getElementById("campoPersonalizado");
if (select.value === "outro") {
campoPersonalizado.style.display = "block";
} else {
campoPersonalizado.style.display = "none";
}
}

function mostrarCampoPersonalizado(select) {
var campoPersonalizado = document.getElementById("campoPersonalizado");
if (select.value === "outro") {
campoPersonalizado.style.display = "block";
} else {
campoPersonalizado.style.display = "none";
}
}

// function verRecibo() {

//   document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
//   document.getElementById('recibo_extensao').innerHTML = document.getElementById('recibo_extensao').textContent;  
//   var referenteSelect = document.getElementById('referente');
//   var referenteValue = referenteSelect.options[referenteSelect.selectedIndex].value;
//   if (referenteValue === 'outro') {
//   document.getElementById('recibo_referente').innerHTML = document.getElementById('referentePersonalizado').value;
//   } else {
//   document.getElementById('recibo_referente').innerHTML = referenteValue;
//   }
  
//   document.getElementById('recibo_endereco').innerHTML = document.getElementById('endereco').value;
//   document.getElementById('recibo_data').innerHTML = document.getElementById('data').value;
//   document.getElementById('recibo_cp').innerHTML = document.getElementById('cp').value;
//   document.getElementById('recibo_codigo').innerHTML = document.getElementById('codigo').value;
  
//   var parcelaSelect = document.getElementById('parcela');
//   var parcelaValue = parcelaSelect.options[parcelaSelect.selectedIndex].value;
//   if (parcelaValue === 'outro') {
//   document.getElementById('recibo_parcela').innerHTML = document.getElementById('parcelaPersonalizado').value;
//   } else {
//   document.getElementById('recibo_parcela').innerHTML = parcelaValue;
//   }
  
//   document.getElementById('recibo_numero').innerHTML = document.getElementById('numero').value; 
// }

function verRecibo() {
  const nomeInput = document.getElementById('nome');
  const enderecoInput = document.getElementById('endereco');
  const dataInput = document.getElementById('data');
  const cpInput = document.getElementById('cp');
  const codigoInput = document.getElementById('codigo');
  const numeroInput = document.getElementById('numero');
  const referenteSelect = document.getElementById('referente');
  const referentePersonalizadoInput = document.getElementById('referentePersonalizado');
  const parcelaSelect = document.getElementById('parcela');
  const parcelaPersonalizadoInput = document.getElementById('parcelaPersonalizado');

  document.getElementById('recibo_nome').innerHTML = nomeInput.value;
  document.getElementById('recibo_extensao').innerHTML = document.getElementById('recibo_extensao').textContent;

  const referenteValue = referenteSelect.options[referenteSelect.selectedIndex].value;
  if (referenteValue === 'outro') {
    document.getElementById('recibo_referente').innerHTML = referentePersonalizadoInput.value;
  } else {
    document.getElementById('recibo_referente').innerHTML = referenteValue;
  }
  document.getElementById('recibo_endereco').innerHTML = enderecoInput.value;
  document.getElementById('recibo_data').innerHTML = dataInput.value;
  document.getElementById('recibo_cp').innerHTML = cpInput.value;
  document.getElementById('recibo_codigo').innerHTML = codigoInput.value;

  const parcelaValue = parcelaSelect.options[parcelaSelect.selectedIndex].value;
  if (parcelaValue === 'outro') {
    document.getElementById('recibo_parcela').innerHTML = parcelaPersonalizadoInput.value;
  } else {
    document.getElementById('recibo_parcela').innerHTML = parcelaValue;
  }

  document.getElementById('recibo_numero').innerHTML = numeroInput.value; 
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('numero').value = '';
  document.getElementById('extensao').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('data').value = '';
  document.getElementById('cp').value = '';

  document.getElementById('referente').selectedIndex = 0;
  document.getElementById('codigo').selectedIndex = 0;
  document.getElementById('parcela').selectedIndex = 0;
  document.getElementById('tamanho').selectedIndex = 0;

  const campoPersonalizado = document.getElementById('campoPersonalizado');
  if (campoPersonalizado) {
     campoPersonalizado.style.display = 'none';
     document.getElementById('referentePersonalizado').value = '';
  }

  tamanho(1)
}


function gerarRecibo() {
  $('.dados').hide(); 

  verRecibo(); 

  $('#print').printThis({
    importCSS: true,
    importStyle: true,
    pageTitle: "Recibo - Assoalhos Modelo",
    printDelay: 500,
    formValues: true,
    beforePrint: function() {
      const printStyles = `
        <style>
          @page {
            size: A5 landscape; /* Define o tamanho da página e orientação paisagem */
            margin: 0cm; /* Define a margem como 1cm */
          }
        </style>
      `;
      $('head').append(printStyles);
    },

    afterPrint: function() {
      $('.dados').show();
    }
  });
}

function tamanho(selectElement) {
  const tamanhoString = selectElement.value;

  const elementoCP = document.getElementById('codigo-recibo1');
  const elementoCodigo = document.getElementById('cp-recibo1');

  if (!elementoCP || !elementoCodigo) {
     console.error('Elemento com ID "codigo-recibo1" ou "cp-recibo1" não encontrado.');
     return; 
  }

  // Remove classes existentes
  elementoCP.classList.remove('cp-recibo1', 'cp-recibo2', 'cp-recibo3', 'cp-recibo4');
  elementoCodigo.classList.remove('codigo-recibo1', 'codigo-recibo2', 'codigo-recibo3', 'codigo-recibo4');

  // Adiciona classes para o CP com base no tamanho selecionado
  switch (tamanhoString) {
     case '1':
        elementoCP.classList.add('cp-recibo1');
        elementoCodigo.classList.add('codigo-recibo1');
        break;
     case '2':
        elementoCP.classList.add('cp-recibo2');
        elementoCodigo.classList.add('codigo-recibo2');
        break;
     case '3':
        elementoCP.classList.add('cp-recibo3');
        elementoCodigo.classList.add('codigo-recibo3');
        break;
     case '4':
        elementoCP.classList.add('cp-recibo4');
        elementoCodigo.classList.add('codigo-recibo4');
        break;
     default:
        console.log('Tamanho não especificado');
        break;
  }
}

function converterParaExtenso(numero) {
  var unidades = ['', 'hum', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
  var especiais = ['', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  var dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  var centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  var milhares = ['', 'mil', 'dois mil', 'três mil', 'quatro mil', 'cinco mil', 'seis mil', 'sete mil', 'oito mil', 'nove mil'];

  if (numero === 0) {
    return 'zero';
  } else if (numero < 10) {
    return unidades[numero];
  } else if (numero < 20) {
    return especiais[numero - 10];
  } else if (numero < 100) {
    var dezena = Math.floor(numero / 10);
    var unidade = numero % 10;
    if (unidade === 0) {
      return dezenas[dezena];
    } else {
      return dezenas[dezena] + ' e ' + unidades[unidade];
    }
  } else if (numero < 1000) {
    var centena = Math.floor(numero / 100);
    var resto = numero % 100;
    if (resto === 0) {
      return centenas[centena];
    } else {
      return centenas[centena] + ' e ' + converterParaExtenso(resto);
    }
  } else if (numero < 10000) {
    var milhar = Math.floor(numero / 1000);
    var resto = numero % 1000;
    if (resto === 0) {
      return milhares[milhar];
    } else {
      var extensoMilhar = milhares[milhar];
      var extensoResto = converterParaExtenso(resto);
      return extensoMilhar + ' e ' + extensoResto;
    }
  } else {
    return 'Número inválido';
  }
}

window.onload = function() {

  window.emitirPC = function() {
    verRecibo();
    const divToDownload = document.getElementById("print2");
  
    divToDownload.style.width = "55%";
  
    const width = divToDownload.offsetWidth;
    const height = divToDownload.offsetHeight;
  
    const aspectRatio = width / height;
  
    const maxWidth  = 210;
    const maxHeight = 297;

    let increasedHeight = height * 1.5; 
    let increasedWidth = increasedHeight * aspectRatio;
  

    if (increasedWidth > maxWidth) {
      increasedWidth = maxWidth; 
      increasedHeight = increasedWidth / aspectRatio; 
    }
  
    if (increasedHeight > maxHeight) {
      increasedHeight = maxHeight; 
      increasedWidth = increasedHeight * aspectRatio; 
    }
  
    domtoimage.toPng(divToDownload)
      .then(function(dataUrl) {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('l', 'mm', [increasedWidth, increasedHeight]); 
        pdf.addImage(dataUrl, 'PNG', 0, 0, increasedWidth, increasedHeight);
        pdf.save('recibo_de_Emerson.pdf');
  
        divToDownload.style.width = "100%"; 
      })
      .catch(function(error) {
        divToDownload.style.width = "100%"; 
      });
  };

  window.emitirCelular = function() {
    verRecibo();
    const divToDownload = document.getElementById("print2");

    const width = divToDownload.offsetWidth;
    const height = divToDownload.offsetHeight;

    const aspectRatio = width / height;

    const maxWidth = 297; 
    const maxHeight = 210; 

    let increasedHeight = height * 1.2; 
    let increasedWidth = increasedHeight * aspectRatio;

    if (increasedWidth > maxWidth) {
      increasedWidth = maxWidth; 
      increasedHeight = increasedWidth / aspectRatio; 
    }

    if (increasedHeight > maxHeight) {
      increasedHeight = maxHeight; 
      increasedWidth = increasedHeight * aspectRatio; 
    }

    domtoimage.toPng(divToDownload)
      .then(function(dataUrl) {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('l', 'mm', [increasedWidth, increasedHeight]);
        pdf.addImage(dataUrl, 'PNG', 0, 0, increasedWidth, increasedHeight);
        pdf.save('recibo_de_Emerson.pdf');
      })
      .catch(function(error) {
      });
  };
};
