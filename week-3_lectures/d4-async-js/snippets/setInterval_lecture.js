function foo(a,b){
    console.log("time is up")
    console.log(a + "")
}

setInterval(foo, 1000)

console.log("end")






let count = 0;

function foo(a,b){
    console.log("time is up")    
    count += 1;

    if (count == 10){
        clearInterval(intervalObj)
    }
}

const interval = setInterval(foo, 1000)










function intervalCount(count){
    const interval = setInterval(function foo(a,b){
        console.log("time is up")    
        count -= 1;
        
        if (count == 0){
            clearInterval(intervalObj)
        }
    }, 500)
}







function intervalCount(count, delay){
    const interval = setInterval(function(a,b){
        console.log("time is up")    
        count -= 1;
        
        if (count == 0){
            clearInterval(intervalObj)
        }
    }, delay)
}

intervalCount(3,250)










function intervalCount(cb,count, delay){
    const interval = setInterval(function(a,b){
        cb()
        console.log("time is up")    
        count -= 1;
        
        if (count == 0){
            clearInterval(intervalObj)
        }
    }, delay)
}

intervalCount(function() {
    console.log("hello")
},3,250)


