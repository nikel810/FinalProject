var ArticleList = React.createClass({
  getDefaultProps: function () {
    return { articles: [] };
  },

  render: function () {

    return (
      <div>
        {this.props.articles.map(function (article) {
          return
          <Article
            key={article.id}
            url={article.url}
            title={article.title}
            description={article.description}
            img={article.img}
            favicon={article.favicon}
            likes={article.ratings[0].like}
            dislikes={article.ratings[0].unlike}
            vote={article.vote}
          />
        })}
      </div>
    );

  }
})
