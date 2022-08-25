import Router from "next/router";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

export default () => {
  const { doRequest } = useRequest({
    url: "http://localhost:5000/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};
