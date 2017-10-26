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


```bash 
rails new . --api --database=postgresql
```

Overwrite database.yml with what we have.

https://rubyplus.com/articles/4311-Securing-an-API-in-Rails-5-using-Token-Based-Authentication
```bash
rails g model user name token email password_digest
```

