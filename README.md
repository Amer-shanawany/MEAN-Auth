
# MEAN Stack  RESTful API Jwt Authentication Login SPA

This repo contains the code for a RESTful API Login/User-profile that was built using the MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>AngularJS</li>
<li>NodeJS</li>
</ul>

<h3>Instructions</h3>
simply clone this repo using

    git clone https://github.com/Amer-shanawany/MEAN-Auth.git
    
navigate to the directory

    cd MEAN-Auth
    
then install the Node modules with

    npm install

then make sure MongoDB is running with

    mongod
    
use the config file /config/database.js to configure your connection string to the database.

## Prod Tasks

- `npm run start` just run app, remember to set NODE_ENV=production and others environment variables, 

- for example to give the desired port as an argument `sudo PORT=80 npm run start`

navigate to angular-src subfolder

    cd angular-src

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `../public/` directory. Use the `--prod` flag for a production build.

Endpoints
====

| Endpoint |    Description |
|----------| ----------- |
| /users/register | to register a new user
| /users/authenticate | to get a Jwt token
| /users/profile | to get user profile data




## Licensing [![license](https://img.shields.io/github/license/bkimminich/juice-shop.svg)](LICENSE)

This program is free software: you can redistribute it and/or modify it
under the terms of the [MIT license](https://github.com/JustasB/MitralSuite/issues).

