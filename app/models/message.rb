class Message
  include Aws::Record
  include ActiveModel::Validations
  
  datetime_attr   :created_at
  datetime_attr   :updated_at
  string_attr    :id, hash_key: true
  string_attr    :user_id
  string_attr     :name
  string_attr     :body
  # boolean_attr    :moderation, default_value: false 


  validates_presence_of :name, :body
  validates_length_of :body,  within: 1..5000
end
