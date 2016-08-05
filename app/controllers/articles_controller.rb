class ArticlesController < ApplicationController

  def timeline
    if current_user == nil
      redirect_to '/'
    else
      @all_articles = get_all_articles

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
      :favicon => favicon
    )
    @article.save

    @ratings = Rating.new(
      :user_id => current_user.id,
      :article_id => @article.id,
      :like => 0,
      :unlike => 0
    )
    @ratings.save

    redirect_to("/profile/#{current_user.id}")
  end

  def delete_rating
    byebug
  end

  def post_rating

  end

  private

  def get_all_articles

    Article.all
      .includes(:user, :ratings)
      .sort { |x,y| y["created_at"] <=> x["created_at"] }
      .as_json(include: {
        user: { only: [:name, :surname] },
        ratings: {only: [:like, :unlike]}
        })
      .map { |article|
        rating_by_user =
          Article.find_by(id: article['id'])
            .ratings
            .find_by(id: current_user.id)

        if rating_by_user.present?
          vote = 'like' if rating_by_user.like > 0
          vote = 'unlike' if rating_by_user.unlike > 0
        end

        article.merge(vote: vote)
      }

  end

end
