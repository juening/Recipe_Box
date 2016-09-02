var React = require('react');
var Recipe = require('./Recipe.jsx');
var RecipeboxDispatcher = require("../dispatcher/RecipeDispatcher");

var RecipeList = React.createClass({

  _onDelete: function(id){
    RecipeboxDispatcher.dispatch({
      actionType: "RECIPE_DELETED",
      id:id
    });
  },

  _onEdit: function(title, ingred){
    RecipeboxDispatcher.dispatch({
      actionType: "RECIPE_EDITED",
      newTitle:title,
      newIngred:ingred
    });
  },

  render: function(){
    var allRecipes = this.props.allRecipes;
    var recipes = allRecipes.map(function(recipe, index){
      return (
        <Recipe  key={index} id= {index} recipe={recipe} onEdit={this._onEdit} onDelete={this._onDelete} />
      );
    });
    return (
      <div className="panel-group">
        { recipes }
      </div>
    )
  }
});

module.exports = RecipeList;
