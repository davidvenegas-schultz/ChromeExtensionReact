import '../components/Top.css'
import { useFetchITContext } from '../context'

function Top() {
  const { setTopOpen } = useFetchITContext()

  return (
    <div className='top-container'>
      <div className="top-auto-wrapper">
        <h1>Listening for Desktop Client...</h1>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="top-separator-wrapper">
        <span></span>
        <h4>OR</h4>
        <span></span>
      </div>
      <div className="top-manual-wrapper">
        <h1 onClick={() => setTopOpen(false)}>Connect Manually</h1>
      </div>
    </div>
  )
}

export default Top