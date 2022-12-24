const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "⭐⭐⭐",
      link: "https://en.wikipedia.org/wiki/Magyk"
    },
    {
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
    }
  ];

  function articleTemplate(article) {
    return `<section>
    <article>
        <div>
            <p>${article.date}</p>
            <p>${article.ages}</p>
            <p>${article.genre}</p>
            <p>${article.stars}</p>
        </div>
        <div>
            <h2><a href="${article.link}" target="_blank">${article.title}</a></h2>
            <a href="${article.link}" target="_blank"><img alt="${article.imgAlt}" src=${article.imgSrc}></a>
            <p>${article.description}
                <a class="link" href="${article.link}" target="_blank">Read More...</a>
            </p>
        </div>
    </article>
</section>`
    //return `<li class="meal-card"><img src="${meal.imgSrc}"><h2>${meal.name}</h2><p class="meal-category">${meal.category}</p><p>PrepTime: ${meal.prepTime}</p><p>CookTime: ${meal.cookTime}</p></li>`
  }
  function renderArticles(){
    const htmlArticles = articles.map(articleTemplate);
    const newUl = document.createElement('ul');
    newUl.classList.add('article-list');
    newUl.insertAdjacentHTML('afterbegin', htmlArticles.join(''));
    document.querySelector('section').insertAdjacentElement('beforeend', newUl);
  }
  renderArticles()