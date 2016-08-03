
var Thumbs  = React.createClass({
  getInitialState: function() {
    return {
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      clicked: false
    };
  },

  onClickLike: function(e){

    if (this.state.clicked == false) {
      this.setState({
        clicked: true
      })
      e.preventDefault()
      var counter = this.state.likes
      counter = counter + 1
      this.setState({
        likes: counter
      })
    } else {
      console.log('test');
    }
  },

  onClickDislike: function (e) {
    if (this.state.clicked == false) {
      this.setState({
        clicked: true
      });
      e.preventDefault()
      var counter = this.state.dislikes
      counter = counter + 1
      this.setState({
        dislikes: counter
      })
    } 

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
        <i className="glyphicon glyphicon-thumbs-down thumbs-down" onClick={this.onClickDislike} aria-hidden="true"></i>
        <span className="thumbs-down-count">{this.state.unlikes}</span>
      </div>
    );
  }

});
