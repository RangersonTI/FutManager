
import { Rotas } from './routes'
import { GlobalStyle } from './shared/global/style'
import { HeaderProvider } from './shared/hook/useHeader'

function App() {
  return (
    <HeaderProvider>
      <GlobalStyle/>
      <Rotas/>
    </HeaderProvider>
  )
}

export default App
