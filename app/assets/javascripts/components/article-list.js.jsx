var ArticleList = React.createClass({
  getDefaultProps: function () {
    return { articles: [] };
  },

  render: function () {

    console.log(this.props);
    return (
      <div>
        {this.props.articles.map(function (article) {
          return <Article key={article.id} title={article.title} description={article.description} />
        })}
      </div>
    );

  }
})
