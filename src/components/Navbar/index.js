import React, { useState } from "react";
//import material ui elements
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ResponsiveMenuDrawer from "./ResponsiveDrawer";
//import icons
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden } from "@material-ui/core";
//styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
  menuButton: {
    color: theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  navLinks: {
    flexGrow: 1,
    fontSize: 17,
    fontWeight: 500,
    color: theme.palette.text.primary,
    "& a": {
      margin: theme.spacing(0, 3),
      "&:hover": { textDecoration: "none" },
    },
  },
  btnLogin: {
    borderRadius: "2px",
    border: "2px solid",
    padding: theme.spacing(0.5, 3.8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.4, 2.5),
    },
  },
  logo: {
    flexGrow: 1,
    width: 143,
    height: 32,
    [theme.breakpoints.down("sm")]: {
      width: 123,
      height: 22,
    },
  },
}));
//functional component
const Navbar = () => {
  const classes = useStyles();

  //responsive menu drawer state
  const [isDrawerOpen, setisDrawerOpen] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  //function to control menu drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setisDrawerOpen({ ...isDrawerOpen, [anchor]: open });
  };
  //render to ui
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
        color="primary"
      >
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={toggleDrawer("left", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box flexGrow={1}>
            <img className={classes.logo} src="/assets/housen.svg" />
          </Box>
          <Hidden smDown>
            <Box className={classes.navLinks}>
              <Link href="#" color="inherit">
                Buy a house
              </Link>
              <Link href="#" color="inherit">
                Rent a house
              </Link>
              <Link href="#" color="inherit">
                Mortgage
              </Link>
            </Box>
          </Hidden>
          <Button
            className={classes.btnLogin}
            variant="outlined"
            color="primary"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <ResponsiveMenuDrawer
        isDrawerOpen={isDrawerOpen}
        setisDrawerOpen={setisDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default Navbar;
