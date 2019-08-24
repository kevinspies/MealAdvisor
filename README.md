# Create React Express App

# Kevin's Daily Health App

I'm making this app because it is something that would be very valuable to me. I Like just a couple restaurants, bibibop and cava namely. I like to watch my calories and stay healthy. I also don't like to order the same thing every time I eat. So in essence this app aims, as a starter goal, to give me semi random orders at these locations. It intends to be full MERN stack, saving and authenticating users through a Mongo Database, recieving requests through express, react as a responsive front end, and node.js.

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
