// import React from "react";
// import { Link } from "react-router-dom";

// export default function ({ contactEmail }) {
//   return (
//     <div>
//       <div className="header_container">
//         <Link to="/">
//           <div
//             style={{
//               backgroundColor: "white",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//             }}
//           >
// <img
//   src={logo}
//   alt="loading..."
//   style={{ width: "100%", height: "100%" }}
// />
//           </div>
//         </Link>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/about">about</Link>
//             </li>
//             <li>
//               <a href={`mailto:${contactEmail}`}>contact</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/images/logo.gif";
import avatar from "../assets/images/avatar.svg";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#000",
  },
  logo: {
    maxWidth: 100,
    padding: theme.spacing(1),
  },
  menu: {
    fontSize: "2em",
    fontWeight: "bold",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    marginBlockStart: "0.67em",
    marginBlockEnd: "0.67em",
    display: "block",
  },
}));

/**
 * @description Renderiza el header de la app
 * @param {string} name
 * @param {string} contactEmail
 * @author Juan carlos munoz guzman
 * @version 0.0.1
 */
export default function ButtonAppBar() {
  const classes = useStyles();
  const width = `${100 / 3}%`;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            width={width}
            justifyContent="center"
          >
            <img src={logo} alt="loading..." className={classes.logo} />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width={width}
            justifyContent="center"
          >
            <img src={avatar} alt="loading..." className={classes.logo} />
          </Box>
          <Box display="flex" flexDirection="row" width={width}>
            <MenuItem className={classes.menu}>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
