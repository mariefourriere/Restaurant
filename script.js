const collection = [{
    title: "Poulet rôti",
    category: ["Plat"],
    category2: ["category2"],
    img: "./assets/images/plat_1.png",  
    description: "Ce poulet roti est incryable. retrouvez-y du piment et du poulet.",
    Prix:"Ajoutez moi pour: 12€"
},

{
    title: "Coulant au chocolat",
    category: ["Dessert"],
    category2: ["category2"],
    img: "./assets/images/plat_2.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 15€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_3.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 14€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_4.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 18€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_5.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 17€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_6.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 20€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_7.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 9€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_8.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 11€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_9.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 14€"
},

{
    title: "Coulant au chocolat",
    category: ["category"],
    category2: ["category2"],
    img: "./assets/images/plat_10.png",  
    description: "Une recette simple et efficace pour tous les fans de chocolat.",
    Prix:"Ajoutez moi pour: 16€"
},
];

/////////////////////////////   Card   ////////////////////////////////////////////////////
const SectionColonne = document.querySelector(".menu")
SectionColonne.innerHTML = ""

for (let element of collection) {

    const colonne = document.createElement('div');
    colonne.className = "card column is-one-quarter margin";
    SectionColonne.appendChild(colonne);

    //============================== IMAGE =================================//

    const cardImg = document.createElement('div');
    cardImg.className = "card-image";
    colonne.appendChild(cardImg);

    const cardfig = document.createElement('figure');
    cardfig.className = "image is-4by3";
    cardImg.appendChild(cardfig);

    const image = document.createElement('img');
    image.src = element.img;
    cardfig.appendChild(image);

    //============================== TAG =================================//
   
    const cardCont = document.createElement('div');
    cardCont.className = "card-content";
    colonne.appendChild(cardCont);

    const tag = document.createElement('span');
    tag.className = "tag is-success";
    tag.textContent = element.category;
    cardCont.appendChild(tag);

    const tag2 = document.createElement('span');
    tag2.className = "tag is-danger";
    tag2.textContent = element.category2;
    cardCont.appendChild(tag2);
       
    //==================================== TITRE + Texte =====================================//
   
    const cardAllText = document.createElement('div');
    cardAllText.className = "content";
    cardCont.appendChild(cardAllText);

    const cardTitre = document.createElement('h2');
    cardTitre.className = "content";
    cardTitre.textContent = element.title;
    cardAllText.appendChild(cardTitre);

    const cardText = document.createElement('p');
    cardText.className = "content";
    cardText.textContent = element.description;
    cardAllText.appendChild(cardText);

    //============================== PRIX =================================//

    const cardAllPrix = document.createElement('div');
    cardAllPrix.className = "block";
    cardAllText.appendChild(cardAllPrix);

    const cardPrix = document.createElement('a');
    cardPrix.className = "button";
    cardPrix.textContent = element.Prix;
    cardAllText.appendChild(cardPrix);
  //ok  




}
/////////////////////////////  Fin Card   ////////////////////////////////////////////////////