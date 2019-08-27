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
  sides: [{ kimchi: 30 }, { misoSoup: 35 }] //perhaps add salad here
};

var order = [];
var currentCalories = 0;

export function addBase() {
  order.push(bibiMenu.bases[Math.floor(Math.random() * bibiMenu.bases.length)]);
  return order;
}

function addProtein() {
  order.push(
    bibiMenu.proteins[Math.floor(Math.random() * bibiMenu.proteins.length)]
  );
}
function addHotTopping() {
  order.push(
    bibiMenu.hotToppings[
      Math.floor(Math.random() * bibiMenu.hotToppings.length)
    ]
  );
}
function addColdTopping() {
  order.push(
    bibiMenu.coldToppings[
      Math.floor(Math.random() * bibiMenu.coldToppings.length)
    ]
  );
}
function addSauce() {
  order.push(
    bibiMenu.sauces[Math.floor(Math.random() * bibiMenu.sauces.length)]
  );
}
function addSide() {
  order.push(bibiMenu.sides[Math.floor(Math.random() * bibiMenu.sides.length)]);
}

function assessMeal() {
  for (var i = 0; i < order.length; i++) {
    currentCalories += parseInt(Object.values(order[i]));
  }
  return currentCalories;
}

addBase();
addProtein();
addHotTopping();
addColdTopping();
addSauce();
addSide();

//allowance
//1 base
//1 or 2 proteins
//1 2 or 3 hot toppings
//1-9 cold toppings
//1-2 sauces
//1-10 sides

console.log(order);
console.log(assessMeal());
