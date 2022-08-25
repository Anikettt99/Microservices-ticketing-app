import cookieSession from "cookie-session";
import exprers from "express";
const router = exprers.Router();

router.post("/api/users/signout", (req, res) => {
  req.session = null;
  return res.send({});
});

export { router as signoutRouter };
