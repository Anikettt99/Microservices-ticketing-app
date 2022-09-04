import express from "express";
import "express-async-errors"; // for using throw new Error() is async functions
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@zura99tickets/common";

//import cookieParser from "cookie-parser";

import cors from "cors";
import cookieSession from "cookie-session";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes/index";
import { deleteOrderRouter } from "./routes/delete";

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

app.use(currentUser);
app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

app.use("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
