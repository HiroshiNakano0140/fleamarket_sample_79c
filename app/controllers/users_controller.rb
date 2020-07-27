class UsersController < ApplicationController
  def show
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :last_name, :first_name, :last_name_kana, :first_name_kana, :birthday, :introduction, :email)
  end
end
