import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as apis from "../apis/apis";

import VehicleInfo from "./VehicleInfo";
import VehicleUpgrades from "./VehicleUpgrades";
import VehicleRepairs from "./VehicleRepairs";
import ClientInformation from "./ClientInformation";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { setVehicleData } from "../store/actions/index";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#333333",
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    flexDirection: "unset",
    zIndex: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    width: "100%",
    borderRadius: "0px",
  },
  contentShift: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    width: "100%",
    borderRadius: "0px",
    boxShadow: theme.shadows[0],
  },
  wrapper: {
    display: "flex",
  },
  row: {
    padding:"10px",
    width: "100%",
  },
}));

const App = () => {
  const [showHideToggler, setShowHideToggler] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    if(open !== true){
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  window.addEventListener("message", (event) => {
    if (event.data.openMechanicMenu) {
      setShowHideToggler(true);
      dispatch(setVehicleData(event.data));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      setShowHideToggler(false);
      apis.closeMechanics();
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div className={showHideToggler ? "container" : "hide-container"}>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          position="relative"
          color="default"
          className={open ? "appBar" : "appBarShift"}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={open ? "menuButton" : "hide"}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Car Diagnostics
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <div className={classes.wrapper}>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{ paper: classes.drawerPaper }}
            >
              <List>
                <Button className={classes.row} component={Link} to="/">
                  Vehicle Inspection
                </Button>
                <Button className={classes.row} component={Link} to="/repair">
                  Vehicle Repairs
                </Button>
                <Button className={classes.row} component={Link} to="/upgrade">
                  Vehicle Upgrades
                </Button>
                <Button className={classes.row} component={Link} to="/clients">
                  Clients
                </Button>
              </List>
            </Drawer>
            <Switch>
              <React.Fragment>
                <Paper
                  className={open ? classes.contentShift : classes.content}
                >
                  <Route exact path="/">
                    <VehicleInfo />
                  </Route>
                  <Route exact path="/upgrade">
                    <VehicleUpgrades />
                  </Route>
                  <Route exact path="/repair">
                    <VehicleRepairs />
                  </Route>
                  <Route exact path="/clients">
                    <ClientInformation />
                  </Route>
                </Paper>
              </React.Fragment>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
