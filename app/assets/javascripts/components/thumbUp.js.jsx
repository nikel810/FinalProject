// var classNames = require('classnames');

var Thumbs  = React.createClass ({
  getInitialState: function () {
    return {
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      clickedLike: false,
      clickedDislike: false,
      activeLike: '',
      activeDislike: ''
    };
  },

  onClickLike: function (e){

    if (this.state.clickedLike == false) {
      this.setState ({
        clickedLike: true,
        activeLike: ' activeLike'
      })
      if (this.state.clickedDislike == true) {
        this.setState ({
          clickedDislike: false,
          activeDislike: ''
        })
        var counter = this.state.dislikes
        counter = counter -1
        this.setState ({
          dislikes: counter
        })
      }
      e.preventDefault ()
      var counter = this.state.likes
      counter = counter + 1
      this.setState ({
        likes: counter
      })
    }
  },

  onClickDislike: function (e) {
    if (this.state.clickedDislike == false) {
      this.setState ({
        clickedDislike: true,
        activeDislike: ' activeDislike'
      })
      if (this.state.clickedLike == true) {
        this.setState({
          clickedLike: false,
          activeLike: ''
        })
        var counter = this.state.likes
        counter = counter -1
        this.setState ({
          likes: counter
        })
      }
      e.preventDefault ()
      var counter = this.state.dislikes
      counter = counter + 1
      this.setState ({
        dislikes: counter
      })
    }

  },

  updateRatings: function (){
    // ajax call updating the likes
    // this.state
  },

  render: function () {

    return (
      <div className="article-reaction">
        <i className={"glyphicon glyphicon-thumbs-up thumbs-up" + this.state.activeLike} onClick={this.onClickLike} aria-hidden="true"></i>
        <span className={"thumbs-up-count" + this.state.activeLike}>{this.state.likes}</span>
        <i className={"glyphicon glyphicon-thumbs-down thumbs-down" + this.state.activeDislike} onClick={this.onClickDislike} aria-hidden="true"></i>
        <span className={"thumbs-down-count" + this.state.activeDislike}>{this.state.dislikes}</span>
      </div>
    );
  }

});
