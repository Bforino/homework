
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic

     // A is greater

    // B is greater

     // They are equal

     // One or more isn't a number

     if(a > b){
        comparison = ">";
     } else if(b > a){
        comparison = "<";
     } else if (a == b){
        comparison = "==";
     } else {
      comparison = "N/A"
     }
 
     document.querySelector('#comparison').innerText = comparison;
   };
 