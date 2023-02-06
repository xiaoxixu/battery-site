import React, {useState} from 'react';
import BatteryInput from './BatteryInput';
import EstimatesCalculations from "./EstimatesCalculations"
import Mockup from "./Mockup"

const Main = () => {
  const [megapack, setMegapack] = useState(0)
  const [megapack2, setMegapack2] = useState(0)
  const [megapackXL, setMegapackXL] = useState(0)
  const [powerpack, setPowerpack] = useState(0)

  
  return (
    <div>
      <div className="container">
      <div id="box">       
        <BatteryInput setMegapack={setMegapack} setMegapack2={setMegapack2} setMegapackXL={setMegapackXL} setPowerpack={setPowerpack}/>  
      </div>
      <div  id="estimates">
        <span>       
          <EstimatesCalculations megapack={megapack} megapack2={megapack2} megapackXL={megapackXL} powerpack={powerpack}/>
        </span>
        <span id="mock">
          <Mockup megapack={megapack} megapack2={megapack2} megapackXL={megapackXL} powerpack={powerpack}/>
      </span>
      </div>
      
      
  </div>
  </div>
    

  )
}

export default Main;