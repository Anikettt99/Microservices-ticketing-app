import exprers, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@zura99tickets/common";
import { body } from "express-validator";
import { User } from "../models/user";
import { Password } from "../services/password";
const router = exprers.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordMatch = await Password.comapare(
      existingUser.password,
      password
    );

    if (!passwordMatch) {
      throw new BadRequestError("Invalid Credentials");
    }

    // GENERATE JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      "zura" // process.env.JWT_KEY!  (we are using "!" to tell typescript that we have already check if this key is defined or not)
      // command in kubernetes (kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf)
    );
    //Store it on session object
    // cookie session library take this object serialize it then send it back to user browser
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
