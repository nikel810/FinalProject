class ArticlesController < ApplicationController

  def timeline
    if current_user == nil
      redirect_to '/'
    else
      render :timeline
    end
  end

end
