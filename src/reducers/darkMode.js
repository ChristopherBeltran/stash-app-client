export default function mode(state=false, action){
    switch(action.type){

      case "SET_MODE":
         return action.userDarkMode
       case "CHANGE_MODE":      
          var mode = !state        
          return mode
       default:        
          return state    
     }   
 }