// var classNames = require('classnames');

var Thumbs  = React.createClass ({

  getInitialState: function () {
    return {
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      clickedLike: this.props.vote === 'like',
      clickedDislike: this.props.vote === 'unlike',
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
        this.updateRating()
      }
      var counter = this.state.likes
      counter = counter + 1
      this.setState ({
        likes: counter
      })
      this.updateRating()
    }
    if (this.state.activeLike == ' activeLike') {
      this.setState ({
        clickedLike: false,
        activeLike: ''
      })
      var counter = this.state.likes
      counter = counter -1
      this.setState ({
        likes: counter
      })
      this.updateRating()
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
        this.updateRating()
      }
      var counter = this.state.dislikes
      counter = counter + 1
      this.setState ({
        dislikes: counter
      })
      this.updateRating()
    }
    if (this.state.activeDislike == ' activeDislike') {
      this.setState ({
        clickedDislike: false,
        activeDislike: ''
      })
      var counter = this.state.dislikes
      counter = counter -1
      this.setState ({
        dislikes: counter
      })
      this.updateRating()
    }

  },

  updateRating: function (){
    var verb = this.state.clickedLike ? 'delete' : 'post'

    $.ajax({
       type: verb,
       url: "/article/:id/rating",
       success: saveRating,
       error: noSaveRating
    })

    function saveRating (response) {
      console.log('in the success like');
      console.log(response);
    }
    function noSaveRating (error) {
      console.log('in the error like');
    }

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
