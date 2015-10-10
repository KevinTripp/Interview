class Question < ActiveRecord::Base
  attr_accessible :question

  validates_presence_of :question, :message => "Your question can't be blank!"

  has_many :question_tag
  has_many :tags , :through => :question_tag
  
  accepts_nested_attributes_for :tags, :question_tag
end
