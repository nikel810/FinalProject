class UsersController < ApplicationController

  def home
    if current_user
      redirect_to '/timeline'
    else
      render :home
    end
  end

  def create_user
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/timeline'
    else
      redirect_to '/'
    end
  end

  def profile
    if current_user
      @articles = current_user.articles.sort { |x, y| y["created_at"] <=> x["created_at"] }

      render action: 'profile', id: current_user.id
    else
      render :home
    end

  end

  private

  def user_params
     params.require(:user).permit(
     :name, :surname, :email,
     :password, :password_confirmation)
  end

end
