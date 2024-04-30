import { useDispatch, useSelector } from 'react-redux';
import VehicleRow from './VehicleRow';
import VehicleFormRow from './VehicleFormRow';
import { useEffect } from 'react';
import { createGetVehicleActionThunk } from '../stateManagement/vehicleReducers';

const VehicleManager =()=>{


    let vehi = useSelector(state=> state.vehi);
    let shallWait = useSelector(state => state.shallWait);
    let errMsg = useSelector(state => state.errMsg);

    const dispatch =useDispatch();

    useEffect(() => { dispatch(createGetVehicleActionThunk()) }, [dispatch])
    return(
        <section className="container-fluid p-4">
            <h4>Vehicles CURD Operation</h4>
                {shallWait &&
                    <div className="alert alert-info p-2">
                            Please wait while loading data...
                    </div>
                }

                {errMsg &&
                    <div className="alert alert-info p-2">
                     {errMsg}
                    </div>
                }
            <div className="col-sm-9 p-2 mx-auto">
                <div className="row p-1 fw-bold border-bottom border-primary">
                    <div className="col-2">
                            ID#
                    </div>
                    <div className="col-2">
                            YEAR
                    </div>
                    <div className="col-2">
                           MODEL
                    </div>
                    <div className="col-2">
                            MAKE
                    </div>
                    <div className="col-2">
                            VIN
                    </div>
                </div>
                <VehicleFormRow/>
                {(!vehi || vehi.length===0) ?
                    (
                        <div className="row p-1">
                            <div className="col alert alert-info">
                                    No Records Found
                            </div>
                         </div>
                    ):
                    (
                        vehi.map(v=>
                        v.isEditable ?
                        <VehicleFormRow key={v.id} v={v}/>:
                        <VehicleRow key={v.id} v={v}/>
                    )
                    )
                }
            </div>
        </section>
    );
}

export default VehicleManager;