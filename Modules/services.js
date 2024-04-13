function recursionFactorial(num) {   
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * recursionFactorial(num - 1);
}
function add(a,b){
    return a+b;
}
//export

// module.exports = {
//     recursionFactorial,
//     add,
//     sub(a,b){
//         return a-b;
//     }
// }

exports.add = (a,b) => (a+b);

exports.sub = (a,b) => (a-b);

// exports.recursionFactorial; //wrong

exports.recursionFactorial = recursionFactorial;