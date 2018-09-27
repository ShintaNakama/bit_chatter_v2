# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  - ruby 2.4.1p111

* System dependencies
  - dynamoDB
  - Cognito for AWS Amplify
* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* 起動方法
  localのdynamoDBを起動 localhost:8000
  java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

  rails s ... railsAPIサーバ起動 localhost:3000
  yarn start ... frontendディレクトリにて localhost:4000