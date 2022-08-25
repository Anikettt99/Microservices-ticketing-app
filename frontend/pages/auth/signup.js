import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "http://localhost:5000/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },

    onSuccess: () => Router.push("/"), //it is callback
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmit} style={{ padding: "30px" }}>
      <h1>Sign up</h1>
      <div className="form-group ">
        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary" style={{ marginTop: "15px" }}>
        Sign up
      </button>
    </form>
  );
};
