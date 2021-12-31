 function compare() {
     let stringOne = (prompt(`First input`)).toLowerCase();
     let stringTwo = (prompt(`Second input`)).toLowerCase();
     let noWhiteSpaceOne = stringOne.replace(/ /g, "");
     let noWhiteSpaceTwo = stringTwo.replace(/ /g, "");

     let resultOne = noWhiteSpaceOne.split('');
     let sortedOne = resultOne.sort();
     let resultTwo = noWhiteSpaceTwo.split('');
     let sortedTwo = resultTwo.sort();
     console.log(sortedTwo.join(',') == sortedOne.join(','));
 }

 compare()