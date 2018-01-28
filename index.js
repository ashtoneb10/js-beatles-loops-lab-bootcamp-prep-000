function theBeatlesPlay(musicians, instruments){
  let array = [];
  for(let i = 0; i < musicians.length; i ++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(array){
  for(let i = 0; i<array.length; i++){
    array[i] = `${array[i]}!!!`
  }
  return array;
}

function iLoveTheBeatles(number){
  let array = [];
  do {
    array.push("I love the Beatles!");
    number = number -1;
  } while (number <15 && number > 0);
  return array;
}