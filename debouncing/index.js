let counter=0;
function getData(){
    console.log("getting data",counter++)
}

function betterFunction(fn,delay){
    let timer;
    return function(){
        // if user presses any key before the delay function in that case the previous timer would be cleared
        if(timer) clearTimeout(timer);
         timer= setTimeout(()=>{
            fn()
        },delay)
    }
}

let debounce=betterFunction(getData,1000);