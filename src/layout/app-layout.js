import React from "react";
import Navbar from "../components/Navbar";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container__width: {
    maxWidth: 1100,
  },
  root: {
    backgroundImage: `url(${"/assets/home-bg.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: '100vh',
    height: "100%",
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container__width}>
        <Navbar />
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default Layout;
