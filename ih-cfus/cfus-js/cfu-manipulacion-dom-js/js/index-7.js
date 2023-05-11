let clickLi = document.getElementsByTagName("li")
console.log(clickLi)


for (let i = 0; i < clickLi.length; i++) {
    clickLi[i].onclick = function (e) {
      console.log(e.currentTarget.innerHTML);
    };
  }

  let shoppingList = document.querySelector(".shopping-list")
  let listItems = shoppingList.querySelectorAll("li")