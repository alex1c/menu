const menu = [
  // {
  //   id: 1,
  //   title: "buttermilk pancakes",
  //   category: "breakfast",
  //   price: 15.99,
  //   img: "./images/item-1.jpeg",
  //   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  // },
  // {
  //   id: 2,
  //   title: "diner double",
  //   category: "lunch",
  //   price: 13.99,
  //   img: "./images/item-2.jpeg",
  //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  // },
  // {
  //   id: 3,
  //   title: "godzilla milkshake",
  //   category: "shakes",
  //   price: 6.99,
  //   img: "./images/item-3.jpeg",
  //   desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  // },
  // {
  //   id: 4,
  //   title: "country delight",
  //   category: "breakfast",
  //   price: 20.99,
  //   img: "./images/item-4.jpeg",
  //   desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  // },
  // {
  //   id: 5,
  //   title: "egg attack",
  //   category: "lunch",
  //   price: 22.99,
  //   img: "./images/item-5.jpeg",
  //   desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  // },
  // {
  //   id: 6,
  //   title: "oreo dream",
  //   category: "shakes",
  //   price: 18.99,
  //   img: "./images/item-6.jpeg",
  //   desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  // },
  // {
  //   id: 7,
  //   title: "bacon overflow",
  //   category: "breakfast",
  //   price: 8.99,
  //   img: "./images/item-7.jpeg",
  //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  // },
  // {
  //   id: 8,
  //   title: "american classic",
  //   category: "lunch",
  //   price: 12.99,
  //   img: "./images/item-8.jpeg",
  //   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  // },
  // {
  //   id: 9,
  //   title: "quarantine buddy",
  //   category: "shakes",
  //   price: 16.99,
  //   img: "./images/item-9.jpeg",
  //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  // },
  {
    id: 10,
    title: "Грузинский обед",
    category: "Обеды",
    price: 375,
    img: "./images/item-10.jpg",
    desc: `Баклажаны с орехами, суп-харчо с говядиной, аджабсандал, пури (хлеб)`,
  },
  {
    id: 11,
    title: "Домашний обед",
    category: "Обеды",
    price: 355,
    img: "./images/item-11.jpg",
    desc: `Салат витаминный, борщ с говядиной, куриная котлета, пури (хлеб)`,
  },
  {
    id: 12,
    title: "Японский обед",
    category: "Обеды",
    price: 385,
    img: "./images/item-12.jpg",
    desc: `Чука салат, мисо суп с тофу, курица в соусе терияки`,
  },
  {
    id: 13,
    title: "Восточный обед",
    category: "Обеды",
    price: 385,
    img: "./images/item-13.jpg",
    desc: `Салат ачик-чучук, томатный суп с курицей и лапшой, чебурек с бараниной, пури`,
  },
  {
    id: 14,
    title: "Итальянский обед",
    category: "Обеды",
    price: 395,
    img: "./images/item-13.jpg",
    desc: `Салат из яблока и сельдерея, сырный суп, паста ди сальмоне, чиабатта`,
  },
  {
    id: 15,
    title: "Мясное ассорти",
    category: "Закуски",
    price: 540,
    img: "./images/15.png",
    desc: `Нарезка из буженины, отварного говяжьего языка и бастурмы. Подается хреном с горчицей`,
  },
  {
    id: 16,
    title: "Ассорти из кавказских сыров",
    category: "Закуски",
    price: 450,
    img: "./images/16.png",
    desc: `Сулугуни, имеретинский сыр, копченый сулугуни, чечил`,
  },
  {
    id: 17,
    title: "Ассорти пхали",
    category: "Закуски",
    price: 290,
    img: "./images/17.png",
    desc: `Кнели из трех видов шпината, свеклы и стручковой фасоли с орехами`,
  },
  {
    id: 18,
    title: "Ассорти из свежих овощей и трав",
    category: "Закуски",
    price: 360,
    img: "./images/18.png",
    desc: `Композиция из свежих огурцов, томатов, болгарского перца и редиса со свежей зеленью`,
  },
  {
    id: 19,
    title: "Салат Сакартвело",
    category: "Салаты",
    price: 340,
    img: "./images/19.png",
    desc: `Запеченные баклажаны, болгарский перец, куриная грудка, соус от Шеф-повара`,
  },
  {
    id: 20,
    title: "Овощной салат по грузински",
    category: "Салаты",
    price: 290,
    img: "./images/20.png",
    desc: `Свежие помидоры, огурцы, красный лук и зелень под винной заправкой`,
  },
  {
    id: 21,
    title: "Овощной салат по Имеретински",
    category: "Салаты",
    price: 320,
    img: "./images/21.png",
    desc: `Свежие помидоры, огурцы, красный лук, перец чили, зелень, грецкие орехи`,
  },
  {
    id: 22,
    title: "Теплый салат от шефа",
    category: "Салаты",
    price: 390,
    img: "./images/22.png",
    desc: `Обжаренная свиная вырезка, томаты черри, салат Айсберг, свежие огурцы, пармезан, соус от Шефа`,
  },
  {
    id: 23,
    title: "Томаты запеченые под сыром Сулугуни",
    category: "Горячее",
    price: 320,
    img: "./images/item-23.jpg",
    desc: `Томаты запеченые под сыром Сулугуни`,
  },
  {
    id: 24,
    title: "Питинхи",
    category: "Горячее",
    price: 310,
    img: "./images/item-24.jpg",
    desc: `Жареные куриные потрошка по-грузински`,
  },
  {
    id: 25,
    title: "Аджабсандал",
    category: "Горячее",
    price: 360,
    img: "./images/25.png",
    desc: `Овощное рагу по-грузински`,
  },
  {
    id: 26,
    title: "Долма с соусом Мацони",
    category: "Горячее",
    price: 430,
    img: "./images/26.png",
    desc: `Биточки из мяса с рисом в виноградных листьях`,
  },
  {
    id: 27,
    title: "Шашлык из баранины",
    category: "Шашлыки",
    price: 590,
    img: "./images/item-27.jpg",
    desc: `Шашлык из баранины`,
  },
  {
    id: 28,
    title: "Шашлык из свинины",
    category: "Шашлыки",
    price: 430,
    img: "./images/28.png",
    desc: `Шашлык из свинины`,
  },
  {
    id: 29,
    title: "Шашлык из курицы",
    category: "Шашлыки",
    price: 370,
    img: "./images/29.png",
    desc: `Шашлык из курицы`,
  },
  {
    id: 30,
    title: "Люля кебаб из баранины",
    category: "Шашлыки",
    price: 520,
    img: "./images/30.png",
    desc: `Люля кебаб из баранины`,
  },
  {
    id: 31,
    title: "Томатный сок",
    category: "Напитки",
    price: 200,
    img: "./images/item-31.jpg",
    desc: `Томатный сок`,
  },
  {
    id: 32,
    title: "Ананасовый сок",
    category: "Напитки",
    price: 200,
    img: "./images/item-32.jpg",
    desc: `Ананасовый сок`,
  },
  {
    id: 33,
    title: "Вишневый сок",
    category: "Напитки",
    price: 200,
    img: "./images/item-33.jpg",
    desc: `Вишневый сок`,
  },
  {
    id: 34,
    title: "Яблочный сок",
    category: "Напитки",
    price: 200,
    img: "./images/item-34.jpg",
    desc: `Яблочный сок`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);

  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
    </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn"); //!!!!
  //console.log(categories);

  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory)
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);
    return `<article class="menu-item">
        <img src="${item.img}" class="photo zoom" alt="${item.title}" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price"> ${item.price} руб</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
