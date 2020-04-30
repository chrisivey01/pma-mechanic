import React from 'react';
import { connect } from "react-redux";

const VehicleRepairs = props => {
    return (
        <div>
            Repairs info!
        </div>
    )
}

const mapStateToProps = state => {
    return { data: state.vehicleReducer };
};
  
export default connect(mapStateToProps)(VehicleRepairs);
  