<!--lint disable no-literal-urls-->
<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

Node.js is an open-source, cross-platform, JavaScript runtime environment. It
executes JavaScript code outside of a browser. For more information on using
Node.js, see the [Node.js Website][].

This is a Node.js, Express and Mongo DB boilerplate which is a template and very easy to use.


## Getting Started


#### 1. Install dependencies

This workflow requires the following dependencies -

- Node.js with npm ([Install](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))

#### 2. Clone this repository

```
git clone https://github.com/weezykon/Nodejs-Express-Mongodb-template.git
cd Nodejs-Express-Mongodb-template
```

Or [download as a ZIP](https://github.com/weezykon/Nodejs-Express-Mongodb-template/archive/main.zip).

#### 3. Install packages

```
npm install
```

#### Get to know your dependencies
- [@hapi/joi](https://www.npmjs.com/package/@hapi/joi)
Joi is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).

- [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
This is a dedicated service for interaction with the mail endpoint of the [SendGrid v3 API](https://sendgrid.com/docs/API_Reference/api_v3.html)

- [Bcrypt Nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
Native JS implementation of BCrypt for Node. Has the same functionality as node.bcrypt.js expect for a few tiny differences. Mainly, it doesn't let you set the seed length for creating the random byte array.

- [Body Parser](https://www.npmjs.com/package/body-parser)
Parse incoming request bodies in a middleware before your handlers, available under the req.body property

- [Cloudinary](https://www.npmjs.com/package/cloudinary)
Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

- [Cors](https://www.npmjs.com/package/cors)
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.

- [Coveralls](https://www.npmjs.com/package/coveralls)
Coveralls.io support for Node.js. Get the great coverage reporting of coveralls.io and add a cool coverage button (like the one above) to your README.

- [Data Uri](https://www.npmjs.com/package/datauri)
The data URI scheme is a uniform resource identifier (URI) scheme that provides a way to include data in-line in web pages as if they were external resources

- [Dotenv](https://www.npmjs.com/package/dotenv)
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- [Eslint config airbnb base](https://www.npmjs.com/package/eslint-config-airbnb-base)
This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.

- [Eslint plugin import](https://www.npmjs.com/package/eslint-plugin-import)
This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

- [Express](https://www.npmjs.com/package/express)
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- [Express rate limit](https://www.npmjs.com/package/express-rate-limit)
Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.

- [Express useragent](https://www.npmjs.com/package/express-useragent)
Express-useragent is a simple NodeJS/ExpressJS user-agent middleware exposing user-agent details to your application and views.

- [Helmet](https://www.npmjs.com/package/helmet)
Helmet helps you secure your Express apps by setting various HTTP headers

- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

- [Jstz](https://www.npmjs.com/package/jstz)
This library allows you to detect a user's timezone from within their browser. It is often useful to use JSTZ in combination with a timezone parsing library such as Moment Timezone.

- [Mocha](https://www.npmjs.com/package/mocha)
Mocha is a feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases

- [Mocha Lcov Reporter](https://www.npmjs.com/package/mocha-lcov-reporter)
The mocha-lcov-reporter is a reporter for mocha. In order to get coverage data.

- [Mongodb](https://www.npmjs.com/package/mongodb)
The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks. Create Deployments in Minutes w/ MongoDB Atlas

- [Mongoose](https://www.npmjs.com/package/mongoose)
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

- [Mongoose Lean Virtuals](https://www.npmjs.com/package/mongoose-lean-virtuals)
Attach virtuals to the results of mongoose queries when using .lean()

- [Nodemon](https://www.npmjs.com/package/nodemon)
Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- [Swagger UI Express]()
This module allows you to serve auto-generated [swagger-ui](https://swagger.io/tools/swagger-ui/) generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.

- [Url](https://www.npmjs.com/package/url)
This module has utilities for URL resolution and parsing meant to have feature parity with node.js core url module.

## Footnotes

- Created by [Weezykon](https://twitter.com/weezykon)
- Licensed under [MIT](https://github.com/nodejs/node-addon-api/blob/master/LICENSE.md)
