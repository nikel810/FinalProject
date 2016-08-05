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
              name={article.user.name}
              surname={article.user.surname}
              img={article.img}
              favicon={article.favicon}
              likes={article.ratings[0].like}
              dislikes={article.ratings[0].unlike}
              vote={article.vote}
            />
          )
        })}
      </div>
    );

  }
})
