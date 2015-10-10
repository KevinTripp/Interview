class TagController < ApplicationController
	def new
		@tag = Tag.new
	end
	def create
		@tag = Tag.new(params[:question])
		@tag.save
	end
	def get_all_tags
		@tags = Tag.all
		render json: @tags
	end
end
