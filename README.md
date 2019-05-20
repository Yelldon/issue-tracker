# Issue Tracker

> Test project using Feathers

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.  This is strictly a testing software, to see how things function, and see what it's capable of.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/issue-tracker; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Building The Frontend

The front end uses Vue JS. To get started:

1. Install your dependencies

    ```
    cd path/to/issue-tracker/resources; npm install
    ```

2. Start The dev server

    ```
    npm serve
    ```
3. If you prefer to just build the frontend without running the dev server

    ```
    npm build
    ```

* Note that if you run the Vue dev server, you need to also have the feathers server running.

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
