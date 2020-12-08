// Jean - Cart Div //

let myBasketButton = document.querySelector("body > header > nav > div.navbar-menu > div:nth-child(3) > div > div > button")
let totalOrder="0€";
let main = document.querySelector('main')

let clicked = true;
let recapDiv = document.createElement("div");

let recapDivTitle=document.createElement("h3");
recapDivTitle.textContent = "You can find the recap of your order below:";

let recapDivOrders= document.createElement("div");
recapDivOrders.classList.add("recapDivOrders");
let recapDivOrdersEmpty = document.createElement("p");
recapDivOrdersEmpty.textContent = "Your Cart is currently empty !";
recapDivOrders.appendChild(recapDivOrdersEmpty);

let recapDivCartTotal= document.createElement("button");
recapDivCartTotal.innerText="Order here for: "+totalOrder

recapDiv.appendChild(recapDivTitle);
recapDiv.appendChild(recapDivOrders);
recapDiv.appendChild(recapDivCartTotal);
document.body.appendChild(recapDiv);
recapDiv.classList.add("recapDiv");

const recapOrder = (e) => {

    if (clicked) {
        console.log("clicked:", clicked);
        recapDiv.style.right="0";
        clicked = false;
    } else {
        console.log(clicked);
        recapDiv.style.right = "-30%";
        clicked = true;
    }   
}


myBasketButton.addEventListener("click", recapOrder);
//END JEAN

