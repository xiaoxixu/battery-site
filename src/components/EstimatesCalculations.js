import React, {useState, useEffect} from 'react';

const EstimatesCalculations = ({megapack, megapack2, megapackXL, powerpack}) => {

  const batterybook = {
    megapackDetails: {
      cost: 50000,
      energy: 2,
      land: 30,
      releaseDate: 2005,
    },
    megapack2Details: {
      cost: 80000,
      energy: 3,
      land: 30,
      releaseDate: 2021,
    },
    megapackXLDetails: {
      cost: 120000,
      energy: 4,
      land: 40,
      releaseDate: 2022,
    },
    powerpackDetails: {
      cost: 10000,
      energy: 1,
      land: 10,
      releaseDate: 2000,
    },
    transformerDetails: {
      cost: 10000,
      land: 10,
      energy: -0.5
    }
  }

  const [cost, setCost] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [land, setLand] = useState(0)

  let total = megapack + megapack2 + megapackXL + powerpack

  let transformer = Math.ceil(total/2)

  useEffect(() => {

    setCost(megapack * batterybook.megapackDetails.cost + 
      megapack2 * batterybook.megapack2Details.cost + 
      megapackXL * batterybook.megapackXLDetails.cost + 
      powerpack * batterybook.powerpackDetails.cost + 
      transformer * batterybook.transformerDetails.cost)

    setEnergy(megapack * batterybook.megapackDetails.energy + 
      megapack2 * batterybook.megapack2Details.energy + 
      megapackXL * batterybook.megapackXLDetails.energy + 
      powerpack * batterybook.powerpackDetails.energy + 
      transformer * batterybook.transformerDetails.energy)

    setLand(megapack * batterybook.megapackDetails.land + 
      megapack2 * batterybook.megapack2Details.land + 
      megapackXL * batterybook.megapackXLDetails.land + 
      powerpack * batterybook.powerpackDetails.land + 
      transformer * batterybook.transformerDetails.land)
  }, [megapack, megapack2, megapackXL, powerpack, transformer]);
  

  
  return (
    <div >
    <h1>Cost: ${cost}</h1>
    <h1>Energy: {energy} MWh</h1>
    <h1>Land: {land} sqft</h1>
    <div>
        
    </div>
</div>
  )
}

export default EstimatesCalculations