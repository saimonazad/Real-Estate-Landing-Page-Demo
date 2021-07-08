import React from "react";
import dynamic from "next/dynamic";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomePage = dynamic(() => import("../components/Home"), {
  loading: () => <CircularProgress color="secondary" />,
});

const Home = (props) => <HomePage />;

export default Home;
