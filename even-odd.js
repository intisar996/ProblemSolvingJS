function even_or_odd(number){

  if(number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }


}
console.log(even_or_odd(2));

function even_or_odds(number){

    return number % 2 == 0? "even" : "odd";
  
  
  }
  
  console.log(even_or_odds(7));