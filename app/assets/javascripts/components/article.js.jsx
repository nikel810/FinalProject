var Article = React.createClass({
  render: function(){

    return(
      <div className="article-padding-background">
        <div className="article-box">

          <div className="article-heading">
            <div className="article-img-container">
              <a href={this.props.url}>
                <img href={this.props.url} className="article-img" target="_blank" src={this.props.img} alt="thumbnail" />
              </a>
            </div>
            <div className="article-title">
              <a className="react-links" target="_blank" href={this.props.url}>{this.props.title}</a>
            </div>
          </div>

          <div className="article-description">
            {this.props.description}
          </div>

          <div className="article-reaction">
            <span className="glyphicon glyphicon-thumbs-up thumbs-up" aria-hidden="true"></span>
            <span className="thumbs-up-count">00</span>
            <span className="glyphicon glyphicon-thumbs-down thumbs-down" aria-hidden="true"></span>
            <span className="thumbs-down-count">00</span>
          </div>

        </div>
      </div>
    );

  }
});
