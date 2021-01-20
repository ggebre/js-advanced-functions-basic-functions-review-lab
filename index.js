// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
} 

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
} 

function wrapAdjective(arg) {
    const inner = function(message){
        return `You are ${arg}${message}${arg}!`
    }
    return inner 
}


const Calculator = {
     add : function(a,b) {
        return a + b
     }, 
     multiply : function(a,b){
         return a*b
     },
     subtract : function(a,b){
         return a - b
     },
     divide : function(a,b){
         return a/b
     }
}

function actionApplyer(num1, funcs){
    let numCopy = num1
    if (funcs.length == 0){
        return num1
    }
    funcs.forEach(func => numCopy = func(numCopy))
    return numCopy
}

