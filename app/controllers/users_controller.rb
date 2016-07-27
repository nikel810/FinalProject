class UsersController < ApplicationController

  def home
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
    if current_user == nil
      redirect_to '/'
    else
      render :profile
    end
  end

  private

  def user_params
     params.require(:user).permit(
     :name, :email,
     :password, :password_confirmation)
  end

end
