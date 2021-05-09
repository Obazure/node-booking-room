# About the service

This is a booking server for a meeting room, which can accept, return and manage bookings.

### Endpoints

### Deployment

**To launch the api service**, please run:

``` (cd .deploy && docker-compose up -d)```

then open [http://localhost](http://localhost)

**To stop the api service**, please run:

``` (cd .deploy && docker-compose up -d)```

**Note:** please be sure that you have docker installed on your environment.

**Note:** For current configuration docker will listen 80 port, please be sure that it's available before launch, otherwise restart will be needed.

### Documentation

To run documentation:

1. run command: ```npm run docs```
2. then open [http://localhost:9000](http://localhost:9000)

Note: please be sure that before it you have ```npm install```

#### Other available commands

```sudo npm run install:globals``` if you have a fresh install of the node

```npm run dev``` run service in local development mode (database configs are in config/database.ts)

```npm run build``` for building js code

```npm run serve``` for hosting js code with node

```npm run test``` | ```npm run test:coverage``` for running test

```npm run lint``` | ```npm run lint:fix``` for running code linting and syntax errors
