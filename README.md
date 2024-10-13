# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
==============================================================================================================================================================

AirBnB Clone

command: rails new airbnb -T -d postgresql

Re-Visited MVC Architecture 

rails g controller home index

tailwindcss integration learning and implementation through: https://tailwindcss.com/docs/guides/ruby-on-rails

added favicon

added navbar and customization according to requirement

Added Devise gem for authentication

generated model user, devise views

adding stimulus controllers, adding data controller, data action, target

added el-transition to add some action and animation to a button in the header

using importmap for npm transition

ran ./bin/importmap  --> list all importmap actions

pinning el-transtion by using ./bin/importmap pin

added devise actions like, signup, signin, signout on home page and make svg of airbnb clickable to navigate to the root path

updated view code for devise sign up page

added controller check in application.html in layout folder to restrict navbar display in signin and signup page

updated view code for devise sign in page   

creating properties list on homepage with dummy data by using Faker gem

added border to navbar header

added look alike homepage view on index page