/************************************************************action types ****************************************************************/
export const ADD_VEHICLE ="add vehicle";
export const UPDATE_VEHICLE ="update vehicle";
export const REMOVE_VEHICLE ="remove vehicle";
export const MARK_VEHICLE_EDITABLE ="mark vehicle editable";
export const UNMARK_VEHICLE_EDITABLE ="unmark vehicle editable";
/************************************************************action types ****************************************************************/
export const createAddVehicleAction = vehicle => ({type:ADD_VEHICLE,vehicle})
export const createupdateVehicleAction = vehicle => ({type:UPDATE_VEHICLE,vehicle})
export const createRemoveVehicleAction = id => ({type:REMOVE_VEHICLE,id})
export const createMarkVehicleEditableAction = id => ({type:MARK_VEHICLE_EDITABLE,id})
export const createUnMarkVehicleEditableAction = id => ({type:UNMARK_VEHICLE_EDITABLE,id})
/************************************************************action types ****************************************************************/
const vehicleReducer =(oldState={}, action) =>{
    let vehicles =oldState.vehicles ??[
            {id:101,year:'2012',make:'Honda',model:'VDI',vin:56481}
    ];


switch(action.type){
    case ADD_VEHICLE:
        vehicles =[...vehicles,action.vehicle];
        break;
    case UPDATE_VEHICLE:
        vehicles =vehicles.map(v => v.id === action.vehicle.id ? {...action.vehicle, isEditable: undefined}: v);
        break;
    case REMOVE_VEHICLE:
        vehicles =vehicles.filter(v=>v.id!==action.id);
        break;
    case MARK_VEHICLE_EDITABLE:
        vehicles =vehicles.map(v => v.id === action.id ? {...v, isEditable: true}: v);
        break;
    case UNMARK_VEHICLE_EDITABLE:
        vehicles =vehicles.map(v => v.id === action.id ? {...v, isEditable: undefined}: v);
        break;    
    default:
        break;
    
}
        return(vehicles);
}

export default vehicleReducer;