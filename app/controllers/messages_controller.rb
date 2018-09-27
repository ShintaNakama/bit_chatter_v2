class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]
  def index
    # messages = Massage.all
    dynamodb = Aws::DynamoDB::Client.new
    messages = dynamodb.scan(table_name: "Message")
    p "test"
    p messages
    mjson = messages.items.each do |message|
              puts message
            end
    render json: mjson.sort_by { |message| message['created_at'] }
  end

  def create
    # dynamodb = Aws::DynamoDB::Client.new
    # dynamodb.put_item(message_params, created_at: Time.new)
    message = Message.new(message_params)
    p message
    message.save!
  end

  def show
    render json: @message
  end

  def update
    @message.body = message_params["body"]
    @message.updated_at = message_params["updated_at"]
    @message.save!
  end

  def destroy
    @message.delete!
  end

  private

  def set_message
    @message = Message.find(id: params[:id])
  end

  def message_params
    params.require(:message).permit(:id, :name, :body, :created_at, :updated_at)
  end
end
