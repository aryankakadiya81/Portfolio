import React from 'react';
import { use } from 'react';
import { useState } from 'react';


const App = () => {
  let [Amt, SetAmt] = useState(0);
  let [Gstper, SetGstper] = useState(5);
  let [Profitper, SetProfitper] = useState(30);

  let Profit = (Profitper * Amt) / 100;
  let Gst = ((Gstper * (Amt + Profit)) / 100);
  let Total = Amt + Profit + Gst;
  return (
    <>
      <div style={{fontSize:"20px",textAlign:"center"}}>
        <div>
          Ammount:  
          <input
          style={{fontSize:"20px"}}
            type="text"
            value={Amt}
            onChange={(e) => SetAmt(+e.target.value)}
          />
        </div>
        <div>Profit{`(${Profitper}%)`}:<div>{Profit}</div></div>
        <div>Gst{`(${Gstper}%)`}</div><div>{Gst}</div>
        <div>Total value</div><div>{Total}</div>
      </div>
    </>
  )
}

export default App
