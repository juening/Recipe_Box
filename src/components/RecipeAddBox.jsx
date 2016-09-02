var React = require('react');

var RecipeAddBox = React.createClass({
  getInitialState: function(){
    return {
      title:"",
      value:""
    }
  },

  _addRecipe: function(){
    this.props.onAddRecipe(this.state.title, this.state.value);
  },

  _onTitleChange:function(event){
    this.setState({title: event.target.value});
  },

  _onValueChange: function(event){
    this.setState({value:event.target.value});
  },

  render: function(){
    return (
      <div>
        <input type="text" className="col-sm-6" onChange={this._onTitleChange} />
        <textarea id="addRecipe" className="col-sm-6" onChange={this._onValueChange}>
        </textarea>
        &nbsp;
        <input type="button" className="btn btn-primary" value="Add Recipe" onClick={this._addRecipe} />
      </div>
    );
  }
});

module.exports = RecipeAddBox;
