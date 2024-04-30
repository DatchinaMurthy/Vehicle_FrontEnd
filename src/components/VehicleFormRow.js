import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAddVehicleActionThunk, createUpatdateVehicleActionThunk,createUnMarkVehicleEditableAction } from "../stateManagement/vehicleReducers";


const VehicleFormRow =({v})=> {
    let [vehicle, setVehicle] =useState(v?{...v}: {id:0, year:'',make:'',model:'',vin:0});
    const dispatch =useDispatch();

    const setField =event =>{
        let fieldName = event.target.name;
        let fieldValue  = event.target.type === "number" ? parseInt(event.target.value): event.target.value;
        setVehicle({...vehicle, [fieldName]: fieldValue });
    }
    
    const handleFormSubmit = event =>{
        if(vehicle.isEditable){
            dispatch(createUpatdateVehicleActionThunk({...vehicle}));
        }else{
            dispatch(createAddVehicleActionThunk({...vehicle}));
            setVehicle({id:0, year:'',make:'',model:'',vin:0});
        }
    }

    const reset = event =>{
        if(vehicle.isEditable){
            dispatch(createUnMarkVehicleEditableAction(vehicle.id));
        }else{
            setVehicle({id:0, year:'',make:'',model:'',vin:0});
        }
    }

    return(
        <form className="row p-1 border-bottom" onSubmit={handleFormSubmit}>
            <div className="col-2">
                <input type="number" className="form-control" value={vehicle.id} name="id" onChange={setField}/>
            </div>
            <div className="col-2">
                <input type="text" className="form-control" value={vehicle.year} name="year" onChange={setField}/>
            </div>
            <div className="col-2">
                <input type="text" className="form-control" value={vehicle.model} name="model" onChange={setField}/>
            </div>
            <div className="col-2">
                <input type="text" className="form-control" value={vehicle.make} name="make" onChange={setField}/>
            </div>
            <div className="col-2">
                <input type="number" className="form-control" value={vehicle.vin} name="vin" onChange={setField}/>
            </div>
            <div className="col-2 mr-1">
                    <button className="btn btn-sm btn-primary me-2">
                            {vehicle.isEditable ? "SAVE" :"ADD" }
                    </button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={reset}>
                            {vehicle.isEditable ? "CANCEL" : "RESET" }
                    </button>
            </div>
        </form>
    );
    };

export default VehicleFormRow;