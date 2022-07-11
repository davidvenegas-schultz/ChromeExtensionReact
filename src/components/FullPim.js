/*global chrome*/

import './FullPim.css'
import { useState } from 'react'
import { useFetchITContext } from '../context.js'
import { FaArrowLeft } from 'react-icons/fa'
import { BsPower } from 'react-icons/bs'
import { BiPowerOff } from 'react-icons/bi'

function FullPim() {
  const { setOpen, currentPIM, setCurrentPIM } = useFetchITContext()
  const [localOpen, setLocalOpen] = useState(false)

  console.log(currentPIM)

  function handleClose() {
    setCurrentPIM(null)
    setOpen(false)
  }

  function openTab(url) {
    var win = window.open(url, '_blank')
    win.focus()
  }

  function handlePowerOn() {
    setLocalOpen(!localOpen)
    // openTab('https://youtube.com/')
    test()
  }

  function handlePowerOff() {
    setLocalOpen(!localOpen)
  }

  chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
    const activeTabId = tabs[0].id;
    chrome.scripting.executeScript(
      {
        target: {tabId: activeTabId},
        function: ()=>alert("React chrome extension alert")
        // function: ()=>{document.body.innerHTML = "Hello World"}
      }
    )
  })

  return (
    <div className={"full-pim-wrapper"}>
      <div className="full-pim-top">
        {localOpen ? null : <FaArrowLeft id="full-pim-back" onClick={handleClose}/>}
        <h2 className="full-pim-title">{currentPIM.name}</h2>
      </div>
      <div className={`full-pim-bottom ${localOpen ? "power-inactive" : "power-active"}`}>
        <h3 className="full-pim-connected">{localOpen ? "Connected" : "Disconnected"}</h3>
        <div className="power-button-wrapper">
          {localOpen ?
          <BsPower id="full-pim-power" onClick={() => handlePowerOff()}/>
          : <BiPowerOff id="full-pim-power" onClick={() => handlePowerOn()}/>
          }
        </div>
      </div>
    </div>
  )
}

export default FullPim