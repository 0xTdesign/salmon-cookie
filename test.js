"use strict";

const frankie = {
  name: "Frankie",
  age: 0,
  interests: ["cuddling", "chasing string", "catnip", "feathers"],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithOtherCats: true,
  getAge: function () {
    this.age = randomAge(3, 12) + " months";
  },
};
frankie.getAge();

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// this is the container for all cats
const parentElement = document.getElementById("kittenProfiles");

/*
<article>
  <h2>Name</h2>
  <p>Boi</p>
  <ul>
    <li></li>
  </ul>
  <img />
</article>
*/
const article = document.createElement("article");
parentElement.appendChild(article);

// get the name
const h2 = document.createElement("h2");
h2.textContent = frankie.name;
article.appendChild(h2);

// write a bio
const p = document.createElement("p");
p.textContent = `${frankie.name} is adorable, and is ${frankie.age} years old.`;
article.appendChild(p);

// list with her interests
const ul = document.createElement("ul");
article.appendChild(ul);

// loop through her interests
for (let i = 0; i < frankie.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}

const img = document.createElement("img");
img.setAttribute("src", "images/frankie.jpeg");
img.setAttribute(
  "alt",
  `cut picture of ${frankie.name}, who is an orange white cat. You should really adopt her.`
);
article.appendChild(img);
