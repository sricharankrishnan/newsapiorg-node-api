# NodeJS/Express App - Backend Boiler Plate (version 2.0.0)
Boiler plate for building nodejs/express applications.

## Structure
```
├── controllers
│   └── home
│       ├── api
│       │   └── sample.api.js
│       ├── handlers
│       │   └── index.handlers.js
│       └── service
│           └── sample.service.js
├── middleware
│   └── app.middleware.js
├── models
│   ├── error-response.models.js
│   └── success-response.models.js
├── package.json
├── package-lock.json
├── public
│   └── notes.txt
├── README.md
├── routes
│   ├── home
│   │   └── index.routes.js
│   ├── index.routes.js
│   └── static.routes.js
├── server.js
├── static
│   ├── assets
│   │   ├── icons
│   │   │   ├── app-favicon.png
│   │   │   └── app-icon.svg
│   │   └── images
│   │       └── cubes-bg.jpg
│   ├── css
│   │   └── home
│   │       └── styles.min.css
│   ├── scripts
│   │   └── home
│   │       └── index.min.js
│   └── views
│       ├── home
│       │   └── templates
│       │       ├── content.partial.html
│       │       └── index.html
│       └── partials
│           ├── app-footer
│           │   └── index.html
│           ├── app-meta
│           │   └── index.html
│           ├── app-nav
│           │   └── index.html
│           └── app-webfonts
│               └── index.html
└── utils
    ├── handler-template.js
    └── logger.js
```

* __server.js__: central point from which the application would start running
* __package.json__: All npm packages contain a file, usually in the project root, called package. json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies
* __package-lock.json__:  automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
* __controllers__: directory that houses all methods that would handle requests being made to an endpoint. Please check the structure per route in the directory for more information
* __middleware__: directory that houses all methods that would act as a middleware or logic, that would be executed before reaching the actual route
* __models__: schema for responses
* __public__: serves as a good host for all publicly accessible files. For example a sitemap for an e-commerce file
* __routes__: directory that comprises of a central routes and static file service config handler. Also, every page route will be placed here. 
* __static__: directory thats serves as a host for all static frontend assets including media files
* __utils__: good place to keep anything that services its purpose as a common utility

## Start Server
To start the server, ensure to install all dependencies via ```npm install``` and then run ```npm run start``` as shown in package.json file.
