
      let firstNumberValue = prompt('Introdu primul numar:');

      let operator = prompt('Introdu operatorul( +, -, * sau / )');

      let secondNumberValue = prompt('Introdu al doilea numar:');

     /* var suma = parseInt(firstNumberValue) + parseInt(secondNumberValue)
      var diferenta = parseInt(firstNumberValue) - parseInt(secondNumberValue)
      var inmultire = parseInt(firstNumberValue) * parseInt(secondNumberValue)
      var impartire = parseInt(firstNumberValue) / parseInt(secondNumberValue) */
        
       
      var firstNumberValue = parseFloat(firstNumberValue);

      var secondNumberValue = parseFloat(secondNumberValue);

    
      if(isNaN(firstNumber) || isNaN(secondNumber) ||
      ("" + firstNumber).length != firstNumberValue.length || ("" + secondNumber).length != secondNumberValue.length){

        alert("Valoarea unuia din operanzi nu este numerica!");

  }

     else if(operator){
         alert("Suma este" + sum)
     }





   







