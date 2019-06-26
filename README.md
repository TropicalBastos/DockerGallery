# Docker Gallery

This is a tutorial I gave at an open class during a Hackathon in Salvador, Brazil. It is a simple image gallery driven by the trending microservices architecture a lot of people are migrating to nowadays.

This serves as an example of a microservice application using Docker and Docker Compose. The stack includes use of the following components:

- A React.js frontend which uses a service component wrapper that makes calls to the gallery backend
- An Nginx proxy server that forwards any requests from the frontend onto the corresponding service based on the uri
- A Java/Spring Boot backend that handles data migrations and requests from the Nginx proxy and delivers the payload
- A Mysql database container that persists the entirety of the data
- A subnetwork configured in docker compose in which all the components can discover and talk to each other

## Prerequisites

Make sure you have the following installed:

- Gradle
- Docker
- Docker Compose
- npm
- react-scripts: `npm install react-scripts -g`

## Build

The steps required to build the web app are:

- Clone the repository
- Cd into the directory and cd into imgservice: `cd imgservice`
- Run `gradle build` to build the backend and run the data migrations
- Cd into the web directory `cd ../web`
- Run `npm run-script build` to transpile and build the frontend 
- Run `docker-compose build` to build the containers
- Run `docker-compose up` to finally run the cluster

And thats it!

## Contributions
Let's see if we can get some more microservice containers in this repo and expand the web app's functionality for fun. Feel free to fork and contribute!