import React from "react";
import { useState, useEffect } from "react";

const Mockup = ({megapack, megapack2, megapackXL, powerpack}) => {

  const [landLength, setLandLength] = useState()
  const [arrangement, setArrangement] = useState([])

  let total = megapack + megapack2 + megapackXL + powerpack
  let _transformer = Math.ceil(total/2)
  const megapackWidth = 30
  const megapack2Width = 30
  const megapackXLWidth = 40
  const powerpackWidth = 10
  const transformerWidth = 10

  let backgroundStyle = {
    height:`${landLength}%`
  }

  useEffect(() => {

    let _megapack = megapack
    let _megapack2 = megapack2
    let _megapackXL = megapackXL
    let _powerpack = powerpack
    let tmp1 = []
    while (_megapack || _megapack2 || _megapackXL || _powerpack || _transformer) {
      let tmp = []
      let width = 100

      while (_megapackXL && width > megapackXLWidth) {
        tmp.push({style:{
          width: "40%",
          height: "5%",
          backgroundColor: "rgb(237, 220, 175)",
          margin: "1px",
       }, name: "mpXL"})
        width -= 40
        _megapackXL -= 1
      }

      while (_megapack2 && width > megapack2Width) {
        tmp.push({style:{
          width: "30%",
          height: "5%",
          backgroundColor: "rgb(163, 207, 176)",
          margin: "1px",
       }, name: "mp2"})
        width -= 30
        _megapack2 -= 1
      }

      while (_megapack && width > megapackWidth) {
        tmp.push({style:{
          width: "30%",
          height: "5%",
          backgroundColor: "rgb(173, 224, 211)",
          margin: "1px",
          borderWidth: "1px",
          borderRadius: "2px"
       }, name: "mp"})
        width -= 30
        _megapack -= 1
      }

      while (_powerpack && width > powerpackWidth) {
        tmp.push({style:{
          width: "10%",
          height: "5%",
          backgroundColor: "rgb(163, 189, 207)",
          margin: "1px",
       }, name: "pp"})
        width -= 10
        _powerpack -= 1
      }

      while (_transformer && width > transformerWidth) {
        tmp.push({style:{
          width: "10%",
          height: "5%",
          backgroundColor: "rgb(183, 184, 176)",
          margin: "1px",
       }, name:"tf"})
        width -= 10
        _transformer -= 1
      }
      tmp1.push(tmp)

    }
    setArrangement(arrangement=>tmp1)
    setLandLength(arrangement.length)

  }, [megapack, megapack2, megapackXL, powerpack]);

  return (
    <div>
      <div className="rectangle" style={backgroundStyle}>
      {arrangement.map((row, idx) => {
        return (
          <div key={idx}>
            {row.map((battery, subIdx) => {
              return <div key={subIdx} className="rectangle" style={battery.style}>{battery.name}</div>;
            })}
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Mockup