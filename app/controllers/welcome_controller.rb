class WelcomeController < ApplicationController
  def index
    @var = Var.new
  end
end
