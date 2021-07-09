import React from "react";
import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
    fontSize: 14,
    padding: theme.spacing(2, 0),
  },
  container__width: {
    maxWidth: 1100,
  },
  footer_contents: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  footer_links: {
    "& a": {
      marginRight: theme.spacing(3),
      color: theme.palette.text.secondary,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      "& a": {
        lineHeight: 1.8,
      },
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.container__width}>
          <Box className={classes.footer_contents}>
            <Typography component="p">Housen © 2020</Typography>
            <Box className={classes.footer_links}>
              <Link>About</Link>
              <Link>Terms & Conditions</Link>
              <Link>FAQ</Link>
              <Link>Privacy Policy</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
