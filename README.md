# Item-Trade App
##Functional:
1) Reg/Auth
2) Adding items to inventory
3) Item exchanging
4) View items submitted for exchange by other users
5) Creating an exchange request
6) View a list of outgoing and incoming requests for exchange
7) Exchange confirmation

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

