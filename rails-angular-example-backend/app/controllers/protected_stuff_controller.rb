class ProtectedStuffController < ApiController
  before_action :require_login

  def index
    render json: { protected_stuff: 0.upto(9) { |i| "This is protected #{ i }!" } }
  end
end
