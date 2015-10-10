class QuestionController < ApplicationController
	def new
		@question = Question.new
	end
	def create	
		@question = Question.new()
		@question.question = params[:question][:question]
		
		tags = params[:question][:tag][:tag].split(',')
		
		tags.each do |t|
			puts "tag1: #{t}"
			 tag = Tag.find_by_tag(t)
			if tag
				
				puts "already there"
			else
				tag = @question.tags.build
				tag.tag = t
			end

		end
		
		if @question.save
			flash[:success] = "Question was successfully created."
			redirect_to action: 'show'
		else
			flash[:error] = "Question could not be saved!"
			redirect_to action: 'show'
		end
	end
	def show
		@questions = Question.order('id DESC').all
	end
	def questions
		@questions = Question.order('id DESC').all
		render json: @questions
	end
	def questions_by_tag
		@questions = Question.find_by_tag()
	end
end
