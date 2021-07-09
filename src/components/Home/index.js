import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
//import component
import Search from "../Search";
import SearchResult from "../SearchResult";
//import http client
import { httpClient } from "../../api/config";

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 686,
  },
  header: {
    marginTop: 100,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
  title: {
    fontSize: 55,
    fontWeight: 500,
    marginBottom: 32,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    fontSize: 19,
    lineHeight: 1.8,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
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
  //search term state
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSerachTerm, setdebouncedSerachTerm] = useState(searchTerm);
  const [results, setresults] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedSerachTerm(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const search = async () => {
      setloading(true);
      await httpClient
        .get(`/gozayaan_campaign/real_estate_list`, {
          params: {
            city_name: debouncedSerachTerm,
            format: "json",
          },
        })
        .then((res) => {
          setloading(false);
          setresults(res.data);
        })
        .catch((error) => {
          setloading(false);
          seterror(error);
        });
    };
    if (debouncedSerachTerm) {
      search();
    }
  }, [debouncedSerachTerm]);

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
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Box className={classes.result__box}>
          <SearchResult loading={loading} results={results} error={error} />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
