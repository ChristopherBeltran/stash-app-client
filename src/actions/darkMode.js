export function changeMode(){  
    return {    
       type: "CHANGE_MODE"  
    }
 }

 export function setMode(user){
    let userDarkMode = user.attributes.dark_mode
    return {
       type: "SET_MODE",
       userDarkMode
    }
 }
