# simple-electron-mern-app


Simple Login Funtionality website build using MERN stack.


## Built using

FRONT END
- [ReactJS](https://reactjs.org/) - Frontend framework
- [Context API w/ hooks](https://reactjs.org/docs/context.html) - For state of user, toast notifs, theme etc.
- [React Router Dom](https://reactrouter.com/) - For routing & navigation
- [axios](https://axios-http.com/) - For fetching data from API

BACKEND

- [NodeJS](https://nodejs.org/) - back-end JavaScript runtime environment
- [Express](https://expressjs.com/) - back end web application framework
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Features

- Login and SignUP functionality
- Password Encryption
- Login using token 
- After login logs are stored to the database
- Accounts have unique email address


## Working

- You need a token to access the homepage route, for token you need to create account or login if alredy have an account.
- without token you will be automaticlly navigated on create account route, click on login insted if alredy have an account.
- fill all the fields to successfully create the account.
- your credentials will be stored on the dashbord and password will get encrypted using bcrypt
- after that a token will be generated using jsonwebtoken and will be recieved at the fronted as a response from api.
- this token then get stored in cookies(local storage).
- after that you will be navigated to welcome page.
- once you get login the logs are generated and stored on the database.



