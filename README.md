# Social Mongo Express Node API

> SOCIAL API using MongoDB, Express and Node where User can register, login and create a tweet from API

## Features
- Register Account:  method : `POST` - `http://localhost:5000/api/users/`
- Login Account: method : `POST` - `http://localhost:5000/api/users/login`
- Get User Account: method : `GET` - `http://localhost:5000/api/users/account`

- Get User Tweet: method : `GET` - `http://localhost:5000/api/tweets/`
- Make Tweet: method : `POST` - `http://localhost:5000/api/tweets/`
- Edit Tweet: method : `PUT` - `http://localhost:5000/api/tweets/:id`
- Delete Tweet: method : `DELETE` - `http://localhost:5000/api/tweets/:id`

## Quick Start
### Env Variables

1. Create your Db using MongoDB and get the connection
2. Create a .env file in the root and add the following with MongoDB connection

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

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## License
The MIT License