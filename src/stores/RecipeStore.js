var React = require('react');
var EventEmitter = require("../eventemitter");
var RecipeboxDispatcher = require('../dispatcher/RecipeDispatcher');
var savedRecipes = [
   {
      ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"],
      title: "Pumpkin Pie"
  },
   {
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"],
      title: "Spaghetti"
  },
   {
      ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"],
      title: "Onion Pie"
  }
];

var RecipeboxStore = new EventEmitter();

RecipeboxStore.getRecipes = function(){
  return savedRecipes;
};

RecipeboxStore.addRecipe = function(newTitle, newIngred){
  savedRecipes.push({ingredients:newIngred, title:newTitle});
};

RecipeboxStore.deleteRecipe= function(){

};

RecipeboxStore.editRecipe = function(){

};


RecipeboxDispatcher.register(function(act){
  console.log("Received an action");
  console.log(act);
});
//act is an object

module.exports = RecipeboxStore;
