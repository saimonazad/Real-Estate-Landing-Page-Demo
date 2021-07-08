import React from "react";
//import material ui elements
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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
    marginRight: theme.spacing(2),
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
  },
  logo: {
    display: "inline-block",
    flexGrow: 1,
    width: 143,
    height: 32,
    fontWeight: 500,
  },
}));
//functional component
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
        color="primary"
      >
        <Toolbar>
          <Hidden xsUp>
            <IconButton
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
          <div className={classes.navLinks}>
            <Link href="#" color="inherit">
              Buy a house
            </Link>
            <Link href="#" color="inherit">
              Rent a house
            </Link>
            <Link href="#" color="inherit">
              Mortgage
            </Link>
          </div>
          <Button
            className={classes.btnLogin}
            variant="outlined"
            color="primary"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
