import React, {useState} from 'react';

const PowerpackInput = (setPowerpackInput) => {

  const [value, setValue] = useState(0)

  return (
    <div className="inputContainer">
    <h1>Powerpack</h1>
    {/* <h2><span>{errorMessage}</span></h2> */}
    <div>
        <input
            type="number"
            placeholder="Enter the number of Powerpack"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
</div>
  )
}

export default PowerpackInput