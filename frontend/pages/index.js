import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  return currentUser ? <h1>You are signed in</h1> : <h1>You are not signed</h1>;
};

LandingPage.getInitialProps = async (context) => {
  // context mai hoga sb
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;

/* console.log(req.headers.cookie);
 we are using axios rather then useRequest hook (self created)
   because hooks are used inside the component.. getInitialProps is
   plain function outside of component

  
 If we are using docker and kubernetes for hosting of our microservice

  if(typeof window === 'undefined')
  {
     we are on the server! (when we dorectly load this page..so at that tym browser cannot make request..as this is building inside the server)
     request should be made to http://ingress-nginx.ingress.....sfdgsfg
     as only '/' mean...localhost of that specific container..so we need 
     make call to our ingress controller
    ( we are not using ticketing.dev as base coz we can't make call to loadbalancer as it is outside of cluster ..."!maybe!")
    const {data} = await axios.get('http://SERVICENAME.NAMESPACE.svc.cluster.local/api/users/currentuser',{
      headers:{
        Host: 'ticketing.dev'
      }
    })
     we using this header coz the host mention in url is not known by ingress controller 
     so by specifying host in header ingress can know which host we trying to access
   return data;
  }
  else
  {
     we are on the browser! (when we navigate to this page from another page..so at that tym req will be made by the browser)
     requests can be made with a base url of ''
  }

 */
