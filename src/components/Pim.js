import './Pim.css'
import { useState } from 'react'
import { useFetchITContext } from '../context.js'
import FullPim from './FullPim'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Pim({ id, name, url }) {
  const { setOpen, setCurrentPIM } = useFetchITContext()
  const [dropdown, setDropdown] = useState(false)
  const [localOpen, setLocalOpen] = useState(false)

  function handleClick() {
    setDropdown(!dropdown)
    setLocalOpen(false)
  }

  function handleSelect() {
    const curPIM = {id: id, name: name, url: url}
    setOpen(true)
    setCurrentPIM(curPIM)
  }

  return (
    <div className='pim-wrapper' key={id} style={dropdown ? {border: '1px solid #999'} : null}>
      <div className="pim-top-section" onClick={handleClick}>
        <h2 className="pim-name" style={dropdown ? {fontSize: "2rem", fontWeight: "700", color: "#333"} : null}>{name}</h2>
        {dropdown ?
          <BsChevronUp className="pim-caret" />
          : <BsChevronDown className="pim-caret" />
        }
      </div>
      {dropdown ?
        <div className="pim-dropdown-wrapper">
          <button id='pim-select-btn' onClick={handleSelect}>Select</button>
          <button id='pim-cancel-btn' onClick={handleClick}>Cancel</button>
        </div>
      : null}
      {localOpen ? <FullPim/> : null}
    </div>
  )
}

export default Pim