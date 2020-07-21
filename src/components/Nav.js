import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/images/logo.gif";
import avatar from "../assets/images/avatar.svg";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 20,
    backgroundColor: "#5F5D5D",
  },
}));

/**
 * @description Renderiza el header de la app
 * @param {string} name
 * @param {string} contactEmail
 * @author Juan carlos munoz guzman
 * @version 0.0.1
 */
export default function Nav() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
