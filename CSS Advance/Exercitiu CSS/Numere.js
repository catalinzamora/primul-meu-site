
      let firstNumberValue = prompt('Introdu primul numar:');

      let operator = prompt('Introdu operatorul( +, -, * sau / )');

      let secondNumberValue = prompt('Introdu al doilea numar:');

      var sum = parseInt(firstNumberValue) + parseInt(secondNumberValue)
      var diferenta = parseInt(firstNumberValue) - parseInt(secondNumberValue)
      var inmultire = parseInt(firstNumberValue) * parseInt(secondNumberValue)
      var impartire = parseInt(firstNumberValue) / parseInt(secondNumberValue) 
        
      let firstNumber = parseFloat(firstNumberValue);

      let secondNumber = parseFloat(secondNumberValue);

        if(isNaN(firstNumber) || isNaN(secondNumber) ||

        ("" + firstNumber).length != firstNumberValue.length || ("" + secondNumber).length != secondNumberValue.length){
  
  
  
          alert("Valoarea unuia din operanzi nu este numerica!");
  
    }
  
      else if(sum){

       alert("suma este" + sum)
  
     } 
      else if(diferenta){
        alert("Diferenta este"+ diferenta);
      }

     else if (inmultire){
        alert("inmultirea este"+ inmultire)
      }

      else if(impartire) {
        alert("impartirea este"+ impartire);
      }
      else{
        alert ("no value")
      }





   







