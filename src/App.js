import {  Fragment } from 'react';
import Header from './components/Header';
import VehicleManager from './components/VehicleManager';


const App =() => {
  return(
    <Fragment>
      <Header appTitle="Vehicle Info System" />
      <VehicleManager/>
    </Fragment>
  )
}
export default App;
