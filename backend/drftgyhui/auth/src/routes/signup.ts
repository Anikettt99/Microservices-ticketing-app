import exprers, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@zura99tickets/common";

const router = exprers.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    // specifying type of req and res

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email is in use");
    }

    const user = User.build({
      email,
      password,
    });

    await user.save();
    // GENERATE JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "zura" // process.env.JWT_KEY!  (we are using "!" to tell typescript that we have already check if this key is defined or not)
      // command in kubernetes (kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf)
    );
    //Store it on session object
    // cookie session library take this object serialize it then send it back to user browser
    req.session = {
      jwt: userJwt,
    };
    // console.log(req.session);
    // console.log(userJwt);
    //res.status(201).cookie("jwt", userJwt).send(user);
    res.status(201).send(user);
  }
);

export { router as signupRouter };
