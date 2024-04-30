import { useDispatch } from "react-redux";
import { createMarkVehicleEditableAction, createDeleteVehicleActionThunk } from "../stateManagement/vehicleReducers";

const VehicleRow = ({v}) =>{
    const dispatch = useDispatch();
    return(
            <div className="row p-1 border-bottom">
                <div className="col-2 text-end">
                    {v.id}
                </div>
                <div className="col">
                    {v.year}
                </div>
                <div className="col-2">
                    {v.make}
                </div>
                <div className="col-2">
                    {v.model}
                </div>
                <div className="col-2">
                    {v.vin}
                </div>
                <div className="col-2">
                    <button className="btn btn-sm btn-primary me-2" onClick={e=> dispatch(createMarkVehicleEditableAction(v.id))}>
                        EDIT
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={e=> dispatch(createDeleteVehicleActionThunk(v.id))}>
                        DELETE
                    </button>
                </div>
            </div>
    );
}
export default VehicleRow;