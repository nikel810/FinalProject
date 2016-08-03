
var ThumbsUp  = React.createClass({
  getInitialState: function() {
    return {
      likes: this.props.likes,
      dislikes: 0
      // clicked: false
    };
  },

  onClickLike: function(e){

    e.preventDefault()
    var counter = this.state.likes
    counter = counter + 1
    this.setState({
      likes: counter
    })
  },

  updateLikes: function(){
    // ajax call updating the likes
    // this.state
  },

  render: function() {
    return (
      <div className="article-reaction">
        <i className="glyphicon glyphicon-thumbs-up thumbs-up" onClick={this.onClickLike} aria-hidden="true"></i>
        <span className="thumbs-up-count">{this.state.likes}</span>
        <i className="glyphicon glyphicon-thumbs-down thumbs-down" aria-hidden="true"></i>
        <span className="thumbs-down-count">00</span>
      </div>
    );
  }

});
