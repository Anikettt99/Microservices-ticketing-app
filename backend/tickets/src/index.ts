import express from "express";
import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

/*

The following characters must be converted using 
percent encoding
 if included in a username or password:

: / ? # [ ] @

For example, if your password in plain-text is p@ssw0rd'9'!, you need to encode your password as:

p%40ssw0rd%279%27%21


*/

const URI =
  "mongodb+srv://aniket:1%40AniketsinhA@cluster0.8nlgsd9.mongodb.net/Tickets?retryWrites=true&w=majority";

const start = async () => {
  /*
  if(!process.env.JWT_KEY)
  {
    // checking this coz typescript assuming this secret is not existing
    throw Error('JWT_KEY must be defined');
    
  }*/

  try {
    await natsWrapper.connect("ticketing", "dfdsf", "http://localhost:32219");

    /* we can handle this close event in NatsWrapper class to but it is not recommended
       coz we don't want to shut our code from some class..rather we shutdown from central
       file i.e index.ts
    */
    natsWrapper.client_get.on("close", () => {
      console.log("NATS conncetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client_get.close());
    process.on("SIGTERM", () => natsWrapper.client_get.close());

    await mongoose.connect(URI);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }

  app.listen(5001, () => {
    // console.log("hua change?  ");
    console.log("Listening on port 5001 (Tickets Service)");
  });
};

start();