//Wassim
const collection = [{
    title: "Poulet rôti",
    category: ["Plat"],
    category2: ["Non-Vegetarien"],
    img: "./assets/images/plat_1.png",
    description: "Ce poulet roti est incryable. retrouvez-y du piment et du poulet.",
    Prix: "12€"
},

{
    title: "Tiramisu",
    category: ["Dessert"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_2.png",
    description: "Pour réchauffer les coeurs un bon Tiramisu.",
    Prix: "15€"
},

{
    title:"Gyoza aux poireaux",
    category: ["Plat"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_3.png",
    description: "De bons poireaux c'est tout ce qu'il vous faut",
    Prix: "14€"
},

{
    title: "Steak de légumes",
    category: ["Plat"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_4.png",
    description: "Plat 100% maison dans un petit jardin privatif.",
    Prix: "18€"
},

{
    title: "Moscow Mule",
    category: ["Boisson"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_5.png",
    description: "Cocktail à base de vodka, de bière de gingembre épicée et du citron vert.",
    Prix: "17€"
},

{
    title: "Steak frite",
    category: ["Plat"],
    category2: ["Non-Vegetarien"],
    img: "./assets/images/plat_6.png",
    description: "De bonnes frites et de la bonne viande.",
    Prix: "20€"
},

{
    title: "Cocktail",
    category: ["Boisson"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_7.png",
    description: "Un cocktail rafraîchissant pour l'été pour vôtre plus grand plaisir.",
    Prix: "9€"
},

{
    title: "Poisson drésser",
    category: ["Plat"],
    category2: ["Non-Vegetarien"],
    img: "./assets/images/plat_8.png",
    description: "Fillet de poisson accompagné de pomme de terre et de la salade.",
    Prix: "11€"
},

{
    title: "Glace",
    category: ["Dessert"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_9.png",
    description: "Délicieuse glace mangue framboise.",
    Prix: "14€"
},

{
    title: "Mozzarella Tomate",
    category: ["Plat"],
    category2: ["Vegetarien"],
    img: "./assets/images/plat_10.png",
    description: "De simple mozzarella, mais accompagné de délicieuse rondelle de tomate.",
    Prix: "16€"
},
];

/////////////////////////////   Card   ////////////////////////////////////////////////////
const SectionColonne = document.querySelector(".menu")
// SectionColonne.innerHTML = ""



for (let element of collection) {
  const colonne = document.createElement("div");
  colonne.className = "card column is-one-quarter margin";
  SectionColonne.appendChild(colonne);

  //============================== IMAGE =================================//

  const cardImg = document.createElement("div");
  cardImg.className = "card-image";
  colonne.appendChild(cardImg);

  const cardfig = document.createElement("figure");
  cardfig.className = "image is-4by3";
  cardImg.appendChild(cardfig);

  const image = document.createElement("img");
  image.src = element.img;
  cardfig.appendChild(image);

  //============================== TAG =================================//

  const cardCont = document.createElement("div");
  cardCont.className = "card-content";
  colonne.appendChild(cardCont);

  const tag = document.createElement("span");
  tag.className = "tag is-success";
  tag.textContent = element.category;
  cardCont.appendChild(tag);

  const tag2 = document.createElement("span");
  tag2.className = "tag is-danger";
  tag2.textContent = element.category2;
  cardCont.appendChild(tag2);

  //==================================== TITRE + Texte =====================================//

  const cardAllText = document.createElement("div");
  cardAllText.className = "content";
  cardCont.appendChild(cardAllText);

  const cardTitre = document.createElement("h2");
  cardTitre.className = "content";
  cardTitre.textContent = element.title;
  cardAllText.appendChild(cardTitre);

  const cardText = document.createElement("p");
  cardText.className = "content";
  cardText.textContent = element.description;
  cardAllText.appendChild(cardText);

  //============================== PRIX =================================//

  const cardAllPrix = document.createElement("div");
  cardAllPrix.className = "block";
  cardAllText.appendChild(cardAllPrix);

  const cardPrix = document.createElement("a");
  cardPrix.className = "button";
  cardPrix.textContent = "Ajoutez moi pour: " + element.Prix;
  cardAllText.appendChild(cardPrix);

  //============================== Function ADD TO CART =================================//
  //function to add production to cart :
  const addingToCart = (e) => {
    recapDivOrdersEmpty.textContent = "";
    const innerRecapDiv = document.createElement("div");
    const innerRecapImgLeft = document.createElement("img");
    const innerRecapDivRight = document.createElement("div");
    const innerRecapDivRightTitle = document.createElement("h3");
    const innerRecapDivRightPrice = document.createElement("p");

    innerRecapDiv.classList.add("innerRecapDiv");
    innerRecapDivRight.classList.add("innerRecapDivRight");
    innerRecapImgLeft.classList.add("innerRecapImgLeft");

    innerRecapImgLeft.src = element.img;
    innerRecapDivRightTitle.textContent = element.title;
    innerRecapDivRightPrice.textContent = element.Prix;

    innerRecapDiv.appendChild(innerRecapImgLeft);
    innerRecapDiv.appendChild(innerRecapDivRight);
    innerRecapDivRight.appendChild(innerRecapDivRightTitle);
    innerRecapDivRight.appendChild(innerRecapDivRightPrice);
    recapDivOrders.appendChild(innerRecapDiv);
  };

  cardPrix.addEventListener("click", addingToCart);
}
/////////////////////////////  Fin Card   ////////////////////////////////////////////////////
//////////////////////////// Option de recherche ////////////////////////////////////////////

function filterPlat(information) {
    const results = []

    for (let plat of collection) {
        if (plat.title.toLowerCase().match(information)) {
            results.push(plat)
        }
    }

    const resultsDiv = document.querySelector('#collection_Filtrer') //pour envoyé la nouvel collection avec le filtre dans une nouvel 'div' ligne(129 HTML)
    resultsDiv.innerHTML = ''
    SectionColonne.innerHTML = ' '

    for (let element of results /*option recherche*/ ) {
      const colonne = document.createElement("div");
      colonne.className = "card column is-one-quarter margin";
      resultsDiv.appendChild(colonne); //option recherche

      //============================== IMAGE =================================//

      const cardImg = document.createElement("div");
      cardImg.className = "card-image";
      colonne.appendChild(cardImg);

      const cardfig = document.createElement("figure");
      cardfig.className = "image is-4by3";
      cardImg.appendChild(cardfig);

      const image = document.createElement("img");
      image.src = element.img;
      cardfig.appendChild(image);

      //============================== TAG =================================//

      const cardCont = document.createElement("div");
      cardCont.className = "card-content";
      colonne.appendChild(cardCont);

      const tag = document.createElement("span");
      tag.className = "tag is-success";
      tag.textContent = element.category;
      cardCont.appendChild(tag);

      const tag2 = document.createElement("span");
      tag2.className = "tag is-danger";
      tag2.textContent = element.category2;
      cardCont.appendChild(tag2);

      //==================================== TITRE + Texte =====================================//

      const cardAllText = document.createElement("div");
      cardAllText.className = "content";
      cardCont.appendChild(cardAllText);

      const cardTitre = document.createElement("h2");
      cardTitre.className = "content";
      cardTitre.textContent = element.title;
      cardAllText.appendChild(cardTitre);

      const cardText = document.createElement("p");
      cardText.className = "content";
      cardText.textContent = element.description;
      cardAllText.appendChild(cardText);

      //============================== PRIX =================================//

      const cardAllPrix = document.createElement("div");
      cardAllPrix.className = "block";
      cardAllText.appendChild(cardAllPrix);

      const cardPrix = document.createElement("a");
      cardPrix.className = "button";
      cardPrix.textContent = element.Prix;
      cardAllText.appendChild(cardPrix);
    }
}

document.querySelector('#recherche') //option recherche
    .addEventListener('keyup', input => {
        /* sélection des valeurs(keyup) entrer dans la barre de recherche(input) */
        filterPlat(input.target.value.toLowerCase())
    })



