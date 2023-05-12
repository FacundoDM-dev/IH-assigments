// ITERATION 1

const updateSubtotal = (product) => {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let calculate = price.innerText * quantity.value;
  let result = (subtotal.innerHTML = calculate);

  return result;
};

const calculateAll = () => {

  // ITERATION 2
  
  const products = document.querySelectorAll('.product');
  let counter = 0;
  products.forEach((product) => {
  counter += updateSubtotal(product);

  });

  // ITERATION 3
  
  let total = document.querySelector('#total-value span');
  total.innerText = counter;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tbody = document.querySelector("tbody").parentNode
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove")
  removeBtn.forEach(button => { 
    button.addEventListener("click" , removeProduct)
  });

  // for (let i = 0; i < removeBtn.length; i++) {
  //   const element = removeBtn[i];
  //   element.addEventListener("click", removeProduct)S
  // }
  
  


  //... your code goes here
});
