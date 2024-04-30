import VehicleService from "../services/VehicleService";


/************************************************************action types ************************************************************************/
export const REFRESH ="refresh";
export const WAIT ="wait";
export const ERR ="error";
export const MARK_VEHICLE_EDITABLE ="mark vehicle editable";
export const UNMARK_VEHICLE_EDITABLE ="unmark vehicle editable";
/************************************************************action object creators ****************************************************************/
export const createWaitAction = () => ({type: WAIT})
export const createErrAction = errMsg =>({type: ERR, errMsg})
export const createRefreshAction = vehi =>({type: REFRESH, vehi})
export const createMarkVehicleEditableAction = id =>({type: MARK_VEHICLE_EDITABLE,id})
export const createUnMarkVehicleEditableAction = id =>({type: UNMARK_VEHICLE_EDITABLE,id})
/************************************************************action thunk creators ****************************************************************/
export const createGetVehicleActionThunk = () => dispatch => {
    dispatch(createWaitAction());
    VehicleService.getAllVehicle()
    .then(resp => dispatch(createRefreshAction(resp.data)))
    .catch(error => {console.error("unable to Load data! Please retry later",error);});
};

export const createDeleteVehicleActionThunk = id => dispatch => {
    dispatch(createWaitAction());
    VehicleService.deleteVehicleById(id)
    .then(resp => createGetVehicleActionThunk()(dispatch))
    .then(error => {console.error(error); dispatch(createErrAction("unable to Delete data! Please retry later"))});
};

export const createAddVehicleActionThunk = vehi => dispatch => {
    dispatch(createWaitAction());
    VehicleService.createVehicle(vehi)
    .then(resp => createGetVehicleActionThunk()(dispatch))
    .then(error => {console.error(error); dispatch(createErrAction("unable to Save data! Please retry later"))});
};

export const createUpatdateVehicleActionThunk = vehi => dispatch => {
    dispatch(createWaitAction());
    VehicleService.updateVehicleById(vehi)
    .then(resp => createGetVehicleActionThunk()(dispatch))
    .then(error => {console.error(error); dispatch(createErrAction("unable to Update data! Please retry later"))});
};

/************************************************************Reducer****************************************************************/

const vehicleReducer = (oldState = { vehi: null, shallWait: null, errMsg: null}, action) => {
    
    let {vehi, shallWait, errMsg} = oldState;

    switch(action.type){
        case REFRESH:
            vehi = action.vehi;
            shallWait = false;
            errMsg = null;
            break;
        case WAIT:
            shallWait = true;
            break;
        case ERR:
            errMsg = action.errMsg;
            shallWait = false;
            break;   
        case MARK_VEHICLE_EDITABLE:
            vehi = vehi.map(v => v.id === action.id ? {...v, isEditable: true}: v);
            break;
        case UNMARK_VEHICLE_EDITABLE:
            vehi = vehi.map(v => v.id === action.id ? {...v, isEditable: undefined}: v);
            break;
        default:
            break;    
    }
    return { vehi, shallWait, errMsg};
}

export default vehicleReducer;