import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//material table
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
//TODO
// props.owner
// props.ticker
// props.vehicleProps.plate
// props.vehicleProps.modEngine
// props.vehicleProps.modBrakes
// props.vehicleProps.modTurbo [is 0 or 1]
// props.vehicleProps.modTransmission
// props.vehicleProps.modArmor
// TODO
// I need to transfer the ticker here
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  paper: {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  paperBox: {
    width: "400px",
  },
  rating: {
    textAlign: "center",
  },
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const tableOptions = {
  search: false,
  paging: false,
  sorting: false
};

const VehicleInfo = (props) => {
  const classes = useStyles();
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const { name, vehicleProps, stars } = props.data;
  return (
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.paperBox}>
          <MaterialTable
            icons={tableIcons}
            title="Vehicle Information"
            options={tableOptions}
            columns={[
              { title: "Plate", field: "plate", editable: "never" },
              { title: "Brakes", field: "modBrakes", editable: "never" },
              { title: "Engine", field: "modEngine", editable: "never" },
              { title: "Turbo", field: "modTurbo", editable: "never" },
              { title: "Armor", field: "modArmor", editable: "never" },
            ]}
            data={[vehicleProps]}

          />
        </div>
        <div className={classes.paperBox}>
          <List>
            <ListItem>Vehicle owned by: {name}</ListItem>
            <ListItem>
              <ListItemText
                primary="Vehicle status"
                secondary={
                  <Rating
                    name="read-only"
                    value={stars}
                    precision={0.5}
                    readOnly
                  />
                }
              ></ListItemText>
            </ListItem>
          </List>
        </div>
      </Paper>
  );
};

const mapStateToProps = (state) => {
  return { data: state.vehicleReducer };
};

export default connect(mapStateToProps)(VehicleInfo);

// plate: action.data.vehicleProps.plate,
// modEngine: action.data.vehicleProps.modEngine,
// modBrakes: action.data.vehicleProps.modBrakes,
// modTurbo: action.data.vehicleProps.modTurbo,
// modTransmission: action.data.vehicleProps.modTransmission,
// modArmor: action.data.vehicleProps.modArmor,
