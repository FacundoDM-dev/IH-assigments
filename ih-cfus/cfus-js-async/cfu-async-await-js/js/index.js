const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);
  } catch (err) {
    console.log("Error request, unrecognized URL");
  }
};

console.log(getData("https://jsonplaceholder.typicode.com/posts"));

const displayData = async () => {
  try {
    const dataRequest = await fetch(
      "https://jsonplaceholder.typicode.com/poss"
    );
    const dataClean = await dataRequest.json();
    const parentElement = document.querySelector("#posts");
    dataClean.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      parentElement.appendChild(postElement);
    });
  } catch (err) {
    console.log("Error:", Error);
    const errorTag = document.createElement("p");
    errorTag.innerText = "Fail request";
    document.body.appendChild(errorTag);
  }
};

displayData();
