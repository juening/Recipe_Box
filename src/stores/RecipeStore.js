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

RecipeboxStore.emitChange = function(){
  this.emit("change");
};

RecipeboxStore.addChangeListener = function(listener){
  this.on("change", listener);
};

RecipeboxStore.getRecipes = function(){
  return savedRecipes;
};

RecipeboxStore.addRecipe = function(newTitle, newIngred){
  savedRecipes.push({ingredients:newIngred, title:newTitle});
  this.emitChange();
};

RecipeboxStore.deleteRecipe= function(id){
  savedRecipes.splice(id, 1);
  this.emitChange();
};

RecipeboxStore.editRecipe = function(){

};


RecipeboxDispatcher.register(function(act){
  switch(act.actionType){
    case "RECIPE_ADDED": {
      console.log("Recipe added!");
      RecipeboxStore.addRecipe(act.newTitle, act.newIngred);
      break;
    }
    case "RECIPE_DELETED": {
      console.log("Recipe deleted!");
      RecipeboxStore.deleteRecipe(act.id);
      break;
    }
  }
});
//act is an object

module.exports = RecipeboxStore;
