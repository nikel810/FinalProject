var Article = React.createClass({
  render: function(){

    return(
      <div className="article-box">
        <div className="article-title">
          {this.props.title}
        </div>
        <div className="article-description">
          {this.props.description}
        </div>
      </div>
    );

  }
});
