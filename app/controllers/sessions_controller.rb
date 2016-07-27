class SessionsController < ApplicationController

  def create_session
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to '/timeline'
    else
      redirect_to '/'
    end
  end

  def destroy_session
    session.clear
    redirect_to '/'
  end

end
