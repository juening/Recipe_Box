var React = require('react');
var RecipeList = require('./RecipeList.jsx');
var RecipeAddBox = require('./RecipeAddBox.jsx');

var Recipebox = React.createClass({
  getInitialState: function(){
    return {allRecipes:
      [
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
      ]};
  },
  render: function(){
    return (
      <div className="container">
        <RecipeList allRecipes={this.state.allRecipes} />
        <hr />
        <RecipeAddBox />
      </div>
    );
  }
});

module.exports = Recipebox;
