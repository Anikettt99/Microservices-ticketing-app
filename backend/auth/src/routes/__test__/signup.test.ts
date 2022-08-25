import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "testtest.com",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "",
    })
    .expect(400);
});

// for 2 test at once use await
it("returns a 400 with missing email or password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@rwat.com",
    })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({
      password: "gfsdgfg",
    })
    .expect(400);
});

it("disallows signup with same email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "asdcvb" })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "asdcvb" })
    .expect(400);
});

it("it sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "asdcvb" })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
