import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
//import component
import Search from "../Search";
import SearchResult from "../SearchResult";

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 686,
  },
  header: {
    marginTop: 100,
    textAlign: "center",
  },
  title: {
    fontSize: 55,
    fontWeight: 500,
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 19,
    lineHeight: 1.8,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    marginBottom: 40,
  },
  result__box: {
    marginTop: 30,
    "& > *": {
      marginBottom: 16,
    },
  },
}));
//functional component
const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="sm">
        <Box className={classes.header}>
          <Typography className={classes.title} component="h1">
            Find your ideal home
          </Typography>
          <Typography className={classes.subtitle} component="h3">
            Search from more than 19 million of inspected appartments, houses,
            cottages, villas, manors and mansions
          </Typography>
        </Box>
        <Search />
        <Box className={classes.result__box}>
          <SearchResult />
          <SearchResult />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
