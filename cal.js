let display = document.getElementById("display");
       let valorAnterior = '';
       let operacao = '';
       function adicionar(caractere) {
           if (caractere === 'AC') {
               display.innerHTML = '';
               valorAnterior = '';
               operacao = '';
           } else {
               display.innerHTML += caractere;
           }
       }
       function apagar() {
           display.innerHTML = display.innerHTML.slice(0, -1);
       }
       function calcular() {
           try {
               let resultado = eval(display.innerHTML);
               display.innerHTML = resultado;
               valorAnterior = resultado;
               operacao = '';
           } catch (error) {
               display.innerHTML = "Erro";
           }

        }