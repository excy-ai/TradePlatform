# Item-Trade App
##Functional:
1) Reg/Auth
2) Adding items to inventory
3) Item exchanging
4) View items submitted for exchange by other users
5) Creating an exchange request
6) View a list of outgoing and incoming requests for exchange
7) Exchange confirmation

#API:
1) host:3000/api/auth/signup/ - do POST to register
fields: email, password, firstName, lastName
2) host:3000/api/auth/signin/ - do POST to auth
fields: email, password
3) host:3000/api/auth/signout/ - do POST to signout
host:3000/api/user/me - do GET to get info about user\inv\items (after reg\auth)
4) host:3000/api/user/items/add - do POST to add item(if authenticated),
fields: sign, description, category, image
5) host:3000/api/user/items/listed - do GET to get list of already listed items in system
6) host:3000/api/user/items/categorys - do GET to get all available categorys for items


## Requirements:
1. Node v10.x
2. NPM v5.x

## How to install requirements:
1. npm install
2. cd ./frontend && npm install

## How to run app:
1. npm start

## Repo contains:
1. docker-compose file with postgres db. You can change db_user and db_password in docker-compose.yml file.

## How to use Docker:
* npm run docker-build: to download images if it's still not exist
* npm run docker-start: start postgres within docker containers
* npm run docker-clean: turn containers off.

