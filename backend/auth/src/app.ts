import express from "express";
import "express-async-errors"; // for using throw new Error() is async functions
import { currentUserRouter } from "./routes/current-user";
import { errorHandler, NotFoundError } from "@zura99tickets/common";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
//import cookieParser from "cookie-parser";

import cors from "cors";
import cookieSession from "cookie-session";
//import cookieSession from "cookie-session";
const app = express();
app.use(cors());
app.set("trust proxy", true); // for ingress as it is proxy, by default express dont trust it (for https)
app.use(express.json());
//app.use(cookieParser());
app.use(
  cookieSession({
    signed: false, // no need of decryption

    secure: false,

    // secure: true, // only https connection
    //   secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get("/", (req, res) => {
  res.send("Aa rhi hai request");
});
app.use("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
