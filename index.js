const Hapi = require('hapi');
const mongoose = require('mongoose');
const RestHapi = require('rest-hapi');
require('dotenv').load();

async function api(){
  try {
    const server = Hapi.Server({ 
      port: process.env.PORT || 3013,
      routes: {
        cors: true,
        validate : {
          failAction: (request, h, err) => {
            console.log(err);
          }
        }
      }
    }, () => {
        console.log('Linking Novum API is listening on port ' + process.env.PORT);
    });
    
    const config = {
        appTitle: "Linking Novum API",
        mongo: {
            URI: process.env.MONGO_URI
        }
    };

    await server.register({
      plugin: RestHapi,
      options: {
        mongoose,
        config
      }
    });

    await server.start();
    
    return server;
  } catch (err) {
    console.log("Error starting server:", err);
  }
}

module.exports = api();