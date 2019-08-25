const bibiMenu = {
  base: [{ purpleRice: 280 }, { japchaeNoodles: 213 }],
  protein: [{ spicyChicken: 169 }, { sweetChicken: 171 }, { Beef: 180 }],
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
  sauce: [
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
var randBase = Math.floor(Math.random() * 2); //2 bases
var randProtein = Math.floor(Math.random() * 3); //3 proteins
var randHotTopping = Math.floor(Math.random() * 3); //3 hot toppings
var randColdTopping = Math.floor(Math.random() * 9); //9 cold toppings etc
var randSauce = Math.floor(Math.random() * 6);
var randSides = Math.floor(Math.random() * 2);

function addBase() {
  order.push(bibiMenu.base[Math.floor(Math.random() * 2)]);
}

addBase();
addBase();
addBase();
console.log(order);
