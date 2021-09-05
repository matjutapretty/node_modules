// function greet(name) {
//     if (!name) {
//         return "Hello"
//     }
//     return "Hello, "+ name;
// }
// var msg = greet('Xola')

// console.log(msg)

module.exports = function(name){
    return 'Hello, ' + name;
}