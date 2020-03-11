export function changeMode(){  
    return {    
       type: "CHANGE_MODE"  
    }
 }

 export function setMode(user){
    debugger;
    return {
       type: "SET_MODE",
       user
    }
 }
