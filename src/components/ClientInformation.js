import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import * as apis from '../apis/apis';
import { setClientList } from '../store/actions/index';

const ClientInformation = (props) => {
  const dispatch = useDispatch();
  // const [open, setOpen] = React.useState(false);

  const tableHeaders = [
    {
      name: "Name",
      number: "Phone Number",
      plate: "Plate",
      status: "Status",
      progress: "Progress",
      actions: "Actions",
    },
  ];

  useEffect(() => {
    apis.getOwnerList().then(results => {
      dispatch(setClientList(results.data))
    });
  },[])
  

  const { clients } = props.data;
  return (
    <Card>
      <CardHeader title="Current Clients" />
      <CardContent>
        <Table>
          <TableHead>
            {tableHeaders.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.plate}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.progress}</TableCell>
                <TableCell>{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {clients.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.owner_name}</TableCell>
                <TableCell align="left">{row.owner_number}</TableCell>
                <TableCell align="left">{row.owner_plate}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.progress}</TableCell>
                <TableCell align="left">
                  <Button>Test</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => {
  return { data: state.clientListReducer };
};

export default connect(mapStateToProps)(ClientInformation);
