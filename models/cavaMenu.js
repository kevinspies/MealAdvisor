const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cavaMenuSchema = new Schema({
  base: {
    salad: { type: Boolean, default: 18, required: false },
    grain: { type: Boolean, default: 247, required: false },
    greensAndGrains: { type: Boolean, default: 132, required: false },
    lentil: { type: Boolean, default: 80, required: false },
    pita: { type: Boolean, default: 230, required: false },
    miniPita: { type: Boolean, default: 110, required: false },
    soup: { type: Boolean, default: 160, required: false }
  },
  dips: {
    eggplant: { type: Boolean, default: 15, required: false },
    redPepper: { type: Boolean, default: 25, required: false },
    tzatziki: { type: Boolean, default: 25, required: false },
    crazyFeta: { type: Boolean, default: 60, required: false },
    hummus: { type: Boolean, default: 30, required: false },
    harissa: { type: Boolean, default: 60, required: false }
  }
});

const cavaMenu = mongoose.model("cavaMenu", cavaMenuSchema);
module.exports = cavaMenu;
