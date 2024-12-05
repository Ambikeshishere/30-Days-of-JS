
alert("AA gya muh utha ke")
var counter = function(init){
    let presentCount = init;

    function increment (){
        return ++presentCount;
    } 

    function decrement() {
        return --presentCount;
    }

    function reset() {
        return (presentCount = init);
    }

    return{increment, decrement, reset};
};

console.log("Kya be shaane")