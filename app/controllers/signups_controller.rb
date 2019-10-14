class SignupsController < ApplicationController

	def new
	end

	def create
	  	@signup = Signup.new(signup_params)
	 
		@signup.save
		redirect_to root_path
	end

	private
	    def signup_params
	        params.require(:signup).permit(:firstname, :email)
	    end

end
