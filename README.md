# Welcome to API-DVD


 This Api is created with love and uses the following technologies::
 - NodeJS.
 - Express.
 - Express-Validator.
 - Sequelize.
 - MySQL.
 - Body-Parser.
 - BcryptJS.
 - JSONWebToken.
 - Moment.

### Install dependencies and run:
>npm install -y

>npm start
||
>nodemon index.js

Routes:

- GET (/) = Server Online!
- GET (/api/) = Get all the Dvds.
- GET (/api/dvd/1) = Get DVD by id, where 1 is the id to be searched for.
- POST (/api/) = Create the Dvd.
- PUT (/api/dvd/1) = Modify dvd by id, where 1 is the selected Id.
- DELETE (/api/dvd/1) = Delete dvd by id, where 1 is the selected Id.

