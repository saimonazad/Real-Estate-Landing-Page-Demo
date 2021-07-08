import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 15px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.04)",
    borderRadius: 4,
    height: 60,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      padding: "2px 10px",
    },
  },
  input: {
    margin: theme.spacing(0, 1.2),
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1),
    },
  },
  iconButton: {
    padding: 7,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  search__btn: {
    padding: theme.spacing(0.9, 3.8),
    borderRadius: "2px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.7, 2.2),
    },
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Box component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search for address"
        inputProps={{ "aria-label": "Search for address" }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.search__btn}
        aria-label="directions"
      >
        Search
      </Button>
    </Box>
  );
}
