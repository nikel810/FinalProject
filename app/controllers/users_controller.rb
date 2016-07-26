class UsersController < ApplicationController

  def home
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to '/timeline'
    else
      redirect_to '/'
    end
  end

  def profile
  end

  private

  def user_params
     params.require(:user).permit(
     :name, :email,
     :password, :password_confirmation)
  end

end
