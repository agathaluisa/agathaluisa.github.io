function snapCrackle (maxValue) {
    let string = ""
    
    for(let value = 1; value <= maxValue; value++){
    let virgula = ","
    
     if(value == maxValue){
         virgula = ""
     }
      
    if(value % 2 !== 0 && value % 5 === 0){
         
        string += "SnapCrackle" + virgula
        
     }
     else if(value % 2 == 0 && value % 5 !== 0){
         
       string += value + virgula
       }
       else if(value % 2 !== 0 ){
          
       string += "Snap" + virgula
       
         }
       else if (value % 5 === 0 ){
          
        string += "Crackle" + virgula
        
     }
       
      
       
      
     }
     
     
    return string
 } 
 console.log(snapCrackle(5))