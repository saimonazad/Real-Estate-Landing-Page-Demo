import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container__width: {
    maxWidth: 1100,
  },
  root: {
    backgroundImage: `url(${"/assets/home-bg.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 50px)",
    height: "100%",
    width: "100%",
    paddingBottom: 50
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container__width}>
          <Navbar />
          <div>{children}</div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
