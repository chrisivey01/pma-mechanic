import * as types from '../constants/action-types'

const initialState = {
  name: "",
  ticker: 0,
  number: "",
  stars: 0,
  vehicleProps: {
    plate:"",
    modEngine: 0,
    modBrakes: 0,
    modTurbo: 0,
    modTransmission: 0,
    modArmor: 0,
  },
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VEHICLE_DATA:
      return {
        name: action.carInfo.name,
        ticker: action.carInfo.ticker,
        stars: (action.carInfo.ticker / 2) * .1,
        number: action.carInfo.number,
        vehicleProps: action.carInfo.vehicleProps
      };
    default:
      return state;
  }
};

export default vehicleReducer;
