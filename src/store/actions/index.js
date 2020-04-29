import { SET_VEHICLE_DATA } from "../constants/action-types";

export const setVehicleData = (data) => {
  return { type: SET_VEHICLE_DATA, data };
};
