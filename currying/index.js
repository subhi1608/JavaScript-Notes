// https://blog.logrocket.com/understanding-javascript-currying/#:~:text=What%20is%20currying%20in%20JavaScript,functions%20with%20a%20single%20argument.

// currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

// function currying can be done in javascript using bind as well as hoisting.

let add= function (a,b){
console.log(a+b);
}


let addTwo= add.bind(this,2)(10);
// addTwo(4);

let addThree = add.bind(this,3)(10);
// addThree(10);

let multiply =function(x){
    return function(y){
        return function(z){
            console.log(x*y*z);
        }
    }
}
multiply(2)(4)(3);
