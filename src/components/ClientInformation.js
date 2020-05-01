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
import TablePagination from '@material-ui/core/TablePagination';
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useDispatch } from "react-redux";
import * as apis from '../apis/apis';
import { setClientList } from '../store/actions/index';

const ClientInformation = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  const dispatch = useDispatch();

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


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  

  const { clients } = props.data;
  return (
    <Card>
      <CardHeader title="Current Clients" />
      <CardContent>
        <Table
          size='small'>
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
            {clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.owner_name}</TableCell>
                <TableCell align="left">{row.owner_number}</TableCell>
                <TableCell align="left">{row.owner_plate}</TableCell>
                <TableCell align="left">{row.status === 0 ? <Badge color="error" badgeContent="PENDING"/> : <Badge color="primary" badgeContent="COMPLETED"/>}</TableCell>
                <TableCell align="left"><LinearProgress variant="determinate" value={row.progress}/> </TableCell>
                <TableCell align="left">
                  <Button>Test</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={clients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
          />
        </Table>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => {
  return { data: state.clientListReducer };
};

export default connect(mapStateToProps)(ClientInformation);
