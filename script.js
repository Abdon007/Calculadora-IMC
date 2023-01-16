

// Coletando os elementos do formulario
let formulario = document.querySelector('form');
let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let cxImc = document.querySelector('#resultadoImc');

// Span e formulario de resultado 

let aviso = document.querySelector('#aviso');
let dados = document.querySelector('.pessoa');

// Botoes

let btnEnviar = document.querySelector('#btn-Enviar');
let btnLimpar = document.querySelector('#btn-Limpar');

//Eventos

btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;
    let imc = (peso / (altura * altura)).toFixed(1);

    console.log(nome);
    console.log(idade);
    console.log(peso);
    console.log(altura);
    console.log(imc);

    cxImc.value = imc;
    let sit = SituacaoDoPeso(imc);
    aviso.textContent = sit;
    e.preventDefault();
  
    function SituacaoDoPeso(imc) {
        let situacao = '';
        if (imc < 18.5) {
            situacao ='baixo peso';
        }
        else if( imc >= 18.5 && imc <= 24.9){
            situacao ='Peso Normal';
        }
        else if(imc >= 25 && imc <= 29.9){
            situacao = 'Sobrepeso';
        }
        else if(imc >= 30 && imc <= 34.9){
            situacao = 'Obesidade I';
        }
        else if(imc >= 35 && imc <= 39.9){
            situacao = 'Obesidade II';
        }
        else if(imc >= 40){
            situacao = 'Obesidade III';
        }
        else{
            situacao = 'informe seu peso corretamente';
        }
        return situacao;
    }
        
})




