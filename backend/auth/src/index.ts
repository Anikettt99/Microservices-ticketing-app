import express from "express";
import mongoose from "mongoose";
import { app } from "./app";

/*

The following characters must be converted using 
percent encoding
 if included in a username or password:

: / ? # [ ] @

For example, if your password in plain-text is p@ssw0rd'9'!, you need to encode your password as:

p%40ssw0rd%279%27%21


*/

const URI =
  "mongodb+srv://aniket:1%40AniketsinhA@cluster0.8nlgsd9.mongodb.net/Authentication?retryWrites=true&w=majority";

const start = async () => {
  /*
  if(!process.env.JWT_KEY)
  {
    // checking this coz typescript assuming this secret is not existing
    throw Error('JWT_KEY must be defined');
    
  }*/

  try {
    await mongoose.connect(URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  app.listen(5000, () => {
    // console.log("hua change?  ");
    console.log("Listening on port 5000 (Auth Service)");
  });
};

start();
