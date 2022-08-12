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

1. After setting up the social-mongo-express-node-api and environment to localhost. 
2. Open the Postman or any API Client Tester.
3. Create a request set the method and API's URL.
(see Features section EX: method POST - `http://localhost:5000/api/users/login` to login)

### How to Create and Login Account?
Using the POST method, add username and password field and it's value to send a text data request to the server using x-www-form-urlencoded.

#### Sample Input
```
    Username : User001
    Password : password123
```
#### Sample Output
```javascript
{
    "_id": "62f5e31da13697d6e8b3f2ed",
    "username": "User001",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6I"
}
```

> Reminder : the Get User Account and Tweets API's are using the protected routes please don't forget to set the Bearer Token Value to Autorization.

> How to set Bearer Token in Postman? : Get the "token" value from return object after logging in (see sample output), then click the Autorization Tab in Postman request, click the Type and select the Bearer Token. Now you can put the "token" value in input field of Bearer Token.

### How get the current Account?
Make a request using GET method then send.

### How to create Tweet?
Make a request Using the POST method, add the "content" field and it's value to send a text data request to the server using x-www-form-urlencoded.

### How to edit Tweet?
Using the PUT method add the tweet ID in the request API URL `http://localhost:5000/api/tweets/:id` in request, add the "content" field and it's new value to send a text data request to the server using x-www-form-urlencoded.

### How to delete Tweet?
Using the DELETE method add the tweet ID in the request API URL `http://localhost:5000/api/tweets/:id`.

### How get the current User all tweet?
Make a request using GET method then send.


## License
The MIT License