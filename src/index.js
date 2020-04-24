let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
  //stuff! :D
  //find toy collection
  //do get request fetch to da json file & get data
  //iterate with loop
  //create div with class cards 
  // append 

  fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(toys => makeCards(toys))
    
    let form = document.getElementsByClassName('add-toy-form')[0]
    console.log(form)
    
    form.addEventListener('submit', postData)
});



function makeCards(array) {
  const toyDiv = document.getElementById("toy-collection")
  for (const toy of array) {
    const card = makeCard(toy)

    toyDiv.appendChild(card)
  }
}
function makeCard(json) {
  let div = document.createElement("div")
  div.className = "card"
  div.innerHTML =
    `<h2>${json.name}</h2>
<img src=${json.image} class="toy-avatar"/>
<p> ${json.likes} Likes </p>
<button class="like-btn">Like <3</button>`

  return div
}


// Fetch with post

function postData(event) {
  // const toyDiv = document.getElementById("toy-collection")
  console.log(event.target)
  const inputForm = document.getElementsByClassName('input-text')
  event.preventDefault()
  // debugger
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: 
{
  "Content-Type": "application/json",
  "Accept": "application/json"
},
    body: JSON.stringify({ "name": inputForm[0].value, "image": inputForm[1].value, "likes": 0 })
  }).then(resp => resp.json())
  .then(toy => oneCard(toy))
  .catch(function(error){
    console.log(error.message)
  })
}

function oneCard(json) {
  const toyDiv = document.getElementById("toy-collection")
  let div = document.createElement("div")
  div.className = "card"
  console.dir(json.target)
  div.innerHTML =
    `<h2>${json.name}</h2>
<img src=${json.image} class="toy-avatar"/>
<p> ${json.likes} Likes </p>
<button class="like-btn">Like <3</button>`
  toyDiv.appendChild(div)
}

