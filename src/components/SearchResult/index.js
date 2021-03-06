import React, { useState, useEffect } from "react";

import {
  Box,
  makeStyles,
  Typography,
  Hidden,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    [theme.breakpoints.down("sm")]: {
      "& .MuiTypography-body1": {
        fontSize: 15,
      },
    },
  },
  city__name: {
    fontSize: 18,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  filter__icon: {
    marginRight: theme.spacing(1.5),
    verticalAlign: "middle",
  },
  arrow__icon: {
    marginLeft: theme.spacing(2.5),
  },
  accordion__root: {
    boxShadow: "none",
    borderRadius: 4,
    "&::before": {
      opacity: 0,
    },
  },
  loading__container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    height: 60,
  },
}));

//functional component
const SearchResult = ({ city }) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Box>
          <Hidden smDown>
            <Box className={classes.root}>
              <Typography className={classes.city__name} component="h3">
                {city?.city_name}, {city?.short_code}
              </Typography>
              <Box className={classes.details__box}>
                <img
                  className={classes.filter__icon}
                  src="/assets/FilterIcon.svg"
                />
                <Typography component="h3">
                  ${city?.rate} / {city?.apartment_bed} Bed / Appt. ...
                  {city?.find_more} more
                </Typography>
                <img
                  className={classes.arrow__icon}
                  src="/assets/RightArrowIcon.svg"
                />
              </Box>
            </Box>
          </Hidden>
        </Box>
        <Hidden mdUp>
          <Accordion className={classes.accordion__root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.city__name} component="h3">
                {city?.city_name}, {city?.short_code}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className={classes.details__box}>
                <img
                  className={classes.filter__icon}
                  src="/assets/FilterIcon.svg"
                />
                <Typography component="h3">
                  ${city?.rate} / {city?.apartment_bed} Bed / Appt. ...
                  {city?.find_more} more
                </Typography>
                <img
                  className={classes.arrow__icon}
                  src="/assets/RightArrowIcon.svg"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Hidden>
      </Box>
    </>
  );
};

export default SearchResult;
