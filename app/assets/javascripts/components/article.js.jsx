var Article = React.createClass({
  render: function(){

    return(
      <div className="article-padding-background">
        <div className="article-box">
          <div className="article-heading">
            <div className="article-img-container">
              <a href={this.props.url}>
                <img href={this.props.url} className="article-img" src={this.props.img} alt="thumbnail" />
              </a>
            </div>
            <div className="article-title">
              <a className="react-links" href={this.props.url}>{this.props.title}</a>
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
