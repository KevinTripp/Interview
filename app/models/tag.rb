class Tag < ActiveRecord::Base
  attr_accessible :tag

  validates_presence_of :tag, :message => "You need to enter a tag name!"
  
  has_many :question_tags
  has_many :questions, :through => :question_tags

  accepts_nested_attributes_for :questions
end
