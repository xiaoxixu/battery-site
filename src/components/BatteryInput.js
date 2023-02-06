import React, {useState} from 'react';

const BatteryInput = ({setMegapack, setMegapack2, setMegapackXL, setPowerpack}) => {

  const [megapackValue, setMegapackValue] = useState(0)
  const [megapack2Value, setMegapack2Value] = useState(0)
  const [megapackXLValue, setMegapackXLValue] = useState(0)
  const [powerpackValue, setPowerpack2Value] = useState(0)

  const handleClick = () => {
    setMegapack2(megapack2Value)
    setMegapack(megapackValue)
    setMegapackXL(megapackXLValue)
    setPowerpack(powerpackValue)
  }

  return (
    <div className="inputContainer">
    <h1>Magepack</h1>
    <div>
        <input
            type="number"
            min="0"
            placeholder="Enter the number of Magepack"
            value={megapackValue}
            onChange={(e) => setMegapackValue(e.target.value? parseInt((e.target.value), 10): "")}
        />
    </div>

    <h1>Magepack2</h1>
    <div>
        <input
            type="number"
            min="0"
            placeholder="Enter the number of Magepack2"
            value={megapack2Value}
            onChange={(e) => setMegapack2Value(e.target.value? parseInt((e.target.value), 10): "")}
        />
    </div>

    <h1>MagepackXL</h1>
    {/* <h2><span>{errorMessage}</span></h2> */}
    <div>
        <input
            type="number"
            min="0"
            placeholder="Enter the number of MagepackXL"
            value={megapackXLValue}
            onChange={(e) => setMegapackXLValue(e.target.value? parseInt((e.target.value), 10): "")}
        />
    </div>

    <h1>Powerpack</h1>
    {/* <h2><span>{errorMessage}</span></h2> */}
    <div>
        <input
            type="number"
            min="0"
            placeholder="Enter the number of MagepackXL"
            value={powerpackValue}
            onChange={(e) => setPowerpack2Value(e.target.value? parseInt((e.target.value), 10): "")}
        />
    </div>
    <button onClick={handleClick}>Show Estimates and Mockup</button>
</div>
  )
}

export default BatteryInput