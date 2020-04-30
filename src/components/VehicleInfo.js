import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MaterialTable from "material-table";

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
  },
  rating: {
    textAlign: "center",
  },
});

const tableOptions = {
  search: false,
  paging: false,
  sorting: false
};

const VehicleInfo = props => {
  const classes = useStyles();

  const { name, vehicleProps, stars, number } = props.data;
  return (
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.paperBox}>
          <MaterialTable
            title="Vehicle Information"
            options={tableOptions}
            columns={[
              { title: "Plate", field: "plate", editable: "never" },
              { title: "Brakes", field: "modBrakes", editable: "never" },
              { title: "Engine", field: "modEngine", editable: "never" },
              { title: "Turbo", field: "modTurbo", editable: "never" },
              { title: "Armor", field: "modArmor", editable: "never" },
              { title: "Transmission", field: "modTransmission", editable: "never" },
            ]}
            data={[vehicleProps]}

          />
        </div>
        <div className={classes.paperBox}>
          <List>
            <ListItem>Vehicle owned by: {name}</ListItem>
            <ListItem>Phone number: {number}</ListItem>
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

const mapStateToProps = state => {
  return { data: state.vehicleReducer };
};

export default connect(mapStateToProps)(VehicleInfo);
