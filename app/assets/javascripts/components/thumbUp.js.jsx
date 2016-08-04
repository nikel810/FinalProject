// var classNames = require('classnames');

var Thumbs  = React.createClass ({
  getInitialState: function () {
    return {
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      clickedLike: false,
      clickedDislike: false,
    };
  },

  onClickLike: function (e){

    if (this.state.clickedLike == false) {
      this.setState ({
        clickedLike: true
      })
      if (this.state.clickedDislike == true) {
        this.setState ({
          clickedDislike: false
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
        clickedDislike: true
      })
      if (this.state.clickedLike == true) {
        this.setState({
          clickedLike: false
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

  highlightClickedRating: function () {
    if (this.state.clickedLike == true) {
      console.log('test');
      $('thumbs-up').toggleClass('clicked');
      $('thumbs-up-count').toggleClass('clicked');
    }
    if (this.state.clickedDislike == true) {
      $('thumbs-down').toggleClass('clicked');
      $('thumbs-down-count').toggleClass('clicked');
    }
  },

  updateRatings: function (){
    // ajax call updating the likes
    // this.state
  },

  render: function () {

    // var styleNameActive = classNames({
    //   active: this.state.clickedLike
    // });

    return (
      <div className="article-reaction">
        <i className="glyphicon glyphicon-thumbs-up thumbs-up" onClick={this.onClickLike} aria-hidden="true"></i>
        <span className="thumbs-up-count">{this.state.likes}</span>
        <i className="glyphicon glyphicon-thumbs-down thumbs-down" onClick={this.onClickDislike} aria-hidden="true"></i>
        <span className="thumbs-down-count">{this.state.dislikes}</span>
      </div>
    );
  }

});
