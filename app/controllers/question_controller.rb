class QuestionController < ApplicationController
	respond_to :html, :js

	def new
		@question = Question.new
	end

	def create
		@question = Question.new()
		@question.question = params[:question][:question]

		tags = params[:question][:tag][:tag].split(',')

		tags.each do |t|
			t = t.strip
			puts "tag1: #{t}"
			tag = Tag.find_by_tag(t)
			if tag
				puts "already there #{tag.id}"
				new_tag = @question.question_tag.build
				new_tag.tag_id = tag.id
			else
				tag = @question.tags.build
				tag.tag = t
			end
		end

		respond_to do |format|
			if @question.save
				# format.html {redirect_to 'show', notice: "Question was successfully created."}
				format.js{}
			else
				flash[:error] = "Question could not be saved!"
				redirect_to action: 'show'
			end
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
