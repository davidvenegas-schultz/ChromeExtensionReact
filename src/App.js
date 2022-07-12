import Main from './components/Main'
import { FetchITContextProvider, useFetchITContext } from './context'
import FullPim from './components/FullPim.js'

function App() {
  const { connected } = useFetchITContext()

  return (
    <FetchITContextProvider>
      {connected ? <FullPim/> : <Main/>}
    </FetchITContextProvider>
  )
}

export default App