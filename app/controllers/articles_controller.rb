class ArticlesController < ApplicationController

  def timeline
    if current_user == nil
      redirect_to '/'
    else
      @all_articles = Article
        .all
        .includes(:user)
        .sort { |x, y| y["created_at"] <=> x["created_at"] }
        .as_json(include: { user: { only: [:name] } })

      render :timeline
    end
  end

  def create
    article_url = current_user.articles.new(
      :url => params[:article_url])

    thumbnail = LinkThumbnailer.generate(article_url.url)
    url = thumbnail.url
    title = thumbnail.title
    description = thumbnail.description
    img = thumbnail.images[0].src
    favicon = thumbnail.favicon

    @article = current_user.articles.new(
      :url => url,
      :title => title,
      :description => description,
      :img => img,
      :favicon => favicon)

    @article.save

    redirect_to("/profile/#{current_user.id}")
  end


end
