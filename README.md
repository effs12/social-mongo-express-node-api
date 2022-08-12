# Social Mongo Express Node API

> SOCIAL API using MongoDB, Express and Node where User can register, login and create a tweet from API

## Features

### USER API
- Register Account:  method : `POST` - `http://localhost:5000/api/users/`
- Login Account: method : `POST` - `http://localhost:5000/api/users/login`
- Get User Account: method : `GET` - `http://localhost:5000/api/users/account`

### TWEET API
- Get User Tweet: method : `GET` - `http://localhost:5000/api/tweets/`
- Make Tweet: method : `POST` - `http://localhost:5000/api/tweets/`
- Edit Tweet: method : `PUT` - `http://localhost:5000/api/tweets/:id`
- Delete Tweet: method : `DELETE` - `http://localhost:5000/api/tweets/:id`

## Quick Start
### Env Variables

1. Create your database using MongoDB and copy the connection string 
2. Create a .env file in the root and add the following with MongoDB connections

```
# ENVIRONMENT SETUP
NODE_ENV = development

# SERVER PORT
PORT = 5000

# MONGODB URI 
MONGO_URI = YOUR_MONGO_URI

#JWT SECRET KEY RANDOM
JWT_SECRET = SOME_RANDOM_KEY

# JWT Token Duration
JWT_EXPIRES_IN = '30d'
```

### Install Dependencies and Run

```javascript
// Install package and dependencies 
yarn

// Run server
yarn server

// Server runs on http://localhost:5000
```

## How to Test?
> Using Postman or any API client Tester alike 

1. After setting up the api to localhost. 
2. Open the Postman or any API Client Tester.
3. Create a request by accesing the API URL REQUEST from Features section (EX : `http://localhost:5000/api/users/` ).

### How to Create and Login Account?
> Using the POST method, add username and password and it's value to send a text data request to the server using x-www-form-urlencoded.

#### Sample Input
```
    Username : User001
    Password : password123
```

#### Output
```javascript
{
    "_id": "62f5e31da13697d6e8b3f2ed",
    "username": "User001",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjVlMzFkYTEzNjk3ZDZlOGIzZjJlZCIsImlhdCI6MTY2MDI4MjEwNiwiZXhwIjoxNjYyODc0MTA2fQ.5V05VWd71aTIGxlxBf"
}
```

### How get the current Account?
> Get the token value from return object after logging In, then set it as Bearer Token value.

## License
The MIT License