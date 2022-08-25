import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // we are on server
    return axios.create({
      // if using kubernetes 'http://ingress-nginx.ingress.svc.cluster.local'
      baseURL: "http://localhost:5000",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "http://localhost:5000",
    });
  }
};
