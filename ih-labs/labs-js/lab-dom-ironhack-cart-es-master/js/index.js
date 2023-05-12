// ITERATION 1

const updateSubtotal = (product) => {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  const calculate = price.innerText * quantity.value;
  const result = (subtotal.innerText = calculate);

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

  const total = document.querySelector('#total-value span');
  total.innerText = counter;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  target.parentElement.removeChild(target);
  calculateAll(event)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  // for (let i = 0; i < removeBtn.length; i++) {
  //   const element = removeBtn[i];
  //   element.addEventListener("click", removeProduct)
  // }

  //... your code goes here
});
