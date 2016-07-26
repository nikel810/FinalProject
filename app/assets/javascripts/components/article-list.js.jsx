var ArticleList = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.articles.map(function (article) {
          return <Article title={article.title} description={article.description} />
        })}
      </div>
    )
  }
})


// <%= react_component('ArticleList', articles: @articles) %>
