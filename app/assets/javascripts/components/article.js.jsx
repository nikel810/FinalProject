var Article = React.createClass({
  render: function(){

    return(
      <div className="article-padding-background">
        <div className="article-box">
          <div className="article-heading">
            <div className="article-img-container">
              <img className="article-img" src={this.props.img} alt="thumbnail" />
            </div>
            <div className="article-title">
              {this.props.title}
            </div>
          </div>
          <div className="article-description">
            {this.props.description}
          </div>
        </div>
      </div>
    );

  }
});
