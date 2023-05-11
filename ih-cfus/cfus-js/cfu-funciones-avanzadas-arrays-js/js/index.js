let sumar = ((x , y) => {
    return x + y;
})

let mutiplicar = ((x , y) => {
    return x * y;
})

let dividir = ((x , y) => {
    return x / y;
})


const printMessege = (() => {
    return "Soy una expresión de función"
})

const useFuncExpression = ((func) => {
    return func
})

console.log(useFuncExpression(printMessege));

function processArray(arr, callback) {
    return arr.map(callback);
  }
   
  function addTwo(num) {
    return num + 4;
  }
   
  const nums = [1, 2, 3, 4];
  console.log(processArray(nums, addTwo));
  console.log(nums);