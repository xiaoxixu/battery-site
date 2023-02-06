import React, {useState} from 'react';

const MegapackXLInput = (setMegapackXLInput) => {

  const [value, setValue] = useState(0)

  return (
    <div className="inputContainer">
    <h1>Magepack</h1>
    {/* <h2><span>{errorMessage}</span></h2> */}
    <div>
        <input
            type="number"
            placeholder="Enter the number of MagepackXL"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
</div>
  )
}

export default MegapackXLInput