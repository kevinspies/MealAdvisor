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

const remainingCalories = 1000;

function generateMeal() {
  var order = {};
  var currentCalories = 0;
  //start with a base
  var randBase = Math.floor(Math.random() * 2); //returns 0 or 1, perfect for index's of an array of length 2!
  order.base = bibiMenu.base[randBase];
  console.log(order);
  console.log(currentCalories);
  console.log(remainingCalories);
  currentCalories += order.base[randBase];
  console.log("current calories: " + currentCalories);
  console.log("type of currentCalories: " + typeof currentCalories);
  console.log("type of random index in order: " + typeof order.base[0]); //undefined
  if (currentCalories < remainingCalories) {
    //continue with a protein
    var randProtein = Math.floor(Math.random() * 3); //3 proteins
    order.protein = bibiMenu.protein[randProtein];
    console.log(order);
    if (currentCalories < remainingCalories) {
      //continue with a hotTopping
      var randHotTopping = Math.floor(Math.random() * 3); //3 hot toppings
      order.hotToppings = bibiMenu.hotToppings[randHotTopping];
      console.log(order);
    } else return order;
  } else return order;
  return order;
  //check - if calories of order < remainingCalories
}

generateMeal();
