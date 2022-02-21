
      let firstNumberValue = prompt('Introdu primul numar:');

      let operator = prompt('Introdu operatorul( +, -, * sau / )');

      let secondNumberValue = prompt('Introdu al doilea numar:');

      var suma = parseInt(firstNumberValue) + parseInt(secondNumberValue)
      var diferenta = parseInt(firstNumberValue) - parseInt(secondNumberValue)
      var inmultire = parseInt(firstNumberValue) * parseInt(secondNumberValue)
      var impartire = parseInt(firstNumberValue) / parseInt(secondNumberValue) 
        
      let firstNumber = parseFloat(firstNumberValue);

      let secondNumber = parseFloat(secondNumberValue);

    
      if(isNaN(firstNumber) || isNaN(secondNumber) ||
      ("" + firstNumber).length != firstNumberValue.length || ("" + secondNumber).length != secondNumberValue.length){

        alert("Valoarea unuia din operanzi nu este numerica!");

  }

     else if(isNumber(firstNumber) + isNumber(secondNumber)){
         alert("Suma este" + sum)
     }
     else if(isNumber(firstNumber) - isNumber(secondNumber)){
      alert("Suma este" + diferenta)
  }
  else if(isNumber(firstNumber) * isNumber(secondNumber)){
    alert("Suma este" + inmultire)
}
else (isNumber(firstNumber) / isNumber(secondNumber)) 
  alert("Suma este" + impartire)





   







