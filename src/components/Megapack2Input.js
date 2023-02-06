import React, {useState} from 'react';

const Megapack2Input = (setMegapack2Input) => {

  const [value, setValue] = useState(0)

  return (
    <div className="inputContainer">
    <h1>Magepack2</h1>
    {/* <h2><span>{errorMessage}</span></h2> */}
    <div>
        <input
            type="number"
            placeholder="Enter the number of Magepack2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
</div>
  )
  
}

export default Megapack2Input