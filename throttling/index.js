function myFunction(){
    console.log('this function was called');
}

function throttle(fn,limit){
    let flag =true;
    return function(){
        let context=this,args=arguments;
        if(flag) {
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}
const myThrottle = throttle(myFunction,3000);

