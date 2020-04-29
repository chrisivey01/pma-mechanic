const initialState = {
  name: "",
  ticker: 0,
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
    case "SET_VEHICLE_DATA":
      return {
        name: action.data.name,
        ticker: action.data.ticker,
        stars: (action.data.ticker / 2) * .1,
        vehicleProps:action.data.vehicleProps
        // plate: action.data.vehicleProps.plate,
        // modEngine: action.data.vehicleProps.modEngine,
        // modBrakes: action.data.vehicleProps.modBrakes,
        // modTurbo: action.data.vehicleProps.modTurbo,
        // modTransmission: action.data.vehicleProps.modTransmission,
        // modArmor: action.data.vehicleProps.modArmor,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
