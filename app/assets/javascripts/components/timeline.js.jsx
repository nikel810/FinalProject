var Timeline = React.createClass({
  getDefaultProps: function () {
    return { articles: [] };
  },

  render: function () {

    console.log(this.props);
    return (
      <div>
        {this.props.articles.map(function (article) {
          return (
            <TimelineArticles
              key={article.id}
              url={article.url}
              title={article.title}
              description={article.description}
              img={article.img}
              favicon={article.favicon}
              name={article.user.name}
            />
          )
        })}
      </div>
    );

  }
})
