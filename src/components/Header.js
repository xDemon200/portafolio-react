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
  },
  appBar: {
    backgroundColor: "#000",
  },
  [theme.breakpoints.down("xs")]: {
    logo: {
      maxWidth: 50,
    },
    avatar: {
      maxWidth: 60,
    },
  },
  [theme.breakpoints.up("md")]: {
    logo: {
      maxWidth: 50,
    },
    avatar: {
      maxWidth: 60,
    },
  },
  [theme.breakpoints.up("sm")]: {
    logo: {
      maxWidth: 50,
    },
    avatar: {
      maxWidth: 60,
    },
  },
  [theme.breakpoints.up("lg")]: {
    logo: {
      maxWidth: 80,
    },
    avatar: {
      maxWidth: 80,
    },
  },
}));

/**
 * @description Renderiza el header de la app
 * @param {string} name
 * @param {string} contactEmail
 * @author Juan carlos munoz guzman
 * @version 0.0.1
 */
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <img src={avatar} alt="loading..." className={classes.avatar} />
            <img src={logo} alt="loading..." className={classes.logo} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
