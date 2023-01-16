import React from 'react'
import leaf1 from "./assets/leaves1-1.png"
import leaf2 from "./assets/leaves2-1.png"
import leaf3 from "./assets/leaves3-1.png"
import leaf4 from "./assets/leaves4-1.png"
import etherjs from "./assets/leaves5-1.png"
import soliditylogo from "./assets/soliditylogo.png"
import htmllogo from "./assets/htmllogo.png"
import remixlogo from "./assets/remixlogo.png"
import hardhatlogo from "./assets/hardhatlogo.png"
import trufflelogo from "./assets/trufflelogo.png"
import apidata from "./assets/apidata.png"
import infuralogo from "./assets/infuralogo.png"

function Knowledge() {
  return (
    <section className='mybrain' id='knowledge'>
      <h2 className='bringfowardone'> How My&nbsp;</h2><h2 className='text-orange'>  Brain &nbsp;</h2><h2 className='bringfowardone'> Is Wired </h2>
      <div className='set'>
        <div><img alt="" className="logo" src={leaf1} /></div>
        <div><img alt="" className="logo" src={leaf3} /></div>
        <div><img alt="" className="logo" src={soliditylogo} /></div>
        <div><img alt="" className="remixlogo" src={remixlogo} /></div>
        <div><img alt="" className="logo" src={trufflelogo} /></div>
        <div><img alt="" className="logo" src={apidata} /></div>
      </div>
      <div className='set set2 yellowline'>
        <div><img alt="" className="logo" src={leaf2} /></div>
        <div><img alt="" className="logo" src={leaf4} /></div>
        <div><img alt="" className="logo" src={etherjs} /></div>
        <div><img alt="" className="logo" src={hardhatlogo} /></div>
        <div><img alt="" className="logo" src={htmllogo} /></div>
        <div><img alt="" className="logo" src={infuralogo} /></div>
      </div>
    </section>
  )
}

export default Knowledge