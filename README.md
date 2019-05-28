# Issue Tracker

> This is a test project using [Feathers](http://feathersjs.com) and [Vue](http://vuejs.org).

## Project purpose

The purpose of this project is to create something with real world application with Feathers and Vue.

## Requirements

* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](http://docs.sequelizejs.com/)
* [Docker](https://www.docker.com/) (Optional)

## Prerequisits

Install Node and NPM. The latest LTS versions should suffice.

To run this application, you will need to install the the Sequelize ORM globally

```
npm install -g sequelize
```

Then you will want to install the applcation with the following command
```
cd /path/to/application; npm install
```

## Get up and running

You'll want to have a MySQL server running for this before the application can run. If you don't have a MySQL server installed already, and if you instal, or already have Docker installed, you can create a quick container with all the settings you will need to get started with the following command:

```
docker run --name feathers-mysql -e MYSQL_DATABASE=feathers -e MYSQL_ROOT_PASSWORD=secret -p 33060:3306 -d mysql:5
```

This sets everything up with what is set in the default MySQL config for development.

Once you have a MySQL server running, run the following command to run the SQL migrations:

```
sequelize db:migrate
```

And now you can seed data into the database with the following command:

```
sequelize db:seed:all
```

If no errors occured, the data should be setup, and you can now start the application with the following command:

```
npm start
```

The application should now be running at http://localhost:3030

## The Frontend

The front end uses Vue. To get started:

Install your dependencies
```
cd /resources; npm install
```

To Start up the development server
```
npm run serve
```
Vue will run a node dev server with Hot Module Replacement. The dev server will be available at http://localhost:8080 (Assuming the the port is open). The will proxy to the feathers application, so you will need to make sure the feathers server is running.

If you prefer to just build the front end as a part of the normal feathers application, the you can use the following command
```
npm build
```

## Running Tests

Run `npm test` and all your tests in the `test/` directory will be run.

## For development

If you are developing for this application, you'll probably want to install the Feathers CLI:

```
npm install -g @feathersjs/cli
```

To see available commands:
```
feathers help
```

## License

Copyright (c) 2019
Licensed under the [MIT license](LICENSE).
