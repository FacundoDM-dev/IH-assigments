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
  calculateAll(event);
}

// ITERATION 5

function createProduct() {
  let inputText = document.querySelector(".create-product input[type='text']");
  let inputPrice = document.querySelector(".create-product input[type='number']");
  let tbody = document.querySelector('tbody');
  let newList = document.createElement('tr');
  newList.setAttribute("class", "product")
  newList.innerHTML =   `<td class="name">
                        <span>${inputText.value}</span>
                        </td>
                        <td class="price">$<span>${inputPrice.value}</span></td>
                        <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity"/>
                        </td>
                        <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                        <button class="btn btn-remove">Remove</button>
                        </td>`;
  tbody.appendChild(newList);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
  button.addEventListener('click', removeProduct);
    
  });
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
  const newProduct = document.querySelector('#create');
  newProduct.addEventListener('click', createProduct);
});
