class HomeController < ApplicationController
  def index
    #@users = User.all
    render "pages/index"
  end
end
