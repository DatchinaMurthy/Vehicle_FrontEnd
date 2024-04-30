import axios from "axios";

const apiUrl ="http://localhost:8080/api/Vehicle";


const VehicleService={
  getAllVehicle: () => axios.get(apiUrl),
  deleteVehicleById: id => axios.delete(`${apiUrl}/${id}`),
  updateVehicleById: vehi => axios.put(`${apiUrl}/${vehi.id}`,vehi),
  createVehicle: vehi => axios.post(apiUrl,vehi)

};

export default VehicleService;
  