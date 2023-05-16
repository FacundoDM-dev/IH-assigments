// const getTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//       if (!response.ok) {
//         throw Error("Fallo");
//       } else return response.json();
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
// };

// getTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });



const displayData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let responseInnerData = "";
      data.forEach((responeInnerPosition) => {
        responseInnerData += `<ul>
                          <li>${responeInnerPosition.body}</li>
                          <li>${responeInnerPosition.title}</li>
                        </ul>`;
      });
      let domInsertion = document.querySelector("#posts").innerHTML = responseInnerData
      return domInsertion
      });
};

