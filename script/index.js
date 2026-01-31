// 1. Массив коллекции
const collection = [
  {
    title: "Вазы",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    title: "Букеты",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c"
  },
  {
    title: "День Святого Валентина",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  },
  {
    title: "День Матери",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  }
];

// 2. DOM элементы
const grid = document.getElementById("collectionGrid");
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("galleryImage");
const closeBtn = document.querySelector(".close");

// 3. Создание карточек из массива
collection.forEach(item => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.textContent = item.title;

  card.addEventListener("click", () => {
    modalImg.src = item.image;
    modal.classList.remove("hidden");
  });

  grid.appendChild(card);
});

// 4. Закрытие галереи
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});









//footer using DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} BP LLC. Bishkek, Kyrgyzstan`;
footer.appendChild(copyright);
