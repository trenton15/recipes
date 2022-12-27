const recipes = [
    {
      id: 1,
      title: "Marry Me Chicken",
      ingredients: '2 large chicken breasts sliced into 4 thinner cutlets \n 1/2 cup of flour \n 1/2 tsp each of salt, pepper, paprika, garlic powder \n 2 TBSP olive oil \n 2 TBSP butter \n 2 TBSP of minced garlic \n 1 cup of chicken broth \n 1 cup of heavy cream \n 1 cup of Parmesan cheese \n 1 tsp of red pepper flakes \n 1/2 tsp each of oregano and thyme \n 1/3 cup of chopped sun dried tomatoes',
      instructions: "• mix together flour, salt, pepper, garlic, and paprika \n • dredge chicken breasts into the flour/seasoning mixture(salt,pepper,paprika,garlic powder) \n • in a skillet heat olive oil and butter on medium heat \n • cook chicken 4-5 minutes on each side until golden brown and it reaches 165 degrees \n • take the chicken out of the skillet and put aside \n • add garlic and chicken broth to the skillet \n • lower heat and add heavy cream and Parmesan cheese \n • add the rest of the seasonings and sun dried tomatoes \n • continue cooking and stirring until desired thickness",
      imgSrc: "./images/marry_me_chicken2.webp",
      imgAlt: "Marry Me Chicken image",
      stars: '<span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>',
      link: "second.html"
    },
    {
      id: 2,
      title: "Yellow Chicken Curry",
      ingredients: '1 Tbsp coconut oil \n4 Tbsp yellow curry paste \n2 15-oz cans of coconut milk \n2 cups chicken stock \n4 carrots, peeled and chopped \n4 medium-sized potatoes, \npeeled and chopped Directions Janelle Bowcutt \n1 yellow onion, sliced into wedges, then halved \n2 chicken breasts, very thinly sliced \n11⁄2 tsp fish sauce (optional) \n3/4 tsp salt \n1 1/2 tsp sugar (plus more to taste) \nCilantro for garnish',
      instructions: "Boil potatoes until fork-tender. \nDrain and set aside. \nIn a large pot, heat up coconut oil. \nAdd curry paste to oil, stir for a few minutes. \nAdd in coconut milk and chicken stock. \nStir and bring to boil. \nAdd in carrots and onions. \nOnce carrots are almost fork-tender, add in thinly sliced chicken and cook for two or three minutes. \nRemove from heat. \nAdd in potatoes. \nStir in fish sauce, salt, and sugar. \nServe over rice and garnish with cilantro.",
      imgSrc: "./images/yellow_chicken_curry2.webp",
      imgAlt: "Yellow Chicken Curry image",
      stars: '<span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>',
      link: "https://www.instagram.com/reel/CkN1zAhD-CB/?utm_source=ig_web_copy_link"
    }
    /*{
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐",
      link: "https://en.wikipedia.org/wiki/The_Sword_of_Summer"
    },
    {
      id: 3,
      title: "Belgariad Book One: Pawn of Prophecy",
      date: "Feb 12, 2022",
      description:
        'A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his "Aunt Pol" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.',
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      imgAlt: "Book cover for Pawn of Prophecy",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐⭐",
      link: "https://www.goodreads.com/book/show/44659.Pawn_of_Prophecy"
    }*/
  ];

  function recipeTemplate(recipes) {
    return `
      <div class="card">
          <a href="${recipes.link}"><img alt="${recipes.imgAlt}" src=${recipes.imgSrc}></a>
          <h1><a href="${recipes.link}">${recipes.title}</a></h1>
          <p class="star">${recipes.stars}</p>
      </div>`
}
function renderRecipes(){
  const htmlRecipes = recipes.map(recipeTemplate);
  const newUl = document.createElement('ul');
  newUl.classList.add('recipes-list');
  newUl.insertAdjacentHTML('afterbegin', htmlRecipes.join(''));
  document.querySelector('main').insertAdjacentElement('beforeend', newUl);
}

renderRecipes()