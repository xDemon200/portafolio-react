import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("xs")]: {
    root: {
      display: "flex",
      alignItems: "center",
      height: "60vh",
      backgroundColor: "purple",
    },
  },
  [theme.breakpoints.up("md")]: {
    root: {
      display: "flex",
      alignItems: "center",
      height: "50vh",
      backgroundColor: "green",
    },
  },
  [theme.breakpoints.up("sm")]: {
    root: {
      display: "flex",
      alignItems: "center",
      height: "50vh",
      backgroundColor: "blue",
    },
  },
  [theme.breakpoints.up("lg")]: {
    root: {
      display: "flex",
      alignItems: "center",
      height: "50vh",
      backgroundColor: "red",
    },
  },
}));

export default function Section() {
  const classes = useStyles();
  return <div className={classes.root}>Hello I 'm</div>;
}
