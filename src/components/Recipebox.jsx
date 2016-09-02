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

  componentDidMount: function(){
    RecipeboxStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    RecipeboxStore.removeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({allRecipes: RecipeboxStore.getRecipes()});
  },

  render: function(){
    return (
      <div className="container">
        <RecipeList allRecipes={this.state.allRecipes} onDelete={this._onDelete} onEdit={this._onEdit} />
        <hr />
        <RecipeAddBox onAddRecipe={this._onAddRecipe} />
      </div>
    );
  }
});

module.exports = Recipebox;
