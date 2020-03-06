export default function mode(state=false, action){
    switch(action.type){      
       case "CHANGE_MODE":      
          var mode = !state        
          return mode   
       default:        
          return state    
     }   
 }