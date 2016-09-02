var React = require('react');
var RecipeList = require('./RecipeList.jsx');
var RecipeAddBox = require('./RecipeAddBox.jsx');
var RecipeboxDispatcher = require('../dispatcher/RecipeDispatcher');
var RecipeboxStore = require('../stores/RecipeStore');

var Recipebox = React.createClass({
  getInitialState: function(){
    return {allRecipes: RecipeboxStore.getRecipes() };
  },

  _onAddRecipe: function(title, ingred){
    RecipeboxDispatcher.dispatch({
      actionType: "RECIPE_ADDED",
      newTitle:title,
      newIngred:ingred
    });
  },
  render: function(){
    return (
      <div className="container">
        <RecipeList allRecipes={this.state.allRecipes} />
        <hr />
        <RecipeAddBox onAddRecipe={this._onAddRecipe} />
      </div>
    );
  }
});

module.exports = Recipebox;
