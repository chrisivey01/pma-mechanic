import { SET_VEHICLE_DATA } from "../constants/action-types";
import { SET_CLIENT_LIST } from "../constants/action-types";

export const setVehicleData = (data) => {
  return { type: SET_VEHICLE_DATA, carInfo: data };
};

export const setClientList = (data) => {
  return { type: SET_CLIENT_LIST, clients: data};
};
