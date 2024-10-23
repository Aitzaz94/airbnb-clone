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

generated property model migration

property model in schema

added validations to property model

seed data for property model

added property model logic for index

calling all entered properties to display on index

added faker gem

updated seed file according to Faker Gem

added money-rails gem, its practical utilization in the code

added images to each listed property

added swiper js

added reviews to a property by users whereas a property has many reviews given by many users while a review blongs to a propert, user

added counter cache, avg rating

added swiper for images on index

added wishlist icon, swiper arrows

JS controller for toggling swiper icon/button

added precompile rake command for assets

added wishlist view/action

wishlist migration created, references to user and property

wishlist table added with proper foreign keys/indexes

wishlist model created for user and property

added wishlist many-many association

added wishlist api routes

wishlist API module, controller added for API actions - create, delete

change through-relation to plural, added wishlisted user check method to property model

change through-relation to plural

change through-relation to plural

adding/ removing wishlist from the table using javascript controller

assigning respective ids on home index erb

wishlist js/api controller code correction

created migration for reservations

migrated the table with index added for user, property, checkin/ checkout date

added validation for checkin/checkout date in reservation model

added many-many relationship with redervations using through for reservatioins by individual source of user and property

added scoped queries for upcoming/ current reservations

method in property model, for evaluating reservation dates cases

updated date display for availability of property on index

added properties route/ resources in route.rb

created properties controller, for show method implementation

added link_to for each property in the loop using accurate path for show

added show erb with dummy code

modified property show page with share/ save button, few changes according to view on airbnb

updated wishlist-js controller for index page and individual property page by adding/managing targets