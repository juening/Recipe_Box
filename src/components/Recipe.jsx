var React = require('react');

var Recipe = React.createClass({
  // propTypes: {
  //   recipe: React.PropTypes.object.isRequired,
  //   onDelete: React.PropTypes.func.isRequired,
  //   onEdit: React.PropTypes.func.isRequired
  // },

  getInitialState: function(){
    return {showModal: false};
  },

  editRecipe: function(){
    this.props._onEdit(this.state.title, this.state.ingred);
  },

  deleteRecipe: function(){
    this.props._onDelete(this.props.id);
  },
  render:function(){
    var recipe=this.props.recipe;
    var id = this.props.id;
    var ingredients = this.props.recipe.ingredients.join(", ");
    return (
      <div className="panel panel-default"  >
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" href={"#collapse"+ id} >{recipe.title}</a>
          </h4>
        </div>
        <div id={"collapse"+id} className="panel-collapse collapse">
          <div className="panel-body">{ingredients}</div>
          <div className="panel-footer">
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#recipeCard">Edit Recipe</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteRecipe} >Delete Recipe</button>
          </div>
        </div>
        <div className="modal fade" id="recipeCard"  role="dialog" >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" >&times;</button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>Ingredients</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-sm">Save Recipe</button>
                <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Recipe;
