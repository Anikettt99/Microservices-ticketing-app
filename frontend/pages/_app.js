import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  // console.log(Object.keys(appContext)); // ['AppTree' , 'Component' , 'router' , 'ctx']
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    // this getInitialProps() will go to individual pages
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    currentUser: data.currentUser,
  };
};

export default AppComponent;
