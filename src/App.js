import Main from './components/Main'
import { FetchITContextProvider } from './context'

function App() {
  return (
    <FetchITContextProvider>
      <Main/>
    </FetchITContextProvider>
  )
}

export default App