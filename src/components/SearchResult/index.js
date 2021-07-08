import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
//styles
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    height: 60,
  },
  details__box: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
    fontSize: 16,
  },
  city__name: {
    fontSize: 18,
    fontWeight: 500,
  },
  filter__icon: {
    marginRight: theme.spacing(1.5),
    verticalAlign: "middle",
  },
  arrow__icon: {
    marginLeft: theme.spacing(2.5),
  },
}));

//functional component
const SearchResult = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root}>
        <Typography className={classes.city__name} component="h3">
          Calabasas, CA
        </Typography>
        <Box className={classes.details__box}>
          <img className={classes.filter__icon} src="/assets/FilterIcon.svg" />
          <Typography component="h3">
            $1.5k+ / 2 Beds / Appt. ... 3 more
          </Typography>
          <img
            className={classes.arrow__icon}
            src="/assets/RightArrowIcon.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
