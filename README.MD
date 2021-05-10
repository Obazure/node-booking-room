# About the service

This is a booking server for a meeting room, which can accept, return and manage bookings.

### Endpoints

Was implemented 3 endpoinds:

Get - `/bookings?booked_from=<date-time>&booked_to=<date-time>` query variables MUST be provided for the filtration.

Post - `/bookings` body should be `Booking[]`

Delete - `/bookings/<:id>` where `id` is `Booking.id`

Note: The `date-time` format considered follow the RFC3339 - for example `2019-10-12T07:20:50.52Z`

Note: there is postman-collection attached for the reviewing how the endpoints are working. Find it in `.deploy` folder. Please use it after docker-compose run.

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
