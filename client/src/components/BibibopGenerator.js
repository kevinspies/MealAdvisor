const bibiMenu = {
  bases: [{ purpleRice: 280 }, { japchaeNoodles: 213 }],
  proteins: [{ spicyChicken: 169 }, { sweetChicken: 171 }, { Beef: 180 }],
  hotToppings: [{ beanSprouts: 45 }, { blackBeans: 35 }, { potatoes: 60 }],
  coldToppings: [
    { carrots: 15 },
    { cheese: 100 },
    { corn: 25 },
    { cucumber: 4 },
    { eggs: 40 },
    { daikon: 10 },
    { kale: 25 },
    { pickledRedCabbage: 15 },
    { redCabbage: 9 }
  ],
  sauces: [
    { yumYum: 140 },
    { teriaki: 32 },
    { gochujang: 70 },
    { cucumberWasabi: 150 },
    { spicySriracha: 25 },
    { sesameGinger: 100 }
  ],
  sides: [{ kimchi: 30 }, { misoSoup: 35 }]
};

var order = [];
var currentCalories = 0;

function addBase() {
  order.push(bibiMenu.bases[Math.floor(Math.random() * bibiMenu.bases.length)]);
}
function addProtein() {
  order.push(
    bibiMenu.proteins[Math.floor(Math.random() * bibiMenu.proteins.length)]
  );
}
function addhotTopping() {
  order.push(
    bibiMenu.hotToppings[
      Math.floor(Math.random() * bibiMenu.hotToppings.length)
    ]
  );
}

addBase();
addProtein();
addhotTopping();
console.log(order);
console.log(typeof order);
// console.log(Object.values(order));
for (var i = 0; i < order.length; i++) {
  currentCalories += parseInt(Object.values(order[i]));
}
console.log(currentCalories);
