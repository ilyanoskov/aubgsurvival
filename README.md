# AUBG Survival Game

This is a repository for AUBG Survival Game. This project aims to completely rewrite the web application using modern full stack technologies.
In the future I plan to write React Native applications using this codebase.
The client is hosted on Github Pages, using gh-pages branch. The server is hosted on Heroku.

![](https://github.com/ilyanoskov/aubgsurvival/blob/master/poster-survival2.jpg?raw=true)

# Technology Stack

### NodeJS + Express.js
### React + Redux
### MongoDB

# Installation
```git clone https://github.com/ilyanoskov/aubgsurvival ```  

```cd aubgsurvival/client ```  

```npm install```  

```cd aubgsurvival/backend ```  

```npm install```  

# Development

## Setup
To run this application locally you will need:
* a running mongoDB instance (I run mine at http://localhost:27017/aubsurvival)
* environment variables: 

in `.env` file in frontend folder:
```
REACT_APP_SERVER="localhost:3001"
```

in `.env` file in backend folder:
```
MONGODB_URI="http://localhost:27017/aubsurvival"
APP_SECRET="yourappsecret"
```
## Running the application
Run ```nodemon backend/server.js```
and then do ```npm start``` in client

# Deployment

```npm install -g gh-pages```  
obtain the administrator rights from me and the just do ```npm run deploy``` in both client and backend folders
