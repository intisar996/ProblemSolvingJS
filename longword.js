

function LongWord(words) {
   
    let word = "";
    let letterw ="";
    let sent = words.split(' ');

   for (let i = 0; i < sent.length; i++) {
    
       if(sent[i].length > letterw.length ) {
  
        letterw =  sent[i];

       }
    

   }


    return letterw;

}



console.log(LongWord("أنا أحب البرمجة بلغة جافاسكريبت"))